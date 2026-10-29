import {createHmac,randomUUID} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {mailDirectory,loadICloudSettings,iCloudTransport} from './icloud-mail.mjs';
import {validateMacro,composeReply} from '../assets/js/layers/control-center/operations/communications.js';
import {brandedEmail} from '../assets/js/layers/control-center/operations/email-template.js';
export const workerKeychainService='Artanrecords acknowledgment worker';

export function signedQueue(endpoint,secret,fetcher=fetch){
 const target=new URL(endpoint);if(target.protocol!=='https:'||!target.hostname.endsWith('.supabase.co')||target.pathname!=='/functions/v1/enquiry-acknowledgments'||target.search||target.hash||target.username||target.password)throw Error('Use the registered shared acknowledgment service.');
 return async value=>{
  const body=JSON.stringify(value),timestamp=String(Date.now()),signature=createHmac('sha256',secret).update(timestamp+'.'+body).digest('hex');
  const response=await fetcher(target,{method:'POST',headers:{'Content-Type':'application/json','x-artan-timestamp':timestamp,'x-artan-signature':signature},body,signal:AbortSignal.timeout(15000),redirect:'error'});
  if(!response.ok)throw Error('Queue connection not confirmed.');
  return (await response.json()).result;
 };
}

export async function processAcknowledgment({queue,account,transport=iCloudTransport,record=async()=>{},logo,uuid=randomUUID}){
 const lease=uuid(),job=await queue({action:'claim',lease});if(!job)return 'idle';
 let draft;
 try{
  if(!/^[0-9a-f-]{36}$/.test(job.id||'')||!/^\S+@[^\s@]+\.[^\s@]+$/.test(job.reply_email||'')||/[\r\n<>]/.test(job.reply_email)||job.reply_email.length>254)throw Error();
  draft=composeReply(validateMacro(JSON.parse(job.template)),job,'');
  if(/{{|}}/.test(draft.body+draft.subject))throw Error();
 }catch{await queue({action:'hold',lease,reference:job.id});return 'held';}
 let smtp,started=false;
 try{
  smtp=await transport(account);await smtp.verify();
  const begun=await queue({action:'begin',lease,reference:job.id});if(!begun?.recorded)throw Error('Sending permission not confirmed.');started=true;
  const result=await smtp.sendMail({from:{name:account.name,address:account.from},to:job.reply_email,replyTo:account.from,subject:draft.subject,text:draft.body,html:brandedEmail(draft,{logo:'cid:artanrecords-wordmark'}),attachments:[{filename:'artanrecords.png',content:logo,contentType:'image/png',cid:'artanrecords-wordmark',contentDisposition:'inline'}],messageId:`<acknowledgment.${job.id}@artanrecords.com>`,disableFileAccess:true,disableUrlAccess:true});
  if(!result.accepted?.some(value=>String(value).toLowerCase()===job.reply_email.toLowerCase()))throw Error('SMTP acceptance not confirmed.');
  const receipt={reference:job.id,lease,status:'accepted',messageId:String(result.messageId||''),date:new Date().toISOString()};
  await record(receipt);
  for(let attempt=0;attempt<3;attempt++){try{const saved=await queue({action:'accepted',lease,reference:job.id,provider_id:receipt.messageId});if(!saved?.recorded)throw Error();return 'accepted';}catch{if(attempt===2)return 'receipt-pending';}}
 }catch{
  // Never repeat SMTP after the durable begin transition, even after a lost response.
  if(started){try{await record({reference:job.id,lease,status:'uncertain',date:new Date().toISOString()});await queue({action:'hold',lease,reference:job.id});}catch{}return 'uncertain';}
  return 'deferred';
 }finally{smtp?.close();}
}

async function main(){
 const settings=JSON.parse(await readFile(path.join(mailDirectory,'worker.json'),'utf8'));
 const {stdout}=await promisify(execFile)('/usr/bin/security',['find-generic-password','-a',settings.account,'-s',workerKeychainService,'-w'],{timeout:15000,maxBuffer:4096});
 const queue=signedQueue(settings.endpoint,stdout.trim()),account=await loadICloudSettings(),logo=await readFile(new URL('../assets/brand/email-wordmark.png',import.meta.url));
 if(account.from!=='collaborate@artanrecords.com')throw Error('The approved artist-communication sender is required.');
 const directory=path.join(mailDirectory,'acknowledgments');await mkdir(directory,{recursive:true,mode:0o700});
 const record=async receipt=>{await writeFile(path.join(directory,receipt.reference+'.json'),JSON.stringify(receipt),{mode:0o600});};
 let stopped=false;process.on('SIGTERM',()=>{stopped=true;});process.on('SIGINT',()=>{stopped=true;});
 do{try{const status=await processAcknowledgment({queue,account,logo,record});if(status!=='idle')console.log('Acknowledgment worker: '+status);}catch{console.error('Acknowledgment worker connection unavailable; queued applications remain private.');}if(process.argv.includes('--once')||stopped)break;await new Promise(resolve=>setTimeout(resolve,15000));}while(!stopped);
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href)main().catch(()=>{console.error('Acknowledgment worker setup is incomplete.');process.exitCode=1;});
