import {test,expect} from '@playwright/test';
import {build} from 'esbuild';
import {readFile} from 'node:fs/promises';

const bundle=await build({
 entryPoints:['assets/js/layers/control-center/operations/documents.js'],bundle:true,format:'esm',write:false,
 loader:{'.ttf':'binary','.css':'text'},
 plugins:[{name:'pdf-worker-source',setup(builder){builder.onLoad({filter:/pdf\.worker\.mjs$/},async args=>({contents:await readFile(args.path,'utf8'),loader:'text'}));}}]
});

test.beforeEach(async({page})=>{
 await page.route('**/__documents-signing-source.js',route=>route.fulfill({contentType:'application/javascript',body:bundle.outputFiles[0].text}));
 await page.route('**/__documents-signing-fixture',route=>route.fulfill({contentType:'text/html',body:`<!doctype html>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="/assets/css/layers/control-center/00-orchestrator/00-control-center-all.css">
  <link rel="stylesheet" href="/assets/css/layers/control-center/operations.css">
  <div class="control-center-app"><main class="control-center-operations"><section data-documents></section></main></div>`}));
 await page.goto('/__documents-signing-fixture');
 await page.addScriptTag({url:'/assets/js/layers/control-center/operations/shared/close-button.js'});
 await page.evaluate(async()=>{
  const {mountDocuments}=await import('/__documents-signing-source.js');
  const row={id:'synthetic-draft',unit_id:'synthetic-brand',title:'Synthetic contract',body:'[label legal name - required]\n[artist legal name - required]',classification:'confidential',tags:['agreement','draft'],updated_at:'2026-11-01T00:00:00Z',draft_state:null,artist_account_id:'synthetic-artist',artist_intake_version_id:'synthetic-details'};
  window.signingFixture={envelope:{id:'synthetic-envelope',status:'label_signed',source_document_id:row.id,account_id:row.artist_account_id,workspace_id:'synthetic-brand',rehearsal:false},queries:[],rpcCalls:[],destinations:[],events:[],optionRuns:0,lookupError:false};
  const fixture=window.signingFixture;
  document.body.addEventListener('agreement:editor-state',event=>fixture.events.push({...event.detail,classMatches:event.target.classList.contains('is-editing')===event.detail.editing}));
  const client={
   from(table){
    const filters=[];
    const query={select(){return query;},eq(key,value){filters.push([key,value]);return query;},contains(){return query;},not(){return query;},order(){return query;},limit(){return query;},
     then(resolve){if(table!=='control_center_documents')throw Error('Unexpected table: '+table);return Promise.resolve({data:[row]}).then(resolve);},
     async maybeSingle(){if(table!=='studio_agreement_envelopes')throw Error('Unexpected lookup: '+table);fixture.queries.push(filters);return fixture.lookupError?{error:{message:'Synthetic lookup failure'}}:{data:fixture.envelope};}
    };return query;
   },
   async rpc(name,args){fixture.rpcCalls.push({name,args});throw Error('Opening an existing signing record must not save or issue a document.');}
  };
  await mountDocuments({content:document.querySelector('[data-documents]'),client,staff:{is_owner:true,permissions:['documents.read','documents.write','documents.confidential']},workspace:{id:'synthetic-brand',workspace_key:'artanrecords'},context:{},units:[{id:'synthetic-brand',active:true,kind:'pillar',name:'Synthetic brand'}],e:String,icon:()=>'',config:{chrome:{},agreementDraft:{title:'Draft',body:row.body,tags:'agreement, draft'}},isCurrent:()=>true,onSaved:()=>{},onIssued:id=>fixture.destinations.push(id),agreementOnly:true,artistAccount:row.artist_account_id,
   artistOptions:()=>[
    {id:'edit-details',label:'Edit details',icon:'core/actions/edit/edit.svg',run:()=>{fixture.optionRuns++;}},
    {id:'print-details',label:'Print details',icon:'core/actions/print/print.svg',run:()=>{}},
    {id:'export-details',label:'Export details PDF',icon:'core/actions/download/download.svg',run:()=>{}}
   ]
  });
 });
});

async function openLastSection(page){
 await page.getByRole('button',{name:'Open contract',exact:true}).click();
 const next=page.getByRole('button',{name:'Next section',exact:true});
 for(let step=0;step<20&&await next.isVisible();step++)await next.click();
 await expect(next).toBeHidden();
}

