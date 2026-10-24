import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {mkdtemp,writeFile,readFile,stat,rm} from 'node:fs/promises';
import {EventEmitter} from 'node:events';
import {captureUpdateLine,updateResult} from './update-results.mjs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createUpdateService,verifyUpdateOwner,redactUpdateOutput,updateCatalogue} from './update-service.mjs';
test('progress records completed work rather than an elapsed-time guess',()=>{
 const job={};captureUpdateLine(job,'Progress: 7/36 · Validated records');assert.deepEqual(job.progress,{completed:7,total:36,phase:'Validated records'});
});

test('manual catalogue has one full publish action per document and read-only inspection',async t=>{
 const directory=await mkdtemp(path.join(tmpdir(),'control-update-catalogue-'));t.after(()=>rm(directory,{recursive:true,force:true}));
 for(let index=0;index<19;index++){const scope=index===11?' --only registry-consumers':'';await writeFile(path.join(directory,String(index).padStart(2,'0')+' - UPDATE.md'),'node "$HOME/runtime/update.mjs" publish'+scope+'\nnode "$HOME/runtime/update.mjs" publish'+scope);}
 const docs=await updateCatalogue(directory);assert.equal(docs.length,19);
 for(const doc of docs){assert.equal(doc.actions.filter(a=>a.method==='publish').length,1);assert.ok(doc.actions.some(a=>a.method==='plan'));assert.ok(doc.actions.some(a=>a.method==='check'));}
 assert.deepEqual(docs.find(doc=>doc.id==='00').actions.find(a=>a.method==='publish').args,['publish']);
 assert.deepEqual(docs.find(doc=>doc.id==='11').actions.find(a=>a.method==='registry').args,['registry']);
});
test('owner authorization checks authenticated identity and active ownership',async()=>{
 const id='11111111-1111-4111-8111-111111111111';
 for(const enabled of [false,true])for(const is_owner of [false,true]){
  let calls=0;const fetcher=async()=>({ok:true,json:async()=>++calls===1?{id}:[{account_id:id,enabled,is_owner}]});
  const result=verifyUpdateOwner('test',{key:'public',url:'https://example.test'},fetcher);
  if(enabled&&is_owner)assert.equal(await result,id);else await assert.rejects(result);
 }
});
test('service fails closed by default and rejects foreign origins and unknown actions',async t=>{
 let launches=0;
 const service=createUpdateService({enabled:true,authorize:async()=> 'owner',catalogue:async()=>[{id:'00',title:'All',actions:[{method:'publish',args:['publish']}]}],launch:()=>{launches++;throw Error('not expected');}});
 const server=createServer((req,res)=>service(req,res,new URL(req.url,'http://localhost')));await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));t.after(()=>server.close());
 const url='http://127.0.0.1:'+server.address().port;
 const headers={'X-Control-Center-Action':'updates','Sec-Fetch-Site':'same-origin','Authorization':'Bearer test','Content-Type':'application/json','Idempotency-Key':'11111111-1111-4111-8111-111111111111'};
 for(const body of [{document:'00',method:'arbitrary'},{document:'00',method:'publish'}])assert.equal((await fetch(url+'/api/updates/jobs',{method:'POST',headers,body:JSON.stringify(body)})).status,403);
 assert.equal((await fetch(url+'/api/updates/catalogue',{headers:{...headers,Origin:'https://evil.test'}})).status,403);assert.equal(launches,0);
});
test('output removes recognizable credentials and local home paths',()=>{
 const output=redactUpdateOutput('Bearer secret sb_secret_example sk_live_example eyJabc.def.ghi');
 assert.ok(!output.includes('Bearer secret'));assert.ok(!output.includes('sb_secret_example'));assert.ok(!output.includes('eyJabc.def.ghi'));
});
test('private online updates support preflight but still authorize every action',async t=>{
 let authorized=0;
 const service=createUpdateService({enabled:true,remoteOrigin:'https://mac.example.ts.net',historyFile:null,catalogue:async()=>[],authorize:async()=>{authorized++;return 'owner';}});
 const server=createServer((req,res)=>service(req,res,new URL(req.url,'http://localhost')));await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));t.after(()=>server.close());
 const url='http://127.0.0.1:'+server.address().port+'/api/updates/jobs',headers={Origin:'https://control.artan.live','X-Control-Center-Action':'updates'};
 const preflight=await fetch(url,{method:'OPTIONS',headers});assert.equal(preflight.status,204);assert.equal(authorized,0);assert.match(preflight.headers.get('access-control-allow-headers'),/Idempotency-Key/);
 const result=await fetch(url,{method:'POST',headers,body:JSON.stringify({document:'unknown',method:'check'})});assert.equal(result.status,403);assert.equal(authorized,1);assert.match((await result.json()).error,/registered update/);
 const forbidden=await fetch(url,{method:'POST',headers:{...headers,Origin:'https://evil.test'},body:'{}'});assert.equal(forbidden.status,403);assert.equal(authorized,1);
});
test('partial publication is reported honestly rather than as a successful deployment',()=>{
 const job={title:'Update All',method:'publish',status:'failed'};
 captureUpdateLine(job,'Validate records');captureUpdateLine(job,'Published records: '+'a'.repeat(40));captureUpdateLine(job,'FAILED: store: checks failed');captureUpdateLine(job,'Validation failed; no publication performed.');
 const result=updateResult(job);assert.equal(result.title,'Update stopped');assert.equal(result.published[0].label,'Artanrecords website');assert.match(result.message,/Some layers/);assert.match(job.problem,/store/);
});
test('completion history survives service restart and stays account scoped',async t=>{
 const directory=await mkdtemp(path.join(tmpdir(),'control-update-history-'));t.after(()=>rm(directory,{recursive:true,force:true}));
 await writeFile(path.join(directory,'layers.json'),JSON.stringify({layers:[{id:'store',domains:[]}]}));
 await writeFile(path.join(directory,'control-center-updates.jsonl'),JSON.stringify({id:'earlier',account:'owner',document:'00',method:'check',event:'succeeded',time:'2026-10-22T10:00:00Z'})+'\n');
 let child,launches=0;
 const options={enabled:true,runner:path.join(directory,'runner.mjs'),historyFile:path.join(directory,'history.jsonl'),authorize:async()=> 'owner',catalogue:async()=>[{id:'00',title:'Update All',actions:[{method:'publish',args:['publish']}]}],launch:()=>{launches++;child=new EventEmitter();child.stdout=new EventEmitter();child.stderr=new EventEmitter();return child;}};
 async function endpoint(service){const server=createServer((req,res)=>service(req,res,new URL(req.url,'http://localhost')));await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));t.after(()=>server.close());return 'http://127.0.0.1:'+server.address().port+'/api/updates/';}
 const headers={'X-Control-Center-Action':'updates','Sec-Fetch-Site':'same-origin','Authorization':'Bearer test','Content-Type':'application/json','Idempotency-Key':'11111111-1111-4111-8111-111111111111'};
 const url=await endpoint(createUpdateService(options)),body=JSON.stringify({document:'00',method:'publish',confirmation:'PUBLISH REVIEWED CHANGES'});
 const started=await (await fetch(url+'jobs',{method:'POST',headers,body})).json();assert.equal(started.status,'running');
 await fetch(url+'jobs',{method:'POST',headers,body});assert.equal(launches,1);
 child.stdout.emit('data',Buffer.from('Validate store\nPublished sto'));child.stdout.emit('data',Buffer.from('re: '+'b'.repeat(40)+'\n'));child.emit('close',0);
 let finished;for(let attempt=0;attempt<30;attempt++){finished=await (await fetch(url+'jobs/'+started.id,{headers})).json();if(finished.status==='succeeded')break;await new Promise(resolve=>setTimeout(resolve,5));}
 assert.equal(finished.result.title,'Update completed');assert.match(finished.result.message,/not been checked/);assert.equal(finished.result.published[0].id,'store');
 const acknowledged=await (await fetch(url+'jobs/'+started.id+'/read',{method:'POST',headers})).json();assert.ok(acknowledged.readAt);
 assert.equal((await (await fetch(url+'jobs/'+started.id+'/read',{method:'POST',headers})).json()).readAt,acknowledged.readAt);
 assert.equal((await fetch(url+'jobs/earlier/read',{method:'POST',headers})).status,200);
 for(let attempt=0;attempt<30;attempt++){const text=await readFile(options.historyFile,'utf8');if(text.includes('finishedAt'))break;await new Promise(resolve=>setTimeout(resolve,5));}
 const restarted=await endpoint(createUpdateService(options));const restored=await (await fetch(restarted+'catalogue',{headers})).json();assert.ok(restored.jobs.some(job=>job.id===started.id&&job.status==='succeeded'));assert.ok(restored.jobs.some(job=>job.id==='earlier'));
 assert.equal(restored.jobs.find(job=>job.id===started.id).readAt,acknowledged.readAt);
 const other=await endpoint(createUpdateService({...options,authorize:async()=> 'another-owner'}));assert.equal((await (await fetch(other+'catalogue',{headers})).json()).jobs.length,0);assert.equal((await fetch(other+'jobs/'+started.id,{headers})).status,404);
 assert.equal((await fetch(other+'jobs/'+started.id+'/read',{method:'POST',headers})).status,404);
 const unavailable=await endpoint(createUpdateService({...options,launch:()=>{throw Error('The process could not start');}}));
 const failed=await (await fetch(unavailable+'jobs',{method:'POST',headers:{...headers,'Idempotency-Key':'22222222-2222-4222-8222-222222222222'},body})).json();assert.equal(failed.status,'failed');assert.equal(failed.result.title,'Update stopped');
 assert.equal((await stat(options.historyFile)).mode&0o777,0o600);
});
