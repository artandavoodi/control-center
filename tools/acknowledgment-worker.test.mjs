import test from 'node:test';
import assert from 'node:assert/strict';
import {processAcknowledgment,signedQueue} from './acknowledgment-worker.mjs';
const job={id:'98400000-0000-4000-8000-000000000002',artist_name:'Artist',reply_email:'artist@example.test',payload:{name:'Person'},template:JSON.stringify({subject:'Received',body:'Thanks {{name}} · {{reference}}'})};
const account={from:'collaborate@artanrecords.com',name:'Artanrecords'};
test('worker sends only a durably claimed application and records acceptance',async()=>{
 const actions=[],receipts=[];let message;
 const result=await processAcknowledgment({account,logo:Buffer.from('fixture'),queue:async value=>{actions.push(value.action);return value.action==='claim'?job:{recorded:true};},transport:async()=>({verify:async()=>{},close(){},sendMail:async value=>{message=value;return {accepted:[value.to],messageId:'fixture'};}}),record:async value=>receipts.push(value)});
 assert.equal(result,'accepted');assert.deepEqual(actions,['claim','begin','accepted']);assert.equal(message.to,job.reply_email);assert.match(message.text,/Thanks Person/);assert.match(message.html,/cid:artanrecords-wordmark/);assert.equal(receipts[0].status,'accepted');assert.equal('recipient' in receipts[0],false);
});
test('worker never sends without confirmed begin and does not retry SMTP after an uncertain send',async()=>{
 let sends=0;const actions=[];const transport=async()=>({verify:async()=>{},close(){},sendMail:async()=>{sends++;throw Error('Timeout');}});
 assert.equal(await processAcknowledgment({account,queue:async value=>value.action==='claim'?job:null,transport}),'deferred');assert.equal(sends,0);
 assert.equal(await processAcknowledgment({account,queue:async value=>{actions.push(value.action);return value.action==='claim'?job:{recorded:true};},transport}),'uncertain');assert.equal(sends,1);assert.deepEqual(actions,['claim','begin','hold']);
});
test('worker retries only receipt persistence, not SMTP, and holds invalid templates',async()=>{
 let sends=0,settles=0;const transport=async()=>({verify:async()=>{},close(){},sendMail:async value=>{sends++;return {accepted:[value.to]};}});
 assert.equal(await processAcknowledgment({account,transport,queue:async value=>{if(value.action==='claim')return job;if(value.action==='accepted'){settles++;throw Error();}return {recorded:true};}}),'receipt-pending');assert.equal(sends,1);assert.equal(settles,3);
 assert.equal(await processAcknowledgment({account,transport,queue:async value=>value.action==='claim'?{...job,template:'bad'}:{recorded:true}}),'held');assert.equal(sends,1);
});
test('worker has no SMTP activity for an empty queue and rejects noncanonical endpoints',async()=>{
 assert.equal(await processAcknowledgment({account,queue:async()=>null,transport:async()=>{throw Error('Do not connect');}}),'idle');assert.throws(()=>signedQueue('http://evil.test/','secret'));
});
