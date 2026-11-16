import {test,expect} from '@playwright/test';
import {build} from 'esbuild';
import {readFile} from 'node:fs/promises';
const issuanceBundle=await build({entryPoints:['assets/js/layers/control-center/operations/agreement-issuance.js'],bundle:true,format:'esm',write:false});
const signingBundle=await build({entryPoints:['assets/js/layers/control-center/operations/shared/agreement-rehearsal.js'],bundle:true,format:'esm',write:false,loader:{'.ttf':'binary'},plugins:[{name:'pdf-worker-source',setup(builder){builder.onLoad({filter:/pdf\.worker\.mjs$/},async args=>({contents:await readFile(args.path,'utf8'),loader:'text'}));}}]});

test('agreement directory separates general tools from one artist workspace',async({page})=>{
 await page.goto('/');
 await page.evaluate(async()=>{
  const {mountAgreementWorkspace}=await import('/assets/js/layers/control-center/operations/agreement-workspace.js');
  document.body.innerHTML='<div class="control-center-app"><div class="control-center-operations"><main><header><h1>Agreements</h1></header><div data-test-workspace data-operation-content></div></main></div></div>';
  const requests=[{id:'request-a',account_id:'artist-a',workspace_id:'brand',current_version_id:'version-a',status:'approved',rehearsal:false},{id:'request-b',account_id:'artist-b',workspace_id:'brand',current_version_id:'version-b',status:'submitted',rehearsal:false}];
  const versions=[{id:'version-a',request_id:'request-a',details:{artist_name:'First Artist',legal_name:'First Legal Name'},reply_email:'first@example.test'},{id:'version-b',request_id:'request-b',details:{artist_name:'Second Artist'},reply_email:'second@example.test'}];
  const client={rpc:async()=>({data:false}),from(table){let rows=table==='studio_agreement_intake_requests'?requests:table==='studio_agreement_intake_versions'?versions:[];const query={select(){return query;},eq(key,value){rows=rows.filter(row=>row[key]===value);return query;},in(key,values){rows=rows.filter(row=>values.includes(row[key]));return query;},order(){return query;},limit(){return query;},single:async()=>({data:rows[0]}),then(resolve){return Promise.resolve({data:rows}).then(resolve);}};return query;}};
  const icon=path=>'<img class="control-center-operation-icon" alt="" src="/registry/icons/public/assets/'+path+'">';
  await mountAgreementWorkspace({content:document.querySelector('[data-test-workspace]'),client,staff:{is_owner:true,permissions:['documents.read','documents.write','documents.confidential']},workspace:{id:'brand',workspace_key:'artanrecords'},units:[{id:'brand',kind:'pillar',active:true}],config:{chrome:{create:'core/actions/create/plus.svg',edit:'core/actions/edit/edit.svg',save:'core/actions/save/save.svg'}},e:value=>String(value),icon,isCurrent:()=>true},async options=>{
   options.content.dataset.account=options.artistAccount;options.content.dataset.versions=options.artistVersionIds.join(',');
   options.content.innerHTML='<nav role="tablist" aria-label="Artist stages">'+['Artist details','Contracts','Signing','Archive','Account requests'].map(title=>'<button role="tab">'+title+'</button>').join('')+'</nav><p>Only '+options.artistName+'</p>';
   if(options.artistAccount==='artist-a')await new Promise(resolve=>{window.finishArtistMount=resolve;});
  });
 });
 await expect(page.getByRole('tab',{name:'Artist details',exact:true})).toBeVisible();
 const tools=page.getByRole('navigation',{name:'Agreement tools'});
 await expect(tools.getByRole('button',{name:'My signatures'})).toBeVisible();await expect(tools.getByRole('button',{name:'Invitations'})).toBeVisible();await expect(tools.getByRole('button',{name:'Account requests'})).toHaveCount(0);
 await expect(page.getByRole('tab',{name:'Contracts'})).toHaveCount(0);
 await page.getByRole('button',{name:'First Artist',exact:true}).click();
 await expect(page.locator('[data-account=artist-a]')).toHaveAttribute('aria-busy','true');
 await expect(page.locator('[data-account=artist-a]')).toHaveAttribute('inert','');
 await expect(page.getByRole('tab',{name:'Contracts'})).toHaveCount(0);
 await page.evaluate(()=>window.finishArtistMount());
 await expect(page.getByRole('heading',{name:'First Artist',exact:true})).toBeVisible();await expect(page.getByRole('tab',{name:'Contracts'})).toBeVisible();await expect(page.getByRole('tab',{name:'Account requests'})).toBeVisible();
 await expect(page.locator('[data-account=artist-a]')).not.toHaveAttribute('inert','');
 await expect(page.locator('[data-artist-account=artist-a]')).toHaveCSS('border-top-width','0px');
 await expect(page.locator('[data-account=artist-a]')).toHaveAttribute('data-versions','version-a');await expect(page.getByText('Only Second Artist')).toHaveCount(0);
 await page.getByRole('button',{name:'Exit artist'}).click();await expect(page.getByRole('tab',{name:'Contracts'})).toHaveCount(0);
 await page.getByRole('button',{name:'Second Artist',exact:true}).click();await expect(page.locator('[data-account=artist-b]')).toHaveAttribute('data-versions','version-b');await expect(page.getByText('Only First Artist')).toHaveCount(0);
});

