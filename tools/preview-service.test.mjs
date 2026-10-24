import test from 'node:test';
import assert from 'node:assert/strict';
import {EventEmitter} from 'node:events';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {createPreviewService,validatePreviewConnection} from './preview-service.mjs';
import {publicPreviewEntry} from './preview-registry.mjs';
import {privatePreviewOrigin} from '../assets/js/layers/control-center/operations/previews.js';
const entries=[{id:'jobs',repository:'neuroartan-jobs',brand:'neuroartan',domains:['jobs.neuroartan.com'],directory:'/private/checkout',publicRoot:'docs',strategy:'static',port:8927},{id:'vault',domains:[],reason:'Private vault'}];
function request(method='GET',route='/api/previews/catalogue',headers={}){return {method,url:route,headers:{host:'127.0.0.1:8894',origin:'http://127.0.0.1:8894','x-control-center-action':'previews',authorization:'Bearer test',...headers}};}
async function call(service,req){const response={headers:{},setHeader(name,value){this.headers[name]=value;},writeHead(code,headers={}){this.code=code;Object.assign(this.headers,headers);return this;},end(body){this.body=body?JSON.parse(body):null;}};await service(req,response,new URL(req.url,'http://127.0.0.1'));return response;}
test('private paths never leave the preview registry',()=>{assert.equal(publicPreviewEntry(entries[0]).directory,undefined);assert.equal(publicPreviewEntry(entries[0]).publicRoot,undefined);});
test('reject cross-origin and DNS rebinding requests',()=>{
 for(const headers of [{origin:'https://evil.test'},{host:'evil.test:8894'},{'x-control-center-action':'updates'},{origin:'https://control.artan.live'}])assert.throws(()=>validatePreviewConnection(request('POST','/',headers)));
 assert.equal(validatePreviewConnection(request()),'http://127.0.0.1:8894');
 assert.equal(validatePreviewConnection(request('POST','/',{origin:'https://control.artan.live'}),'https://mac.example.ts.net'),'https://control.artan.live');
});
test('remote connector accepts private HTTPS only',()=>{
 assert.equal(privatePreviewOrigin('https://mac.example.ts.net'),'https://mac.example.ts.net');
 for(const value of ['http://mac.example.ts.net','https://example.com','https://mac.example.ts.net/evil','https://user:secret@mac.example.ts.net'])assert.throws(()=>privatePreviewOrigin(value));
});
test('owner authorization is required before loading inventory',async()=>{let loaded=false;const service=createPreviewService({enabled:true,authorize:async()=>{throw Error('Denied');},registry:async()=>{loaded=true;return entries;}});assert.equal((await call(service,request())).code,403);assert.equal(loaded,false);});
test('catalogue is sanitized and private repositories cannot launch',async()=>{const service=createPreviewService({enabled:true,authorize:async()=> 'owner',registry:async()=>entries});const catalogue=await call(service,request());assert.equal(catalogue.code,200);assert.equal(catalogue.body.repositories[0].directory,undefined);assert.equal((await call(service,request('POST','/api/previews/vault/start'))).code,409);assert.equal((await call(service,request('POST','/api/previews/unknown/start'))).code,404);});
test('occupied ports are never replaced',async()=>{const service=createPreviewService({enabled:true,authorize:async()=> 'owner',registry:async()=>entries,probe:async()=>({occupied:true,ready:true}),launch:()=>{throw Error('Must not launch');}});const response=await call(service,request('POST','/api/previews/jobs/start'));assert.equal(response.code,200);assert.match(response.body.message,/No process was replaced/);});
test('launch uses fixed executable arguments and records owner audit',async()=>{const logs=await mkdtemp(path.join(tmpdir(),'artan-previews-'));let checks=0;try{const service=createPreviewService({enabled:true,authorize:async()=> 'owner',registry:async()=>entries,logs,probe:async()=>({occupied:checks++>0,ready:checks>1}),launch:(command,args,options)=>{assert.equal(command,process.execPath);assert.equal(args.at(-1),'jobs');assert.equal(options.shell,false);assert.equal(options.detached,true);const child=new EventEmitter();child.pid=1234;child.unref=()=>{};queueMicrotask(()=>child.emit('spawn'));return child;}});const response=await call(service,request('POST','/api/previews/jobs/start'));assert.equal(response.code,202);assert.equal(response.body.url,'http://127.0.0.1:8927/');assert.equal(response.body.ready,true);}finally{await rm(logs,{recursive:true,force:true});}});
test('disabled services fail closed',async()=>{assert.equal((await call(createPreviewService(),request())).code,503);});
