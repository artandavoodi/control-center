import {test,expect} from '@playwright/test';
import {build} from 'esbuild';
import {readFile} from 'node:fs/promises';

const labels=JSON.parse(await readFile('assets/data/control-center/agreement-rehearsal.json','utf8'));
const bundle=await build({stdin:{contents:`export {mountSigningRehearsals} from './assets/js/layers/control-center/operations/shared/agreement-rehearsal.js';export {mountAgreementIssuance} from './assets/js/layers/control-center/operations/agreement-issuance.js';`,resolveDir:process.cwd()},bundle:true,format:'esm',write:false,loader:{'.ttf':'binary','.css':'text'},plugins:[{name:'pdf-worker-source',setup(builder){builder.onLoad({filter:/pdf\.worker\.mjs$/},async args=>({contents:await readFile(args.path,'utf8'),loader:'text'}));}}]});

test.beforeEach(async({page})=>{
 await page.route('**/rest/v1/**',route=>route.abort());
 await page.route('**/__inventory-test.js',route=>route.fulfill({contentType:'application/javascript',body:bundle.outputFiles[0].text}));
 await page.goto('/');
});

for(const role of ['label','artist'])test(`flat ${role} inventory keeps verification distinct and loads evidence only on Open`,async({page})=>{
 await page.evaluate(async({labels,role})=>{
  const {mountSigningRehearsals}=await import('/__inventory-test.js');
  document.body.innerHTML='<div class="control-center-app"><main data-inventory></main></div>';
  window.inventoryReads=[];window.inventoryWrites=[];
  const envelopes=['offered','label_signed','artist_signed','reviewed','archived'].map((status,index)=>({id:'real-'+index,version_id:'version-'+index,account_id:'artist',workspace_id:'brand',status,rehearsal:false,created_at:'2026-11-15T10:00:00Z'}));
  envelopes.push({...envelopes[0],id:'verification',version_id:'verification-version',rehearsal:true});
  const client={from(table){let id,columns;const query={select(value){columns=value;return query;},eq(key,value){if(key==='id')id=value;return query;},order(){return query;},limit(){return query;},single:async()=>{window.inventoryReads.push({table,columns});return {data:{id,title:'Dated document '+id,terms:{title:'Dated document '+id,kind:id==='verification-version'?'non_binding_partnership_rehearsal':'artist_partnership_execution_v1',body:'Fixed synthetic browser document.',notice:'Synthetic fixture',section_titles:[]},version_number:1}};},then(resolve){window.inventoryReads.push({table,columns});return Promise.resolve({data:table==='studio_agreement_envelopes'?envelopes:[]}).then(resolve);}};return query;},rpc:async name=>{window.inventoryWrites.push(name);throw Error('Unexpected mutation');}};
  window.mountInventory=view=>mountSigningRehearsals({root:document.querySelector('[data-inventory]'),client,role,accountId:'artist',workspaceId:'brand',canWrite:()=>false,signerId:'label',view,labels,icons:{refresh:'',open:'',download:'',print:''}});
  await window.mountInventory('all');
 },{labels,role});
 await expect(page.getByRole('heading',{name:'Documents',exact:true})).toHaveCount(0);
 await expect(page.locator('[data-inventory] details')).toHaveCount(0);
 await expect(page.getByRole('heading',{name:'Verification history',exact:true})).toBeVisible();
 await expect(page.locator('.agreement-rehearsal-card')).toHaveCount(6);
 await expect(page.locator('.agreement-document-summary h4').first()).toHaveText('Dated document version-0');
 await expect(page.locator('.agreement-document-summary time').first()).toHaveAttribute('datetime','2026-11-15T10:00:00Z');
 for(const state of Object.values(labels.execution.states))await expect(page.getByText(state,{exact:false}).first()).toBeVisible();
 await expect(page.locator('.agreement-verification-history')).toContainText(labels.verificationNotice);
 expect(await page.evaluate(()=>window.inventoryReads.some(read=>/signatures|events/.test(read.table)))).toBe(false);
 await page.locator('.agreement-rehearsal-card').nth(4).getByRole('button',{name:'Open document',exact:true}).click();
 await expect(page.getByRole('dialog')).toBeVisible();
 await expect(page.getByRole('dialog').getByRole('heading',{name:'Activity',exact:true})).toBeVisible();
 await expect(page.getByRole('dialog').locator('details')).toHaveCount(0);
 expect(await page.evaluate(()=>window.inventoryReads.some(read=>read.table==='studio_agreement_signatures'))).toBe(true);
 await page.getByRole('button',{name:'Close document',exact:true}).click();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 await page.evaluate(()=>window.mountInventory('archive'));
 await expect(page.locator('.agreement-rehearsal-card')).toHaveCount(1);
 expect(await page.evaluate(()=>window.inventoryWrites)).toEqual([]);
});

