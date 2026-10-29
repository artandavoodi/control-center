import {resolveTxt} from 'node:dns/promises';
import {readFile,readdir} from 'node:fs/promises';
import path from 'node:path';

export async function domainMailHealth(lookup=resolveTxt){
 const records=await Promise.all([['spf','artanrecords.com'],['dkim','sig1._domainkey.artanrecords.com'],['dmarc','_dmarc.artanrecords.com'],['bimi','default._bimi.artanrecords.com']].map(async([kind,name])=>{
  try{const values=(await lookup(name)).map(parts=>parts.join(''));const value=values.find(value=>kind==='spf'?value.startsWith('v=spf1'):kind==='dmarc'?value.startsWith('v=DMARC1'):kind==='bimi'?value.startsWith('v=BIMI1'):/\bp=\S+/.test(value));return [kind,value?'published':'missing'];}
  catch(error){return [kind,['ENODATA','ENOTFOUND'].includes(error.code)?'missing':'unavailable'];}
 }));
 return {domain:'artanrecords.com',...Object.fromEntries(records),notice:'DNS publication is not proof of message authentication or inbox delivery. Brand-logo approval is separate.'};
}

export async function mailReceipts({directory,acknowledgments,actor}){
 const receipts=[];
 for(const [folder,kind]of [[directory,'reply'],[acknowledgments,'acknowledgment']]){
  let files;try{files=await readdir(folder);}catch(error){if(error.code==='ENOENT')continue;throw error;}
  for(const file of files){
   if(!/^[0-9a-f-]{36}\.json$/i.test(file))continue;
   try{const row=JSON.parse(await readFile(path.join(folder,file),'utf8'));if(kind==='reply'&&row.actor!==actor)continue;
    if(!['accepted','uncertain','pending'].includes(row.status)||!Number.isFinite(Date.parse(row.date)))continue;
    receipts.push({kind,reference:kind==='reply'?row.enquiry:row.reference,requestId:row.requestId||null,date:row.date,status:row.status==='pending'?'uncertain':row.status});
   }catch{/* An unreadable receipt is not evidence of successful sending. */}
  }
 }
 return receipts.sort((a,b)=>b.date.localeCompare(a.date)).slice(0,100);
}

export async function workerHealth(file,now=Date.now()){
 try{const value=JSON.parse(await readFile(file,'utf8'));return {online:Number.isFinite(Date.parse(value.checkedAt))&&now-Date.parse(value.checkedAt)<90000,checkedAt:value.checkedAt,status:['idle','accepted','held','uncertain','deferred','receipt-pending','unavailable'].includes(value.status)?value.status:'unavailable',pendingReceipts:Number.isSafeInteger(value.pendingReceipts)?value.pendingReceipts:null};}
 catch{return {online:false,status:'unavailable',pendingReceipts:null};}
}
