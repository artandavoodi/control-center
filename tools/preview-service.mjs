import {spawn} from 'node:child_process';
import {mkdir,open,readFile,appendFile} from 'node:fs/promises';
import {homedir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {loadPreviewRegistry,publicPreviewEntry} from './preview-registry.mjs';
import {verifyUpdateOwner,redactUpdateOutput} from './update-service.mjs';
import {validateTrustedConnection,allowTrustedCors} from './trusted-connection.mjs';
const worker=fileURLToPath(new URL('./preview-worker.mjs',import.meta.url));
const logRoot=path.join(homedir(),'Library/Logs/Artan/previews');
export function validatePreviewConnection(request,remoteOrigin=''){
 return validateTrustedConnection(request,{remoteOrigin,action:'previews'});
}
export function createPreviewService({enabled=false,config,registry=loadPreviewRegistry,authorize=verifyUpdateOwner,launch=spawn,remoteOrigin=process.env.CONTROL_PREVIEW_PRIVATE_ORIGIN||'',probe=async port=>{
 try{const response=await fetch('http://127.0.0.1:'+port+'/',{method:'HEAD',signal:AbortSignal.timeout(1000)});return {occupied:true,ready:response.ok};}catch{return {occupied:false,ready:false};}
},logs=logRoot}={}){
 if(remoteOrigin){const address=new URL(remoteOrigin);if(address.protocol!=='https:'||!address.hostname.endsWith('.ts.net')||address.pathname!=='/'||address.username||address.password)throw Error('A private Tailscale HTTPS origin is required.');}
 const pending=new Set();
 return async(request,response,url)=>{
  if(!url.pathname.startsWith('/api/previews/'))return false;
  const send=(status,data)=>{response.writeHead(status,{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});response.end(JSON.stringify(data));};
  if(!enabled){send(503,{error:'Local Development is disabled on this server.'});return true;}
  try{
   const origin=validatePreviewConnection(request,remoteOrigin);
   allowTrustedCors(response,origin);
   if(request.method==='OPTIONS'){response.writeHead(204).end();return true;}
   const account=await authorize(request.headers.authorization?.match(/^Bearer (.+)$/)?.[1],config);
   const entries=await registry();
   if(request.method==='GET'&&url.pathname==='/api/previews/catalogue'){
    const repositories=await Promise.all(entries.filter(item=>item.domains?.length&&item.strategy).map(async item=>({...publicPreviewEntry(item),...await probe(item.port)})));
    send(200,{repositories,privateOrigin:remoteOrigin,remoteConnected:Boolean(remoteOrigin),notice:'Only registered websites with custom domains are listed. No update, publication or database change is performed.'});return true;
   }
   const match=url.pathname.match(/^\/api\/previews\/([a-z0-9-]+)\/(start|status)$/),entry=entries.find(item=>item.id===match?.[1]);
   if(!entry){send(404,{error:'Registered preview not found.'});return true;}
   if(!entry.strategy){send(409,{error:entry.reason||'This repository has no website preview.'});return true;}
   const localUrl='http://127.0.0.1:'+entry.port+'/',remote=request.headers.origin==='https://control.artan.live'||Boolean(remoteOrigin&&request.headers.host===new URL(remoteOrigin).host);
   const viewUrl=remote?entry.privateUrl||null:localUrl;
   const result=async()=>({id:entry.id,...await probe(entry.port),url:viewUrl,localUrl,output:redactUpdateOutput(await readFile(path.join(logs,entry.id+'.log'),'utf8').catch(()=> '')).slice(-16000),message:remote&&!viewUrl?'Mac preview controls are connected. A private preview address is required to view this site from another device.':undefined});
   if(request.method==='GET'&&match[2]==='status'){send(200,await result());return true;}
   if(request.method!=='POST'||match[2]!=='start'){send(405,{error:'Method not allowed.'});return true;}
   if(pending.has(entry.id)){send(409,{error:'This preview is already starting.'});return true;}
   pending.add(entry.id);
   try{
    const existing=await probe(entry.port);
    if(existing.occupied){send(200,{...await result(),message:'This port is already in use. No process was replaced. Verify the open preview before using it.'});return true;}
    await mkdir(logs,{recursive:true,mode:0o700});
    const log=await open(path.join(logs,entry.id+'.log'),'w',0o600);
    const command=entry.strategy==='website'?['npm',['run','dev']]:entry.strategy==='control'?[process.execPath,['server.mjs','--updates','--previews']]:[process.execPath,[worker,entry.id]];
    let child;
    try{child=launch(command[0],command[1],{cwd:entry.directory,shell:false,detached:true,stdio:['ignore',log.fd,log.fd],env:{...process.env,DEVELOPER_MODE_PORT:String(entry.port),PORT:String(entry.port)}});
     await new Promise((resolve,reject)=>{child.once('spawn',resolve);child.once('error',reject);});child.unref();
    }finally{await log.close();}
    await appendFile(path.join(logs,'audit.jsonl'),JSON.stringify({account,repository:entry.id,action:'preview.start',pid:child.pid,time:new Date().toISOString()})+'\n',{mode:0o600});
    for(let attempt=0;attempt<30;attempt++){if((await probe(entry.port)).ready)break;await new Promise(resolve=>setTimeout(resolve,300));}
    send(202,await result());
   }finally{pending.delete(entry.id);}
  }catch(error){send(403,{error:redactUpdateOutput(error.message||'Preview request rejected.')});}
  return true;
 };
}