async function mountIssuance(page,mode){
 await page.evaluate(async mode=>{
  const {mountAgreementIssuance}=await import('/__inventory-test.js');
  document.body.innerHTML='<div class="control-center-app"><dialog><section data-issue></section></dialog></div>';
  const dialog=document.querySelector('dialog');dialog.showModal();window.issueRPCs=[];window.issueFilters=[];window.issueOpened=null;let lookups=0;
  const real={id:'existing-real',status:'label_signed',source_document_id:'source',account_id:'artist',workspace_id:'brand',rehearsal:false};
  const client={from(table){const filters=[];const query={select(){return query;},eq(key,value){filters.push([key,value]);return query;},order(){return query;},limit(){return query;},single:async()=>({data:{id:'intake',account_id:'artist'}}),maybeSingle:async()=>{window.issueFilters.push({table,filters});lookups++;if(mode==='loading')await new Promise(resolve=>{window.releaseIssuance=resolve;});if(mode==='lookup-error')return {error:{message:'Not allowed'}};return {data:['existing','loading'].includes(mode)||(mode==='race'&&lookups>1)?real:mode==='non-binding'?{...real,rehearsal:true}:mode==='wrong-source'?{...real,source_document_id:'other'}:null};}};return query;},rpc:async(name,args)=>{window.issueRPCs.push({name,args});if(name==='control_center_agreement_execution_ready')return {data:mode==='race'};if(name==='control_center_issue_agreement')return {error:{message:'Duplicate fixed document'}};throw Error('Unexpected RPC');}};
  const mounted=mountAgreementIssuance({root:document.querySelector('[data-issue]'),dialog,client,staff:{account_id:'label'},workspace:{id:'brand'},record:{id:'source',artist_account_id:'artist',artist_intake_version_id:'intake-version',title:'Final agreement',body:'Final fixed terms.',tags:['partnership-silver'],unit_id:'unit',updated_at:'2026-11-15'},e:String,icon:()=>'',isCurrent:()=>true,onIssued:id=>{window.issueOpened=id;}});
  if(mode==='loading'){window.issueMounted=mounted;return;}await mounted;
 },mode);
}