test('existing real signing records use the scoped helper and open without reissuing',async({page})=>{
 for(const status of ['offered','label_signed','artist_signed','archived']){
  await page.evaluate(status=>window.signingFixture.envelope.status=status,status);
  await openLastSection(page);
  await expect(page.getByText('Sent to signing',{exact:true})).toBeVisible();
  const open=page.getByRole('button',{name:'Open signing record',exact:true});await expect(open).toBeEnabled();
  await expect(page.getByRole('button',{name:'Send to signing',exact:true})).toHaveCount(0);
  await open.click();
  await expect.poll(()=>page.evaluate(()=>window.signingFixture.destinations.length)).toBe(['offered','label_signed','artist_signed','archived'].indexOf(status)+1);
  expect(await page.evaluate(()=>window.signingFixture.destinations.at(-1))).toBe('synthetic-envelope');
  await expect(page.getByRole('dialog',{name:'Send to signing',exact:true})).toHaveCount(0);
  await page.getByRole('button',{name:'Close contract',exact:true}).click();
 }
 const fixture=await page.evaluate(()=>window.signingFixture);
 expect(fixture.queries).toHaveLength(8);
 for(const filters of fixture.queries)expect(filters).toEqual([['source_document_id','synthetic-draft'],['workspace_id','synthetic-brand'],['account_id','synthetic-artist'],['rehearsal',false]]);
 expect(fixture.rpcCalls).toEqual([]);
});

test('verification copies and mismatched signing records do not replace the issuance CTA',async({page})=>{
 for(const patch of [{rehearsal:true},{account_id:'another-artist'},{workspace_id:'another-brand'},{source_document_id:'another-draft'}]){
  await page.evaluate(patch=>{window.signingFixture.envelope={id:'not-this-contract',status:'offered',source_document_id:'synthetic-draft',account_id:'synthetic-artist',workspace_id:'synthetic-brand',rehearsal:false,...patch};},patch);
  await openLastSection(page);
  await expect(page.getByRole('button',{name:'Send to signing',exact:true})).toBeEnabled();
  await expect(page.getByRole('button',{name:'Open signing record',exact:true})).toHaveCount(0);
  await expect(page.getByText('Sent to signing',{exact:true})).toHaveCount(0);
  await page.getByRole('button',{name:'Close contract',exact:true}).click();
 }
 expect(await page.evaluate(()=>window.signingFixture.rpcCalls)).toEqual([]);
});

test('failed existing-record lookup blocks issuance until a successful reopen',async({page})=>{
 await page.evaluate(()=>{window.signingFixture.lookupError=true;});await openLastSection(page);
 await expect(page.getByText(/existing signing record could not be checked/)).toBeVisible();
 await expect(page.getByRole('button',{name:'Send to signing',exact:true})).toBeDisabled();
 expect(await page.evaluate(()=>window.signingFixture.rpcCalls)).toEqual([]);
 await page.getByRole('button',{name:'Close contract',exact:true}).click();
 await page.evaluate(()=>{window.signingFixture.lookupError=false;});await openLastSection(page);
 await expect(page.getByRole('button',{name:'Open signing record',exact:true})).toBeEnabled();
 await page.getByRole('button',{name:'Open signing record',exact:true}).click();
 await expect.poll(()=>page.evaluate(()=>window.signingFixture.destinations)).toEqual(['synthetic-envelope']);
 expect(await page.evaluate(()=>window.signingFixture.rpcCalls)).toEqual([]);
});

test('editor options deduplicate print and export and editing events bubble after class changes',async({page})=>{
 await openLastSection(page);await page.getByRole('button',{name:'More',exact:true}).click();
 await expect(page.getByRole('menuitem',{name:'Print',exact:true})).toHaveCount(1);
 await expect(page.getByRole('menuitem',{name:'Export PDF',exact:true})).toHaveCount(1);
 await expect(page.getByRole('menuitem',{name:'Print details',exact:true})).toHaveCount(0);
 await expect(page.getByRole('menuitem',{name:'Export details PDF',exact:true})).toHaveCount(0);
 await page.getByRole('menuitem',{name:'Edit details',exact:true}).click();
 await expect.poll(()=>page.evaluate(()=>window.signingFixture.optionRuns)).toBe(1);
 await page.getByRole('button',{name:'Close contract',exact:true}).click();
 expect(await page.evaluate(()=>window.signingFixture.events)).toEqual([{editing:true,recordId:'synthetic-draft',classMatches:true},{editing:false,recordId:'synthetic-draft',classMatches:true}]);
});