test('contract review explains blockers before offering an exact-version confirmation',async({page})=>{
 await page.route('**/__agreement-issuance-test.js',route=>route.fulfill({contentType:'application/javascript',body:issuanceBundle.outputFiles[0].text}));
 await page.goto('/');await page.evaluate(async()=>{
  const {mountAgreementIssuance}=await import('/__agreement-issuance-test.js');
  document.body.innerHTML='<dialog open><section data-issue></section></dialog>';
  const record={id:'fixture',title:'Fixture draft',body:'Working terms',artist_intake_version_id:'version',unit_id:'unit',tags:['partnership-silver'],draft_state:{fields:{'legal review':'PENDING — NO APPROVAL RECORDED','effective date':'2026-01-15','expiry date':'2027-01-15'}}};
  let sameParty=false,enabled=false;window.issueCalls=[];
  const client={rpc:async(name)=>{window.issueCalls.push(name);return {data:enabled};},from(){const query={select(){return query;},eq(){return query;},single:async()=>({data:{id:'intake',account_id:sameParty?'label':'artist'}})};return query;}};
  window.renderIssuance=async stage=>{if(stage>0){record.title='Fixture final agreement';record.draft_state.fields['legal review']='Independent reviewer approval for fixture version';}sameParty=stage===1;enabled=stage===3;await mountAgreementIssuance({root:document.querySelector('[data-issue]'),dialog:document.querySelector('dialog'),client,staff:{account_id:'label'},workspace:{id:'brand'},record,e:String,icon:()=>'',isCurrent:()=>true});};
  await window.renderIssuance(0);
 });
 await expect(page.getByRole('status')).toContainText('Prepare the final text and record legal approval');expect(await page.evaluate(()=>window.issueCalls)).toEqual([]);
 await page.evaluate(()=>window.renderIssuance(1));await expect(page.getByRole('status')).toContainText('Confirm separate artist and label signers');
 await page.evaluate(()=>window.renderIssuance(2));await expect(page.getByRole('status')).toContainText('Real contract issuing is not enabled');await expect(page.getByRole('button',{name:'Confirm fixed contract'})).toHaveCount(0);
 await page.evaluate(()=>window.renderIssuance(3));await expect(page.getByRole('button',{name:'Confirm fixed contract'})).toBeVisible();
 expect(await page.evaluate(()=>window.issueCalls.every(name=>name==='control_center_agreement_execution_ready'))).toBe(true);
});

test('artist contract inventory excludes documents belonging to a different intake',async({page})=>{
 await page.goto('/');await page.evaluate(async()=>{
  const {mountDocuments}=await import('/assets/js/layers/control-center/operations/documents.js');
  document.body.innerHTML='<div class="control-center-app"><main><div data-documents></div></main></div>';
  const first='aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',second='bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';
  const rows=[{id:'one',artist_account_id:'artist-a',artist_intake_version_id:first,title:'First artist contract',tags:['agreement','draft'],classification:'confidential',body:'First artist terms without editable ownership markers'},{id:'two',artist_account_id:'artist-b',artist_intake_version_id:second,title:'Second artist contract',tags:['agreement','draft'],classification:'confidential',body:'Second artist terms'}];
  const query={select(){return query;},eq(){return query;},contains(){return query;},or(){return query;},order(){return query;},limit(){return query;},then(resolve){return Promise.resolve({data:rows}).then(resolve);}};
  await mountDocuments({content:document.querySelector('[data-documents]'),client:{from:()=>query},staff:{permissions:['documents.read','documents.confidential']},workspace:{id:'brand'},context:{},units:[],e:String,icon:()=>'',config:{chrome:{search:'core/actions/search/search.svg',close:'core/actions/close/close.svg'}},isCurrent:()=>true,agreementOnly:true,artistAccount:'artist-a',artistVersionIds:[first]});
 });
 await expect(page.getByRole('heading',{name:'First artist contract'})).toBeVisible();await expect(page.getByRole('heading',{name:'Second artist contract'})).toHaveCount(0);
});