test('existing real source record bypasses disabled creation and opens without writes',async({page})=>{
 await mountIssuance(page,'existing');
 await expect(page.getByText('Sent to signing',{exact:true})).toBeVisible();
 await expect(page.getByText('Ready for artist signature',{exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Open signing record',exact:true}).click();
 expect(await page.evaluate(()=>window.issueOpened)).toBe('existing-real');
 expect(await page.evaluate(()=>window.issueRPCs)).toEqual([]);
 expect(await page.evaluate(()=>window.issueFilters[0])).toEqual({table:'studio_agreement_envelopes',filters:[['source_document_id','source'],['workspace_id','brand'],['account_id','artist'],['rehearsal',false]]});
});

test('duplicate retry recovers the fixed real record without another issue or invitation',async({page})=>{
 await mountIssuance(page,'race');
 await page.getByLabel('Label signer legal name',{exact:true}).fill('Authorized Label');
 await page.locator('[name=starts]').fill('2026-01-01');await page.locator('[name=ends]').fill('2027-01-01');
 await page.locator('[name=review]').fill('Authorized reviewer approved this exact version.');
 await page.locator('[name=confirmed]').check();page.once('dialog',dialog=>dialog.accept());
 await page.locator('button[type=submit]').click();
 await expect(page.getByRole('button',{name:'Open signing record',exact:true})).toBeVisible();
 expect(await page.evaluate(()=>window.issueRPCs.map(call=>call.name))).toEqual(['control_center_agreement_execution_ready','control_center_issue_agreement']);
 expect(await page.evaluate(()=>window.issueFilters.length)).toBe(2);
});

for(const mode of ['non-binding','wrong-source','lookup-error'])test(`existing record guard rejects ${mode}`,async({page})=>{
 await mountIssuance(page,mode);
 await expect(page.getByRole('button',{name:'Open signing record',exact:true})).toHaveCount(0);
 expect(await page.evaluate(()=>window.issueRPCs.some(call=>call.name==='control_center_issue_agreement'))).toBe(false);
 if(mode==='lookup-error')await expect(page.getByRole('status').first()).toHaveText(labels.existingUnavailable);
});

async function expectCenteredLoader(locator){
 await expect(locator).toBeVisible();
 await expect(locator).toHaveCSS('display','grid');
 const center=await locator.evaluate(node=>{const box=node.getBoundingClientRect(),loader=node.querySelector('.ui-loader-circle').getBoundingClientRect();return {x:Math.abs(loader.x+loader.width/2-box.x-box.width/2),y:Math.abs(loader.y+loader.height/2-box.y-box.height/2),height:box.height};});
 expect(center.x).toBeLessThan(2);expect(center.y).toBeLessThan(2);expect(center.height).toBeGreaterThan(100);
}

test('checking contract centers the shared loader until existing-record lookup settles',async({page})=>{
 await mountIssuance(page,'loading');
 await expectCenteredLoader(page.locator('[data-issue] > .agreement-loading-status'));
 await expect(page.getByRole('button',{name:'Open signing record',exact:true})).toHaveCount(0);
 await expect.poll(()=>page.evaluate(()=>typeof window.releaseIssuance)).toBe('function');
 await page.evaluate(async()=>{window.releaseIssuance();await window.issueMounted;});
 await expect(page.getByRole('button',{name:'Open signing record',exact:true})).toBeVisible();
 await expect(page.locator('[data-issue] .ui-loader-circle')).toHaveCount(0);
 expect(await page.evaluate(()=>window.issueRPCs)).toEqual([]);
});

for(const view of ['all','active','archive'])test(`${view} loading is centered and Open reveals only fully loaded content`,async({page})=>{
 await page.evaluate(async({labels,view})=>{
  const {mountSigningRehearsals}=await import('/__inventory-test.js');
  document.body.innerHTML='<div class="control-center-app"><main data-inventory></main></div>';
  window.listWait=new Promise(resolve=>{window.releaseList=resolve;});window.documentWait=new Promise(resolve=>{window.releaseDocument=resolve;});window.evidenceWait=new Promise(resolve=>{window.releaseEvidence=resolve;});
  const envelope={id:'delayed',version_id:'fixed-version',account_id:'artist',workspace_id:'brand',status:view==='archive'?'archived':'offered',rehearsal:false,created_at:'2026-11-15T10:00:00Z'};
  const version={id:'fixed-version',version_number:1,terms:{kind:'artist_partnership_execution_v1',title:'Delayed fixed document',notice:'Synthetic browser fixture',body:'Only the fully loaded fixed text.',section_titles:[]}};
  const client={from(table){let columns;const query={select(value){columns=value;return query;},eq(){return query;},order(){return query;},limit(){return query;},async single(){if(columns.includes('terms_digest'))await window.documentWait;return {data:version};},then(resolve){return (async()=>{if(table==='studio_agreement_envelopes'){await window.listWait;return {data:[envelope]};}await window.evidenceWait;if(window.documentFailure)return {error:{message:'Unavailable'}};return {data:[]};})().then(resolve);}};return query;},rpc(){throw Error('No writes allowed');}};
  window.inventoryMounted=mountSigningRehearsals({root:document.querySelector('[data-inventory]'),client,role:'artist',accountId:'artist',workspaceId:'brand',canWrite:()=>false,view,labels,icons:{refresh:'',open:'',download:'',print:''}});
 },{labels,view});
 await expectCenteredLoader(page.locator('[data-rehearsal-status]'));
 await expect(page.locator('.agreement-rehearsal-card')).toHaveCount(0);
 await page.evaluate(async()=>{window.releaseList();await window.inventoryMounted;});
 await page.getByRole('button',{name:'Open document',exact:true}).click();
 const focus=page.getByRole('dialog',{name:'Delayed fixed document',exact:true});
 await expect(focus).toBeVisible();await expect(focus).toHaveAttribute('aria-busy','true');
 await expectCenteredLoader(focus.locator('> .agreement-loading-status'));
 await expect(focus.locator('[data-envelope-content]')).toHaveCount(0);
 await page.evaluate(()=>window.releaseDocument());
 await expect(focus.locator('[data-envelope-content]')).toHaveCount(0);
 await page.evaluate(()=>window.releaseEvidence());
 await expect(focus.locator('[data-envelope-content]')).toContainText('Only the fully loaded fixed text.');
 await expect(focus).not.toHaveAttribute('aria-busy');await expect(focus.locator('> .agreement-loading-status')).toHaveCount(0);
 await page.getByRole('button',{name:'Close document',exact:true}).click();
 await page.evaluate(()=>{window.listWait=new Promise(resolve=>{window.releaseList=resolve;});});
 await page.getByRole('button',{name:'Refresh documents',exact:true}).click();
 await expectCenteredLoader(page.locator('[data-rehearsal-status]'));
 await expect(page.locator('.agreement-rehearsal-card')).toHaveCount(0);
 await page.evaluate(()=>window.releaseList());
 await expect(page.locator('.agreement-rehearsal-card')).toHaveCount(1);
 await page.evaluate(()=>{window.documentWait=new Promise(resolve=>{window.releaseDocument=resolve;});});
 await page.getByRole('button',{name:'Open document',exact:true}).click();
 await expectCenteredLoader(focus.locator('> .agreement-loading-status'));
 await page.getByRole('button',{name:'Close document',exact:true}).click();
 await page.evaluate(()=>window.releaseDocument());
 await expect(page.locator('dialog.agreement-focus')).toHaveCount(0);
 await page.evaluate(()=>{window.documentFailure=true;});
 await page.getByRole('button',{name:'Open document',exact:true}).click();
 await expect(focus.getByRole('status')).toHaveText('This document could not be opened. No signature was recorded.');
 await expect(focus.locator('[data-envelope-content]')).toHaveCount(0);
 await expect(focus.locator('.ui-loader-circle')).toHaveCount(0);
 await page.getByRole('button',{name:'Close document',exact:true}).click();
 await page.evaluate(()=>{window.documentFailure=false;});
 await page.getByRole('button',{name:'Open document',exact:true}).click();
 await expect(focus.locator('[data-envelope-content]')).toContainText('Only the fully loaded fixed text.');
});
