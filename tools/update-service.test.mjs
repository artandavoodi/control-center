import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createServer} from 'node:http';
import {createUpdateService,verifyUpdateOwner,redactUpdateOutput,updateCatalogue} from './update-service.mjs';

test('manual catalogue has one full publish action per document and read-only inspection',async()=>{
 const docs=await updateCatalogue();assert.equal(docs.length,19);
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