test('real signing starts with the label and exposes sending only after its signature',async({page})=>{
 await page.route('**/__agreement-signing-test.js',route=>route.fulfill({contentType:'application/javascript',body:signingBundle.outputFiles[0].text}));
 await page.goto('/');await page.evaluate(async()=>{
  const {mountSigningRehearsals}=await import('/__agreement-signing-test.js');
  const labels=await fetch('/assets/data/control-center/agreement-rehearsal.json').then(response=>response.json());
  document.body.innerHTML='<div class="control-center-app"><div data-signing></div></div>';
  const envelope={id:'synthetic-envelope',version_id:'synthetic-version',account_id:'synthetic-artist',unit_id:'synthetic-unit',workspace_id:'synthetic-brand',status:'offered',rehearsal:false,created_at:'2026-11-15T10:00:00Z'},signatures=[];
  const version={id:'synthetic-version',version_number:1,terms_digest:'a'.repeat(64),terms:{kind:'artist_partnership_execution_v1',title:'Synthetic signing fixture',body:'1. Synthetic section\nOnly a browser fixture. No real agreement or network submission.',section_titles:['1. Synthetic section'],label_signer_name:'Synthetic Label',notice:'Synthetic fixture'}};
  const client={auth:{getUser:async()=>({data:{user:{id:'synthetic-label'}}})},from(table){const rows=table==='studio_agreement_envelopes'?[envelope]:table==='studio_agreement_versions'?[version]:table==='studio_agreement_execution_reviews'?[{label_signer:'synthetic-label'}]:table==='studio_agreement_signatures'?signatures:[];const query={select(){return query;},eq(){return query;},order(){return query;},limit(){return query;},single:async()=>({data:rows[0]}),then(resolve){return Promise.resolve({data:rows}).then(resolve);}};return query;},async rpc(name,args){if(name==='signature_library_list')return {data:[]};if(name!=='studio_record_agreement_signature')throw Error('Unexpected operation');window.fixtureSignature=args;envelope.status='label_signed';const bytes=Uint8Array.from(atob(args.png_base64),char=>char.charCodeAt(0)),hash=Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes)),byte=>byte.toString(16).padStart(2,'0')).join('');signatures.push({signer_role:'label',display_name:args.signer_name,image_base64:args.png_base64,image_sha256:hash,document_sha256:args.expected_digest,section_initials:args.initials,recorded_at:'2026-11-15T10:01:00Z'});return {data:'synthetic-signature'};}};
  const icon=path=>'<img class="control-center-operation-icon" alt="" src="/registry/icons/public/assets/'+path+'">';
  await mountSigningRehearsals({root:document.querySelector('[data-signing]'),client,role:'label',accountId:envelope.account_id,workspaceId:envelope.workspace_id,labels,icons:{add:icon('core/actions/create/plus.svg'),edit:icon('core/actions/edit/edit.svg'),save:icon('core/actions/save/save.svg'),use:icon('core/legal/contracts/signature.svg'),default:icon('core/actions/favorite/favorite.svg'),remove:icon('core/actions/delete/delete.svg'),open:icon('core/actions/open/open.svg'),refresh:icon('core/actions/refresh/refresh.svg'),sign:icon('core/legal/contracts/signature.svg'),review:icon('core/actions/check/check.svg'),archive:icon('core/commerce/revenue-shares/shares-archive.svg'),download:icon('core/actions/download/download.svg'),send:icon('core/actions/send/send.svg')},onSend:()=>document.body.dataset.fixtureSend='prepared'});
 });
 await page.getByRole('button',{name:'Open document',exact:true}).click();
 await expect(page.getByRole('button',{name:'Send to artist',exact:true})).toHaveCount(0);
 const dialog=page.getByRole('dialog',{name:'Synthetic signing fixture',exact:true});
 await expect(dialog.getByLabel('Signer name',{exact:true})).toHaveValue('Synthetic Label');
 await dialog.getByLabel('Your initials',{exact:true}).fill('SL');await dialog.getByRole('button',{name:'Initial and continue',exact:true}).click();
 await dialog.getByRole('button',{name:'Add signature',exact:true}).click();await page.getByRole('radio',{name:'Type',exact:true}).check();await page.getByLabel('Type your signature',{exact:true}).fill('SYNTHETIC ONLY');await page.getByRole('button',{name:'Use signature',exact:true}).click();
 await dialog.getByRole('checkbox',{name:/I have read this fixed agreement/}).check();await dialog.getByRole('button',{name:'Sign agreement',exact:true}).click();
 await expect(page.getByRole('button',{name:'Send to artist',exact:true})).toBeVisible();await expect(page.getByRole('button',{name:'Approve and activate Studio',exact:true})).toHaveCount(0);
 expect(await page.evaluate(()=>({role:window.fixtureSignature.role_name,consent:window.fixtureSignature.consent,digest:window.fixtureSignature.expected_digest}))).toEqual({role:'label',consent:true,digest:'a'.repeat(64)});
 await page.getByRole('button',{name:'Send to artist',exact:true}).click();await expect(page.locator('body')).toHaveAttribute('data-fixture-send','prepared');
});
