import test from 'node:test';
import assert from 'node:assert/strict';
import {Readable} from 'node:stream';
import {mkdtemp,rm,readFile,writeFile} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createMailService,validateReply} from './mail-service.mjs';
import {validateICloudSettings} from './icloud-mail.mjs';
import {domainMailHealth,mailReceipts,workerHealth} from './mail-health.mjs';
const enquiry='98000000-0000-0000-0000-000000000001',requestId='98000000-0000-0000-0000-000000000002';
const draft={enquiry,requestId,from:'collaborate@artanrecords.com',subject:'Your submission',body:'Hello Artist'};
function request(route='/api/mail/send',method='POST',value=draft,headers={}){return Object.assign(Readable.from(method==='POST'?[JSON.stringify(value)]:[]),{method,url:route,headers:{host:'127.0.0.1:8894',origin:'http://127.0.0.1:8894',authorization:'Bearer fixture','x-control-center-action':'mail','content-type':'application/json',...headers}});}
async function call(service,req){const response={setHeader(){},writeHead(code){this.code=code;return this;},end(body){this.body=body?JSON.parse(body):null;}};await service(req,response,new URL(req.url,'http://127.0.0.1'));return response;}
const options={enabled:true,authorize:async()=> 'owner',settings:async()=>({user:'test@icloud.com',from:draft.from,name:'Artanrecords'}),loadEnquiry:async()=>({id:enquiry,reply_email:'artist@example.test'})};
test('iCloud settings and replies reject sender and header injection',()=>{assert.throws(()=>validateICloudSettings({user:'test@icloud.com',from:'evil@example.test'}));assert.throws(()=>validateReply({...draft,subject:'Hello\r\nBcc: other'}));assert.throws(()=>validateReply({...draft,body:''}));assert.throws(()=>validateReply({...draft,requestId:'../../elsewhere'}));});
test('SMTP fails closed before transport for disabled service or untrusted callers',async()=>{assert.equal((await call(createMailService(),request())).code,503);let connected=false;const service=createMailService({...options,transport:async()=>{connected=true;throw Error('Do not connect');}});assert.equal((await call(service,request(undefined,undefined,undefined,{origin:'https://evil.test'}))).code,403);assert.equal(connected,false);});
test('owner-only SMTP sends to the database recipient once and never stores message content',async()=>{const directory=await mkdtemp(path.join(tmpdir(),'artan-mail-test-'));let count=0;try{const service=createMailService({...options,directory,transport:async()=>({verify:async()=>true,close(){},sendMail:async value=>{count++;assert.equal(value.to,'artist@example.test');assert.equal(value.from.address,draft.from);assert.equal(value.disableFileAccess,true);return {accepted:[value.to],messageId:'fixture-message'};}})});const first=await call(service,request());assert.equal(first.body.status,'accepted');assert.equal((await call(service,request())).body.status,'accepted');assert.equal(count,1);assert.equal((await call(service,request(undefined,undefined,{...draft,body:'Changed message'}))).code,409);const stored=await readFile(path.join(directory,requestId+'.json'),'utf8');assert.doesNotMatch(stored,/Hello Artist|artist@example.test|Your submission/);}finally{await rm(directory,{recursive:true,force:true});}});
test('uncertain SMTP attempts cannot be blindly resent',async()=>{const directory=await mkdtemp(path.join(tmpdir(),'artan-mail-test-'));let count=0;try{const service=createMailService({...options,directory,transport:async()=>({verify:async()=>true,close(){},sendMail:async()=>{count++;throw Error('Timeout after DATA');}})});assert.equal((await call(service,request())).body.status,'uncertain');assert.equal((await call(service,request())).body.status,'uncertain');assert.equal(count,1);}finally{await rm(directory,{recursive:true,force:true});}});
test('SMTP authentication check sends no message',async()=>{let sent=false;const service=createMailService({...options,transport:async()=>({verify:async()=>true,close(){},sendMail:async()=>{sent=true;}})});assert.equal((await call(service,request('/api/mail/verify','POST',{}))).body.verified,true);assert.equal(sent,false);});
test('mail diagnostics distinguish missing DNS from lookup failure',async()=>{
 const value=await domainMailHealth(async name=>{if(name==='artanrecords.com')return [['v=spf1 include:icloud.com ~all']];if(name.startsWith('sig1'))return [['v=DKIM1; p=public']];throw Object.assign(Error(),{code:name.startsWith('_dmarc')?'ENODATA':'ETIMEOUT'});});
 assert.equal(value.spf,'published');assert.equal(value.dkim,'published');assert.equal(value.dmarc,'missing');assert.equal(value.bimi,'unavailable');assert.throws(()=>validateReply({...draft,body:'Hello {{name}}'}));
});
test('receipt history is actor scoped and excludes private message content',async()=>{
 const directory=await mkdtemp(path.join(tmpdir(),'mail-health-'));try{
  await writeFile(path.join(directory,requestId+'.json'),JSON.stringify({actor:'owner',enquiry,date:new Date().toISOString(),status:'pending',body:'private message',recipient:'private@example.test'}));
  assert.deepEqual(await mailReceipts({directory,acknowledgments:path.join(directory,'none'),actor:'other'}),[]);
  const rows=await mailReceipts({directory,acknowledgments:path.join(directory,'none'),actor:'owner'});assert.equal(rows[0].status,'uncertain');assert.doesNotMatch(JSON.stringify(rows),/private message|private@example/);
  const file=path.join(directory,'health.json');await writeFile(file,JSON.stringify({checkedAt:'2026-01-01T00:00:00Z',status:'idle',pendingReceipts:0}));assert.equal((await workerHealth(file,Date.parse('2026-01-01T00:02:00Z'))).online,false);
 }finally{await rm(directory,{recursive:true,force:true});}
});
