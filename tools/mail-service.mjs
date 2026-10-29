import {mkdir,readFile,writeFile,readdir,open,rename} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {verifyUpdateOwner} from './update-service.mjs';
import {validateTrustedConnection,allowTrustedCors} from './trusted-connection.mjs';
import {mailDirectory,loadICloudSettings,iCloudTransport} from './icloud-mail.mjs';
import {brandedEmail} from '../assets/js/layers/control-center/operations/email-template.js';
import {domainMailHealth,mailReceipts,workerHealth} from './mail-health.mjs';
const uuid=value=>/^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i.test(value||'');
export function validateReply(value){
 if(!value||!uuid(value.enquiry)||!uuid(value.requestId)||typeof value.subject!=='string'||!value.subject.trim()||value.subject.length>300||/[\r\n\x00-\x1f]/.test(value.subject)||typeof value.body!=='string'||!value.body.trim()||value.body.length>16000||/[\x00-\x08\x0b\x0c\x0e-\x1f]/.test(value.body))throw Error('Enter a valid submission, subject and reply.');
 if(/{{|}}/.test(value.subject+value.body))throw Error('Resolve all template fields before sending.');
 return {enquiry:value.enquiry,requestId:value.requestId,subject:value.subject.trim(),body:value.body.trim(),from:String(value.from||'')};
}
async function bodyOf(request){let body='';for await(const chunk of request){body+=chunk;if(Buffer.byteLength(body)>24000)throw Error('Reply too large.');}return validateReply(JSON.parse(body));}
export async function loadMailEnquiry(id,token,config,fetcher=fetch){
 const response=await fetcher(config.url+'/rest/v1/artan_artist_enquiries?id=eq.'+id+'&select=id,reply_email',{headers:{apikey:config.key,Authorization:'Bearer '+token},signal:AbortSignal.timeout(10000)});
 if(!response.ok)throw Error('The submission could not be verified.');const rows=await response.json();
 if(rows.length!==1||rows[0].id!==id||!/^[^\s@?&#]+@[^\s@?&#]+\.[^\s@?&#]+$/.test(rows[0].reply_email||''))throw Error('The submission has no valid reply address.');
 return rows[0];
}
export function createMailService({enabled=false,config,authorize=verifyUpdateOwner,settings=loadICloudSettings,transport=iCloudTransport,loadEnquiry=loadMailEnquiry,directory=path.join(mailDirectory,'receipts'),remoteOrigin=process.env.CONTROL_PREVIEW_PRIVATE_ORIGIN||''}={}){
 if(remoteOrigin){const url=new URL(remoteOrigin);if(url.protocol!=='https:'||!url.hostname.endsWith('.ts.net')||url.pathname!=='/'||url.username||url.password)throw Error('Use the registered private HTTPS Mac origin.');}
 let sending=false;
 return async(request,response,url)=>{
  if(!url.pathname.startsWith('/api/mail/'))return false;
  const send=(code,value)=>{response.writeHead(code,{'Content-Type':'application/json','Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});response.end(JSON.stringify(value));return true;};
  if(!enabled)return send(503,{error:'iCloud sending is not enabled on this Mac.'});
  let actor,token;
  try{const origin=validateTrustedConnection(request,{remoteOrigin,action:'mail'});allowTrustedCors(response,origin);if(request.method==='OPTIONS'){response.writeHead(204).end();return true;}token=request.headers.authorization?.match(/^Bearer (.+)$/)?.[1];actor=await authorize(token,config);}catch{return send(403,{error:'A trusted connection and active owner account are required.'});}
  let account;try{account=await settings();}catch{return send(503,{error:'The iCloud account and its private Keychain password need setup.'});}
  if(url.pathname==='/api/mail/health'&&request.method==='GET'){
   try{return send(200,{sender:{name:account.name,address:account.from},domain:await domainMailHealth(),worker:await workerHealth(path.join(mailDirectory,'worker-health.json')),receipts:await mailReceipts({directory,acknowledgments:path.join(mailDirectory,'acknowledgments'),actor})});}
   catch{return send(503,{error:'Communication health could not be loaded.'});}
  }
  if(url.pathname==='/api/mail/capabilities'&&request.method==='GET')return send(200,{provider:'iCloud',senders:[{address:account.from,name:account.name}],configured:true,requiresVerification:true});
  if(url.pathname==='/api/mail/verify'&&request.method==='POST'){
   let smtp;try{smtp=await transport(account);await smtp.verify();return send(200,{verified:true,from:account.from,notice:'SMTP authentication verified. Sender-address acceptance still requires a test send.'});}catch{return send(503,{error:'iCloud could not verify this account. Check the private connection and app-specific password.'});}finally{smtp?.close();}
  }
  if(url.pathname!=='/api/mail/send'||request.method!=='POST')return send(405,{error:'Mail action not supported.'});
  if(!/^application\/json(?:;|$)/i.test(request.headers['content-type']||''))return send(415,{error:'Use a JSON reply request.'});
  if(sending)return send(409,{error:'Another message is being processed. Please wait.'});
  sending=true;let smtp,receipt,file;
  try{
   const draft=await bodyOf(request);if(draft.from!==account.from)return send(400,{error:'Choose the configured iCloud sender.'});
   const enquiry=await loadEnquiry(draft.enquiry,token,config),fingerprint=createHash('sha256').update(JSON.stringify({actor,enquiry:draft.enquiry,from:account.from,to:enquiry.reply_email,subject:draft.subject,body:draft.body})).digest('hex');
   await mkdir(directory,{recursive:true,mode:0o700});file=path.join(directory,draft.requestId+'.json');
   try{const previous=JSON.parse(await readFile(file,'utf8'));if(previous.actor!==actor||previous.fingerprint!==fingerprint)return send(409,{error:'This send reference belongs to a different reply.'});return send(previous.status==='accepted'?200:409,{status:previous.status==='accepted'?'accepted':'uncertain',requestId:draft.requestId,message:'This reply was already attempted. Do not resend without checking its receipt.'});}catch(error){if(error.code!=='ENOENT')throw error;}
   const today=new Date().toISOString().slice(0,10),files=(await readdir(directory)).filter(name=>name.endsWith('.json'));
   let count=0;for(const name of files){const item=JSON.parse(await readFile(path.join(directory,name),'utf8'));if(item.date.startsWith(today))count++;}if(count>=50)return send(429,{error:'The daily reply safety limit has been reached.'});
   smtp=await transport(account);await smtp.verify();
   const candidate={requestId:draft.requestId,actor,enquiry:enquiry.id,from:account.from,fingerprint,date:new Date().toISOString(),status:'pending'};
   const handle=await open(file,'wx',0o600);try{await handle.writeFile(JSON.stringify(candidate));}finally{await handle.close();}receipt=candidate;
   const logo=await readFile(new URL('../assets/brand/email-wordmark.png',import.meta.url));
   const result=await smtp.sendMail({from:{name:account.name,address:account.from},to:enquiry.reply_email,replyTo:account.from,subject:draft.subject,text:draft.body,html:brandedEmail(draft,{logo:'cid:artanrecords-wordmark'}),attachments:[{filename:'artanrecords.png',content:logo,contentType:'image/png',cid:'artanrecords-wordmark',contentDisposition:'inline'}],disableFileAccess:true,disableUrlAccess:true});
   if(!result.accepted?.some(address=>String(address).toLowerCase()===enquiry.reply_email.toLowerCase()))throw Error('Acceptance not confirmed.');
   receipt={...receipt,status:'accepted',messageId:String(result.messageId||'')};await writeFile(file+'.tmp',JSON.stringify(receipt),{mode:0o600});await rename(file+'.tmp',file);
   return send(200,{status:'accepted',requestId:draft.requestId,from:account.from,message:'Accepted by iCloud for sending. Delivery is not yet confirmed.'});
  }catch{
   if(receipt){try{await writeFile(file+'.tmp',JSON.stringify({...receipt,status:'uncertain'}),{mode:0o600});await rename(file+'.tmp',file);}catch{}return send(502,{status:'uncertain',error:'The sending result is uncertain. Do not send again until this reference has been checked.'});}
   return send(400,{error:'The reply could not be sent. Verify the submission, sender and iCloud connection.'});
  }finally{smtp?.close();sending=false;}
 };
}
