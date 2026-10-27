import {readdir,readFile,mkdir,appendFile} from 'node:fs/promises';
import {homedir} from 'node:os';
import path from 'node:path';
import {spawn} from 'node:child_process';
import {randomUUID} from 'node:crypto';
import {captureUpdateLine,updateResult} from './update-results.mjs';
import {validateTrustedConnection,allowTrustedCors} from './trusted-connection.mjs';
const directory=path.join(homedir(),'Documents/Neuroartan/I/04 - Infrastructure/06 - Platform Infrastructure/01 - Standards & Governance/04 - Prompts/02 - Update');
export async function updateCatalogue(root=directory){
 const result=[];for(const file of (await readdir(root)).filter(file=>/^\d\d - .*\.md$/.test(file)).sort()){
  const text=await readFile(path.join(root,file),'utf8'),actions=[];
  for(const match of text.matchAll(/update\.mjs" (plan|check|publish|registry)(?: --only ([a-z0-9,-]+))?/g)){const args=[match[1],...(match[2]?['--only',match[2]]:[])];if(!actions.some(action=>action.method===match[1]))actions.push({method:match[1],args});}
  if(actions.length){const publish=actions.find(action=>action.method==='publish');if(publish){for(const method of ['plan','check'])if(!actions.some(action=>action.method===method))actions.push({method,args:[method,...publish.args.slice(1)]});}if(file.startsWith('11')&&!actions.some(action=>action.method==='registry'))actions.push({method:'registry',args:['registry']});result.push({id:file.slice(0,2),title:file.replace(/^\d\d - |\.md$/g,'').replace(/ARTAN RECORDS/g,'ARTANRECORDS'),actions});}
 }return result;
}
export function redactUpdateOutput(text){return text.replaceAll(homedir(),'~').replace(/(?:sb_secret_|sk_live_|sk_test_)[A-Za-z0-9_-]+/g,'[redacted]').replace(/Bearer\s+\S+/gi,'Bearer [redacted]').replace(/eyJ[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+/g,'[redacted token]');}
export async function verifyUpdateOwner(token,config,fetcher=fetch){
 if(!token||token.length>8192)throw Error('Sign in with an authorized owner account.');
 const headers={apikey:config.key,Authorization:'Bearer '+token};
 const identity=await fetcher(config.url+'/auth/v1/user',{headers,signal:AbortSignal.timeout(10000)});if(!identity.ok)throw Error('Your session could not be verified.');const user=await identity.json();
 if(!/^[a-f0-9-]{36}$/.test(user.id||''))throw Error('Invalid account identity.');
 const response=await fetcher(config.url+'/rest/v1/control_center_staff?select=account_id,enabled,is_owner&account_id=eq.'+user.id,{headers,signal:AbortSignal.timeout(10000)});if(!response.ok)throw Error('Owner access could not be verified.');const [staff]=await response.json();
 if(staff?.account_id!==user.id||!staff.enabled||!staff.is_owner)throw Error('Only an active Control Center owner may run updates.');return user.id;
}
export function createUpdateService({enabled=false,config,runner=path.join(directory,'runtime/update.mjs'),catalogue=updateCatalogue,launch=spawn,authorize=verifyUpdateOwner,remoteOrigin=process.env.CONTROL_PREVIEW_PRIVATE_ORIGIN||'',historyFile=path.join(homedir(),'Library/Logs/Artan/control-center-update-history.jsonl')}={}){
 const jobs=new Map();let running=null;
 const restored=(async()=>{
  if(!historyFile)return;
  try{
   const legacy=await readFile(path.join(path.dirname(historyFile),'control-center-updates.jsonl'),'utf8'),docs=await catalogue();
   for(const line of legacy.split('\n')){
    if(!line)continue;try{
     const record=JSON.parse(line);if(!record.id||!record.account)continue;
     const job=jobs.get(record.id)||{id:record.id,account:record.account,document:record.document,method:record.method,title:docs.find(doc=>doc.id===record.document)?.title||'Earlier update',output:'Detailed terminal output was not retained by the earlier service.'};
     if(record.event==='started'){job.startedAt=record.time;job.status='interrupted';}else{job.finishedAt=record.time;job.status=record.event;}
     job.result=updateResult(job);jobs.set(job.id,job);
    }catch{/* Keep readable historical events without inventing missing details. */}
   }
  }catch(error){if(error.code!=='ENOENT')throw error;}
  try{
   for(const line of (await readFile(historyFile,'utf8')).split('\n')){
    if(!line)continue;
    try{
     const job=JSON.parse(line);
     if(job.id&&job.account){if(job.status==='running'){job.status='interrupted';job.result=updateResult(job);}jobs.set(job.id,job);}
    }catch{/* Preserve valid entries around a truncated final record. */}
   }
  }catch(error){if(error.code!=='ENOENT')throw error;}
  while(jobs.size>200)jobs.delete(jobs.keys().next().value);
 })();
 restored.catch(()=>{});
 let historyWrites=Promise.resolve();
 const persist=job=>{const record=JSON.stringify(job)+'\n';historyWrites=historyWrites.catch(()=>{}).then(async()=>{if(!historyFile)return;await mkdir(path.dirname(historyFile),{recursive:true,mode:0o700});await appendFile(historyFile,record,{mode:0o600});});return historyWrites;};
 return async function handle(request,response,url){
  if(!url.pathname.startsWith('/api/updates/'))return false;
  const send=(status,body)=>{response.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});response.end(JSON.stringify(body));};
  if(!enabled){send(503,{error:'The local update service is not enabled. Start the trusted local server with --updates. Live hosting does not execute local prompts.'});return true;}
  let reservation=null;
  try{
   const origin=validateTrustedConnection(request,{remoteOrigin,action:'updates'});allowTrustedCors(response,origin);
   if(request.method==='OPTIONS'){response.writeHead(204).end();return true;}
   const token=request.headers.authorization?.match(/^Bearer (.+)$/)?.[1],account=await authorize(token,config);
   await restored;
   const docs=await catalogue();
   if(request.method==='GET'&&url.pathname==='/api/updates/catalogue'){const layers=JSON.parse(await readFile(path.join(path.dirname(runner),'layers.json'),'utf8'));send(200,{layers:layers.layers.map(({id,domains=[]})=>({id,domains})),unconfiguredDomains:layers.unconfiguredDomains||[],documents:docs.map(({id,title,actions})=>({id,title,methods:actions.map(action=>action.method)})),jobs:[...jobs.values()].filter(job=>job.account===account).map(({account,...job})=>job)});return true;}
   if(request.method==='GET'&&url.pathname.startsWith('/api/updates/jobs/')){const job=jobs.get(url.pathname.split('/').pop());if(!job||job.account!==account){send(404,{error:'Job not found.'});return true;}const {account:owner,...safe}=job;send(200,safe);return true;}
   if(request.method==='POST'&&/^\/api\/updates\/jobs\/[^/]+\/read$/.test(url.pathname)){
    const job=jobs.get(url.pathname.split('/').at(-2));if(!job||job.account!==account){send(404,{error:'Notification not found.'});return true;}
    if(job.status==='running'){send(409,{error:'The update is still running.'});return true;}
    job.readAt||=new Date().toISOString();await persist(job);const {account:owner,...safe}=job;send(200,safe);return true;
   }
   if(request.method!=='POST'||url.pathname!=='/api/updates/jobs'){send(405,{error:'Method not allowed.'});return true;}
   let raw='';for await(const chunk of request){raw+=chunk;if(raw.length>2048)throw Error('Request is too large.');}const body=JSON.parse(raw),doc=docs.find(doc=>doc.id===body.document),action=doc?.actions.find(action=>action.method===body.method);
   if(!action)throw Error('Choose a registered update action.');if(body.method==='publish'&&body.confirmation!=='PUBLISH REVIEWED CHANGES')throw Error('Review the selected repositories and confirm publication first.');
   const requestId=request.headers['idempotency-key'];if(!/^[a-zA-Z0-9-]{16,100}$/.test(requestId||''))throw Error('A unique request identifier is required.');
   const duplicate=[...jobs.values()].find(job=>job.account===account&&job.requestId===requestId);if(duplicate){const {account:owner,...safe}=duplicate;send(200,safe);return true;}
   if(running){send(409,{error:'An update is already running. Wait for its result before starting another.'});return true;}
   if(jobs.size>=200)jobs.delete(jobs.keys().next().value);
   const id=randomUUID(),job={id,account,requestId,document:doc.id,title:doc.title,method:body.method,status:'running',startedAt:new Date().toISOString(),output:''};
   running=id;reservation=id;
   const logRoot=historyFile?path.dirname(historyFile):path.join(homedir(),'Library/Logs/Artan');await mkdir(logRoot,{recursive:true,mode:0o700});
   const audit=event=>appendFile(path.join(logRoot,'control-center-updates.jsonl'),JSON.stringify({id,account,document:doc.id,method:body.method,event,time:new Date().toISOString()})+'\n');await audit('started');
   jobs.set(id,job);running=id;
   persist(job).catch(()=>{job.historyWarning='Update history could not be saved on this computer.';});
   let child;
   const executionPath=[path.dirname(process.execPath),path.join(homedir(),'.deno/bin'),'/opt/homebrew/bin','/usr/local/bin',process.env.PATH].filter(Boolean).join(path.delimiter);
   try{child=launch(process.execPath,[runner,...action.args],{cwd:path.dirname(runner),shell:false,detached:process.platform!=='win32',env:{...process.env,PATH:executionPath,GIT_TERMINAL_PROMPT:'0'},stdio:['ignore','pipe','pipe']});}
   catch(error){job.status='failed';job.finishedAt=new Date().toISOString();job.output=redactUpdateOutput(error.message||'The update process could not start.');job.problem='The update process could not start.';job.result=updateResult(job);await persist(job).catch(()=>{job.historyWarning='Update history could not be saved on this computer.';});running=null;await audit('failed').catch(()=>{});const {account:owner,...safe}=job;send(202,safe);return true;}
   const timer=setTimeout(()=>{try{if(process.platform!=='win32'&&child.pid)process.kill(-child.pid,'SIGTERM');else child.kill('SIGTERM');}catch{}job.problem='Time limit reached.';job.output+='\nTime limit reached. Review repository state before retrying.';},30*60*1000);
   let partial='';
   const output=chunk=>{const text=chunk.toString();job.output=redactUpdateOutput(job.output+text).slice(-32000);partial+=text;const lines=partial.split(/\r?\n/);partial=lines.pop().slice(-4000);for(const line of lines)captureUpdateLine(job,redactUpdateOutput(line));};child.stdout?.on('data',output);child.stderr?.on('data',output);
   const finish=async(status,code)=>{if(job.status!=='running')return;clearTimeout(timer);if(partial)captureUpdateLine(job,redactUpdateOutput(partial));job.status=status;job.exitCode=code;job.finishedAt=new Date().toISOString();job.result=updateResult(job);await persist(job).catch(()=>{job.historyWarning='Update history could not be saved on this computer.';});running=null;await audit(status).catch(()=>{});};
   child.on('error',()=>finish('failed',null));child.on('close',code=>finish(code===0?'succeeded':'failed',code));
   const {account:owner,...safe}=job;send(202,safe);
  }catch(error){if(reservation===running&&!jobs.has(reservation))running=null;send(403,{error:error.message||'Update request was rejected.'});}
  return true;
 };
}
