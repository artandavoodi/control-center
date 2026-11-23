import {test,expect} from '@playwright/test';
import {build} from 'esbuild';
import {readFile} from 'node:fs/promises';
const issuanceBundle=await build({entryPoints:['assets/js/layers/control-center/operations/agreement-issuance.js'],bundle:true,format:'esm',write:false});
const documentBundle=await build({entryPoints:['assets/js/layers/control-center/operations/documents.js'],bundle:true,format:'esm',write:false,loader:{'.ttf':'binary','.css':'text'},plugins:[{name:'pdf-worker-source',setup(builder){builder.onLoad({filter:/pdf\.worker\.mjs$/},async args=>({contents:await readFile(args.path,'utf8'),loader:'text'}));}}]});
const signingBundle=await build({entryPoints:['assets/js/layers/control-center/operations/shared/agreement-rehearsal.js'],bundle:true,format:'esm',write:false,loader:{'.ttf':'binary','.css':'text'},plugins:[{name:'pdf-worker-source',setup(builder){builder.onLoad({filter:/pdf\.worker\.mjs$/},async args=>({contents:await readFile(args.path,'utf8'),loader:'text'}));}}]});
const workspaceBundle=await build({entryPoints:['assets/js/layers/control-center/operations/agreements.js'],bundle:true,format:'esm',write:false,loader:{'.ttf':'binary','.css':'text'},plugins:[{name:'pdf-worker-source',setup(builder){builder.onLoad({filter:/pdf\.worker\.mjs$/},async args=>({contents:await readFile(args.path,'utf8'),loader:'text'}));}}]});

test('active artist panes and contract editor expose exactly one visible options menu',async({page})=>{
 await page.route('**/__workspace-options.js',route=>route.fulfill({contentType:'application/javascript',body:workspaceBundle.outputFiles[0].text}));await page.goto('/');await page.evaluate(async()=>{
  const {mountAgreements}=await import('/__workspace-options.js');document.body.innerHTML='<div class="control-center-app"><main class="control-center-operations"><header><h1>Agreements</h1></header><div data-workspace></div></main></div>';
  const draft={id:'draft',artist_account_id:'artist',unit_id:'brand',title:'Fixture contract',body:'Fixture contract text',tags:['agreement','draft'],classification:'confidential',updated_at:'2026-11-23T00:00:00Z',draft_state:null};
  const tables=new Set(['control_center_documents','studio_agreement_intake_requests','studio_agreement_intake_versions','studio_contract_invitations','studio_agreement_envelopes']);
  const client={rpc:async(name)=>{if(name==='signature_library_list')return {data:[]};if(name==='control_center_contract_portal_ready')return {data:false};if(name==='control_center_agreement_artist_directory')return {data:{items:[{account_id:'artist',request_id:null,artist_name:'Fixture Artist',status:'awaiting_details',updated_at:draft.updated_at,archived:false}],next_cursor:null}};throw Error('Unexpected RPC: '+name);},from(table){if(!tables.has(table))throw Error('Unexpected table: '+table);const rows=table==='control_center_documents'?[draft]:[];const query={select(){return query;},eq(){return query;},contains(){return query;},order(){return query;},limit(){return query;},then(resolve){return Promise.resolve({data:rows}).then(resolve);}};return query;}};
  const config=await fetch('/assets/data/control-center/operations.json').then(response=>response.json());
  await mountAgreements({content:document.querySelector('[data-workspace]'),client,staff:{is_owner:true,permissions:['documents.read','documents.write','documents.confidential']},workspace:{id:'brand',workspace_key:'artanrecords'},context:{},units:[{id:'brand',kind:'pillar',active:true}],config,e:String,icon:()=>'',isCurrent:()=>true,onSaved:async()=>{}});
 });
 await page.getByRole('button',{name:'Fixture Artist',exact:true}).click();
 const options=page.getByRole('button',{name:'More',exact:true}),artist=page.locator('[data-artist-options]:visible'),contract=page.locator('[data-document-editor] button[aria-label="More"]:visible');
 const checkPane=async title=>{await page.getByRole('tab',{name:title,exact:true}).click();await expect(page.getByRole('tab',{name:title,exact:true})).toHaveAttribute('aria-selected','true');await expect(options).toHaveCount(1);await expect(artist).toBeVisible();await expect(contract).toHaveCount(0);const pane=page.getByRole('tabpanel',{name:title,exact:true});await expect(pane.getByRole('button',{name:'More',exact:true})).toBeVisible();await expect(artist).not.toHaveClass(/ui-hover-tooltip/);expect(await artist.getAttribute('data-label')).toBeNull();const layout=await pane.evaluate(node=>{const header=node.querySelector('[data-artist-pane-controls]'),box=node.getBoundingClientRect(),head=header.getBoundingClientRect();return {offset:head.top-box.top,margin:getComputedStyle(header).marginBottom,padding:getComputedStyle(node).paddingTop,display:getComputedStyle(node).display};});expect(layout).toEqual({offset:0,margin:'0px',padding:'0px',display:'grid'});};
 for(const title of ['Artist details','Contracts','Signing','Archive'])await checkPane(title);
 await checkPane('Contracts');await page.getByRole('button',{name:'Open contract',exact:true}).click();const editor=page.locator('[data-document-editor]');await expect(editor).toBeVisible();await expect(options).toHaveCount(1);await expect(contract).toBeVisible();await expect(artist).toHaveCount(0);
 await contract.click();const menu=page.getByRole('dialog',{name:'Contract options',exact:true});await expect(menu).toBeVisible();await expect(menu.getByRole('menuitem',{name:'Studio access',exact:true})).toHaveCount(1);await expect(menu.getByRole('menuitem',{name:'Archive artist',exact:true})).toHaveCount(1);await menu.press('Escape');
 for(const title of ['Artist details','Signing','Archive'])await checkPane(title);
 await page.getByRole('tab',{name:'Contracts',exact:true}).click();await expect(editor).toBeVisible();await expect(options).toHaveCount(1);await expect(contract).toBeVisible();await expect(artist).toHaveCount(0);await editor.getByRole('button',{name:'Close contract',exact:true}).click();await expect(editor).toBeHidden();await expect(options).toHaveCount(1);await expect(artist).toBeVisible();await expect(contract).toHaveCount(0);
});

test('directory sends search sort and opaque keyset cursors to the server and uses its email fallback',async({page})=>{
 await page.goto('/');await page.evaluate(async()=>{
  const {mountAgreementWorkspace}=await import('/assets/js/layers/control-center/operations/agreement-workspace.js');document.body.innerHTML='<div class="control-center-app"><main class="control-center-operations"><header><h1>Agreements</h1></header><div data-workspace></div></main></div>';
  window.directoryCalls=[];window.directoryCursor={updated_at:'2026-11-16T00:00:00Z',account_id:'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',opaque:{token:'server-only'}};
  const first={account_id:'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',request_id:null,artist_name:'unknown@example.test',email:'unknown@example.test',username:null,status:'awaiting_details',updated_at:'2026-11-16T00:00:00Z',archived:false},second={...first,account_id:'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',artist_name:'Server result'};
  const client={rpc:async(name,args)=>{if(name==='signature_library_list')return {data:[]};if(name!=='control_center_agreement_artist_directory')throw Error('Unexpected RPC: '+name);window.directoryCalls.push(args);return {data:{items:args.after_cursor?[second]:[first],next_cursor:args.after_cursor?null:window.directoryCursor}};},from(table){if(!['studio_contract_invitations','studio_agreement_intake_requests'].includes(table))throw Error('Unexpected table: '+table);const query={select(){return query;},eq(){return query;},order(){return query;},limit(){return query;},then(resolve){return Promise.resolve({data:[]}).then(resolve);}};return query;}};
  await mountAgreementWorkspace({content:document.querySelector('[data-workspace]'),client,staff:{is_owner:true,permissions:['documents.read','documents.write']},workspace:{id:'brand',workspace_key:'artanrecords'},units:[],config:{chrome:{}},e:String,icon:()=>'',isCurrent:()=>true},async options=>{options.content.dataset.agreementTab='details';options.content.innerHTML='<section id="agreement-panel-details" role="tabpanel" aria-label="Artist details"><p>No details submitted.</p></section>';});
 });
 const names=page.locator('.control-center-artist-result strong');await expect(names).toHaveText(['unknown@example.test']);await page.getByRole('button',{name:'Show more artists',exact:true}).click();await expect(names).toHaveText(['unknown@example.test','Server result']);expect(await page.evaluate(()=>window.directoryCalls[1].after_cursor)).toEqual(await page.evaluate(()=>window.directoryCursor));await expect(page.getByRole('button',{name:'Show more artists',exact:true})).toBeHidden();
 await page.getByLabel('Sort by',{exact:true}).selectOption('za');await expect(names).toHaveText(['unknown@example.test']);await expect.poll(()=>page.evaluate(()=>window.directoryCalls.at(-1))).toMatchObject({sort_by:'za',after_cursor:null,page_size:50});
 await page.getByRole('searchbox',{name:'Find agreement artist',exact:true}).fill('  unknown@example.test  ');await expect.poll(()=>page.evaluate(()=>window.directoryCalls.at(-1))).toMatchObject({brand:'brand',search_text:'unknown@example.test',include_archived:false,sort_by:'za',after_cursor:null,page_size:50});
 await page.getByRole('button',{name:'Show more artists',exact:true}).click();await expect(names).toHaveText(['unknown@example.test','Server result']);expect(await page.evaluate(()=>window.directoryCalls.at(-1))).toMatchObject({search_text:'unknown@example.test',sort_by:'za',after_cursor:await page.evaluate(()=>window.directoryCursor)});
 await page.getByRole('button',{name:'unknown@example.test',exact:true}).click();await expect(page.getByRole('heading',{name:'unknown@example.test',exact:true})).toBeVisible();await expect(page.getByRole('heading')).not.toContainText(['aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa']);await expect(page.getByText('No details submitted.',{exact:true})).toBeVisible();await page.getByRole('button',{name:'More',exact:true}).click();await expect(page.getByRole('menuitem',{name:'Archive artist',exact:true})).toBeVisible();await expect(page.getByRole('menuitem',{name:'Edit details',exact:true})).toHaveCount(0);
});

test('shared review checklist confirms only saved decisions and preserves evidence-only steps',async({page})=>{
 const source=await readFile('assets/js/layers/control-center/operations/shared/review-checklist.js','utf8');await page.route('**/__review-checklist.js',route=>route.fulfill({contentType:'application/javascript',body:source}));await page.goto('/');
 await page.evaluate(async()=>{
  const {renderReviewChecklist}=await import('/__review-checklist.js');document.body.innerHTML='<main class="control-center-app"><section class="control-center-operations"><ul data-checklist></ul><p role="status"></p></section></main>';window.confirmSaved=false;window.reviewOpened=0;
  const steps=[{id:'evidence',label:'Verified document version',state:'blocked'},{id:'review',label:'I confirm the reviewed hiring terms',state:'pending',onConfirm:async()=>window.confirmSaved,action:{label:'Review hiring terms',run:()=>{window.reviewOpened++;}}}];
  renderReviewChecklist(document.querySelector('[data-checklist]'),{steps,onError:error=>{document.querySelector('[role=status]').textContent=error.message;}});
  try{renderReviewChecklist(document.querySelector('[data-checklist]'),{steps:[steps[0],steps[0]]});}catch{window.duplicateRejected=true;}
 });
 expect(await page.evaluate(()=>window.duplicateRejected)).toBe(true);await expect(page.getByRole('checkbox',{name:'Verified document version'})).toBeDisabled();
 const confirm=page.getByRole('checkbox',{name:'I confirm the reviewed hiring terms'});await confirm.click();await expect(confirm).not.toBeChecked();await expect(page.getByRole('status')).toHaveText('The confirmation was not saved.');
 await page.evaluate(()=>window.confirmSaved=true);await confirm.check();await expect(confirm).toBeChecked();await expect(page.locator('[data-review-step=review]')).toHaveAttribute('data-state','complete');
 await page.getByRole('button',{name:'Review hiring terms'}).click();expect(await page.evaluate(()=>window.reviewOpened)).toBe(1);await expect(page.locator('[data-checklist]')).toHaveCSS('list-style-type','none');
});

test('agreement directory separates general tools from one artist workspace',async({page})=>{
 await page.goto('/');
 await page.waitForFunction(()=>Boolean(window.NeuroartanCloseButtons?.normalizeCloseButtonPrimitive));
 await page.evaluate(async()=>{
  const {mountAgreementWorkspace}=await import('/assets/js/layers/control-center/operations/agreement-workspace.js');
  document.body.innerHTML='<div class="control-center-app"><div class="control-center-operations"><main><header><h1>Agreements</h1></header><div data-test-workspace data-operation-content></div></main></div></div>';
  const requests=[{id:'request-a',account_id:'artist-a',workspace_id:'brand',current_version_id:'version-a',status:'approved',rehearsal:false,updated_at:'2026-11-15T00:00:00Z'},{id:'request-b',account_id:'artist-b',workspace_id:'brand',current_version_id:'version-b',status:'submitted',rehearsal:false,updated_at:'2026-11-16T00:00:00Z'}];
  const versions=[{id:'version-a',request_id:'request-a',details:{artist_name:'First Artist',legal_name:'First Legal Name'},reply_email:'first@example.test'},{id:'version-b',request_id:'request-b',details:{artist_name:'Second Artist'},reply_email:'second@example.test'}];
  window.directoryCalls=[];window.tableCalls=[];
  const items=requests.map(request=>{const version=versions.find(item=>item.id===request.current_version_id);return {account_id:request.account_id,request_id:request.id,artist_name:version.details.artist_name,email:version.reply_email,status:request.status,updated_at:request.updated_at,archived:false};});
  const client={rpc:async(name,args)=>{
   if(name==='signature_library_list')return {data:[]};
   if(name==='control_center_contract_portal_ready')return {data:false};
   if(name==='control_center_agreement_artist_directory'){window.directoryCalls.push(args);let rows=items.filter(row=>row.archived===args.include_archived&&(!args.status_filter||row.status===args.status_filter)&&(!args.search_text||row.artist_name.toLowerCase().includes(args.search_text.toLowerCase())));rows.sort((a,b)=>args.sort_by==='az'?a.artist_name.localeCompare(b.artist_name):args.sort_by==='za'?b.artist_name.localeCompare(a.artist_name):args.sort_by==='oldest'?a.updated_at.localeCompare(b.updated_at):b.updated_at.localeCompare(a.updated_at));return {data:{items:rows,next_cursor:null}};}
   if(name==='control_center_set_agreement_artist_archived'){items.find(row=>row.account_id===args.artist).archived=args.archived;return {data:true};}
   throw Error('Unexpected RPC: '+name);
  },from(table){window.tableCalls.push(table);let rows=table==='studio_agreement_intake_requests'?requests:table==='studio_agreement_intake_versions'?versions:[];const query={select(){return query;},eq(key,value){rows=rows.filter(row=>row[key]===value);return query;},in(key,values){rows=rows.filter(row=>values.includes(row[key]));return query;},order(){return query;},limit(){return query;},single:async()=>({data:rows[0]}),then(resolve){return Promise.resolve({data:rows}).then(resolve);}};return query;}};
  const icon=path=>'<img class="control-center-operation-icon" alt="" src="/registry/icons/public/assets/'+path+'">';
  await mountAgreementWorkspace({content:document.querySelector('[data-test-workspace]'),client,staff:{is_owner:true,permissions:['documents.read','documents.write','documents.confidential']},workspace:{id:'brand',workspace_key:'artanrecords'},units:[{id:'brand',kind:'pillar',active:true}],config:{chrome:{create:'core/actions/create/plus.svg',edit:'core/actions/edit/edit.svg',save:'core/actions/save/save.svg'}},e:value=>String(value),icon,isCurrent:()=>true},async options=>{
   options.content.dataset.account=options.artistAccount;options.content.dataset.versions=options.artistVersionIds.join(',');
   options.content.innerHTML='<nav role="tablist" aria-label="Artist stages">'+['Artist details','Contracts','Signing','Archive'].map(title=>'<button role="tab">'+title+'</button>').join('')+'</nav><p>Only '+options.artistName+'</p>';
   options.content.dataset.agreementTab='details';const panel=document.createElement('section');panel.id='agreement-panel-details';panel.setAttribute('role','tabpanel');panel.setAttribute('aria-label','Artist details');panel.append(options.content.querySelector('p'));options.content.append(panel);
   options.onArtistAccessReady(()=>{const dialog=document.createElement('dialog');dialog.setAttribute('aria-label','Studio access');dialog.innerHTML='<button onclick="this.closest(\'dialog\').close()">Close Studio access</button>';options.content.append(dialog);dialog.showModal();});
   if(options.artistAccount==='artist-a')await new Promise(resolve=>{window.finishArtistMount=resolve;});
  });
 });
 await expect(page.getByRole('searchbox',{name:'Find agreement artist',exact:true})).toBeVisible();await expect(page.getByRole('tab')).toHaveCount(0);
 expect(await page.evaluate(()=>window.tableCalls.filter(table=>table.startsWith('studio_agreement_intake')))).toEqual([]);
 expect(await page.evaluate(()=>window.directoryCalls[0])).toMatchObject({brand:'brand',search_text:'',include_archived:false,sort_by:'latest',after_cursor:null,page_size:50});
 const names=page.locator('.control-center-artist-result strong');await expect(names).toHaveText(['Second Artist','First Artist']);await page.getByLabel('Sort by',{exact:true}).selectOption('az');await expect(names).toHaveText(['First Artist','Second Artist']);await page.getByLabel('Sort by',{exact:true}).selectOption('za');await expect(names).toHaveText(['Second Artist','First Artist']);await page.getByLabel('Sort by',{exact:true}).selectOption('oldest');await expect(names).toHaveText(['First Artist','Second Artist']);await page.getByLabel('Status',{exact:true}).selectOption('approved');await expect(names).toHaveText(['First Artist']);await page.getByLabel('Status',{exact:true}).selectOption('');
 const tools=page.getByRole('navigation',{name:'Agreement tools'});
 expect(await page.evaluate(()=>window.directoryCalls.slice(0,4).map(args=>args.sort_by))).toEqual(['latest','az','za','oldest']);
 await expect(tools.getByRole('button',{name:'My signatures'})).toBeVisible();await expect(tools.getByRole('button',{name:'Invitations'})).toBeVisible();await expect(tools.getByRole('button',{name:'Account requests'})).toHaveCount(0);
 await expect(page.getByRole('tab',{name:'Contracts'})).toHaveCount(0);
 await page.getByRole('button',{name:'First Artist',exact:true}).click();
 await expect(page.locator('[data-account=artist-a]')).toHaveAttribute('aria-busy','true');
 await expect(page.locator('[data-account=artist-a]')).toHaveAttribute('inert','');
 const loader=page.getByRole('status',{name:'Loading artist agreements',exact:true});await expect(loader).toBeVisible();await expect(loader).toHaveCSS('display','grid');await expect(loader).toHaveCSS('place-items','center');
 await expect(page.getByRole('tab',{name:'Contracts'})).toHaveCount(0);
 await page.evaluate(()=>window.finishArtistMount());
 await expect(page.getByRole('heading',{name:'First Artist',exact:true})).toBeVisible();await expect(page.getByRole('tab',{name:'Contracts'})).toBeVisible();await expect(page.getByRole('tab',{name:'Account requests'})).toHaveCount(0);await expect(loader).toHaveCount(0);
 await page.getByRole('button',{name:'More',exact:true}).click();await page.getByRole('menuitem',{name:'Studio access',exact:true}).click();await expect(page.getByRole('dialog',{name:'Studio access',exact:true})).toBeVisible();await page.getByRole('button',{name:'Close Studio access',exact:true}).click();
 await expect(page.locator('[data-account=artist-a]')).not.toHaveAttribute('inert','');
 await expect(page.locator('[data-artist-account=artist-a]')).toHaveCSS('border-top-width','0px');
 await expect(page.locator('[data-account=artist-a]')).toHaveAttribute('data-versions','version-a');await expect(page.getByText('Only Second Artist')).toHaveCount(0);
 await page.getByRole('button',{name:'Exit artist'}).click();await expect(page.getByRole('tab',{name:'Contracts'})).toHaveCount(0);
 await page.getByRole('button',{name:'Second Artist',exact:true}).click();await expect(page.locator('[data-account=artist-b]')).toHaveAttribute('data-versions','version-b');await expect(page.getByText('Only First Artist')).toHaveCount(0);
 page.on('dialog',dialog=>dialog.accept());await page.getByRole('button',{name:'More',exact:true}).click();await expect(page.getByRole('menuitem',{name:'Edit details',exact:true})).toHaveCount(0);await page.getByRole('menuitem',{name:'Archive artist',exact:true}).click();await expect(names).toHaveText(['First Artist']);
 await page.getByLabel('Artist directory',{exact:true}).selectOption('archived');await expect(names).toHaveText(['Second Artist']);await page.getByRole('button',{name:'Second Artist',exact:true}).click();await page.getByRole('button',{name:'More',exact:true}).click();await page.getByRole('menuitem',{name:'Restore artist',exact:true}).click();await expect(names).toHaveCount(0);await page.getByLabel('Artist directory',{exact:true}).selectOption('active');await expect(names).toHaveText(['First Artist','Second Artist']);
});

test('contract review explains blockers before offering an exact-version confirmation',async({page})=>{
 await page.route('**/__agreement-issuance-test.js',route=>route.fulfill({contentType:'application/javascript',body:issuanceBundle.outputFiles[0].text}));
 await page.goto('/');await page.evaluate(async()=>{
  const {mountAgreementIssuance}=await import('/__agreement-issuance-test.js');
  document.body.innerHTML='<dialog open><section data-issue></section></dialog>';
  const record={id:'fixture',title:'Fixture draft',body:'Working terms',artist_intake_version_id:'version',unit_id:'unit',tags:['partnership-silver'],draft_state:{fields:{'legal review':'PENDING — NO APPROVAL RECORDED','effective date':'2026-01-15','expiry date':'2027-01-15'}}};
  let sameParty=false,enabled=false;window.issueCalls=[];
  const client={rpc:async(name,args)=>{window.issueCalls.push(name);if(name==='control_center_create_signing_verification'){window.verificationArguments=args;return window.verificationError?{error:{message:'Source changed. Refresh before continuing.'}}:{data:'verification-envelope'};}if(name==='control_center_issue_agreement'){window.issuedArguments=args;return {data:'fixed-envelope'};}return {data:enabled};},from(table){if(!['studio_agreement_intake_requests','studio_agreement_envelopes'].includes(table))throw Error('Unexpected table: '+table);const query={select(){return query;},eq(){return query;},order(){return query;},limit(){return query;},maybeSingle:async()=>({data:window.existingEnvelope||null}),single:async()=>({data:{id:'intake',account_id:sameParty?'label':'artist'}})};return query;}};
  window.renderIssuance=async stage=>{if(stage>0){record.title=stage===4?'Fixture draft':'Fixture final agreement';record.draft_state.fields['legal review']='Independent reviewer approval for fixture version';}sameParty=stage===1;enabled=stage>=3;await mountAgreementIssuance({root:document.querySelector('[data-issue]'),dialog:document.querySelector('dialog'),client,staff:{account_id:'label'},workspace:{id:'brand'},record,e:String,icon:()=>'',isCurrent:()=>true,onIssued:id=>{window.signingDestination=id;},onResolve:()=>{},onPrepareFinal:async()=>{record.title='Fixture final agreement';window.preparedFinal=true;return record;},onSaveReview:async note=>{record.draft_state.fields['legal review']=note;window.reviewSaved=note;return record;}});};
  await window.renderIssuance(0);
 });
 await expect(page.getByText('Legal approval has not been recorded for this version.',{exact:true})).toBeVisible();await expect(page.getByRole('button',{name:'Prepare final text',exact:true})).toHaveCount(0);
 await expect(page.locator('.control-center-review-checklist')).toHaveCSS('list-style-type','none');
 await page.getByRole('button',{name:'Review legal approval'}).click();
 await page.getByLabel('Reviewer and decision',{exact:true}).fill('Synthetic independent reviewer approved fixture text version one.');
 await page.getByRole('checkbox').check();await page.getByRole('button',{name:'Save review'}).click();
 await expect(page.getByText('Legal approval has not been recorded for this version.',{exact:true})).toHaveCount(0);
 expect(await page.evaluate(()=>window.reviewSaved)).toBe('Synthetic independent reviewer approved fixture text version one.');
 await expect(page.getByRole('checkbox',{name:'Review note saved',exact:true})).toBeChecked();await expect(page.getByRole('button',{name:'Prepare final text',exact:true})).toHaveCount(0);await page.getByRole('button',{name:'Finalize contract',exact:true}).click();expect(await page.evaluate(()=>window.preparedFinal)).toBe(true);await expect(page.getByRole('status').first()).toHaveText('Contract text finalized. Nothing has been sent.');await expect(page.getByRole('button',{name:'Send to signing',exact:true})).toBeDisabled();expect(await page.evaluate(()=>window.issueCalls.includes('control_center_issue_agreement'))).toBe(false);
 await page.evaluate(()=>window.renderIssuance(1));await expect(page.getByText('The artist and label signer use the same account. A different authorized label signer is required before issuing.',{exact:true})).toBeVisible();
 await page.evaluate(()=>window.renderIssuance(2));await expect(page.getByText('Real contract issuing is not enabled. This preview has not been sent.',{exact:true})).toBeVisible();await expect(page.getByRole('button',{name:'Send to signing',exact:true})).toBeDisabled();
 await expect(page.getByRole('button',{name:'Create signing verification',exact:true})).toHaveCount(0);expect(await page.evaluate(()=>window.verificationArguments)).toBeUndefined();
 await page.evaluate(()=>{window.issueCalls=[];});
 await page.evaluate(()=>window.renderIssuance(4));await page.getByRole('button',{name:'Confirm, finalize and send to signing'}).click();expect(await page.evaluate(()=>window.preparedFinal)).toBe(true);await expect(page.getByRole('button',{name:'Prepare final text',exact:true})).toHaveCount(0);
 await page.evaluate(()=>window.renderIssuance(3));await expect(page.getByRole('button',{name:'Confirm, finalize and send to signing'})).toBeEnabled();
 expect(await page.evaluate(()=>window.issueCalls.every(name=>name==='control_center_agreement_execution_ready'))).toBe(true);
 page.on('dialog',dialog=>dialog.accept());
 await page.getByLabel('Label signer legal name',{exact:true}).fill('Fixture Label');
 await page.getByRole('checkbox').check();
 await page.getByRole('button',{name:'Confirm, finalize and send to signing'}).click();
 await expect(page.getByRole('button',{name:'Add label signature'})).toBeVisible();
 expect(await page.evaluate(()=>window.issuedArguments)).toMatchObject({document:'fixture',intake:'intake',tier:'silver',label_signer:'label',confirmed:true,starts_on:'2026-01-15',ends_on:'2027-01-15'});
 expect(await page.evaluate(()=>window.issueCalls.filter(name=>name==='control_center_issue_agreement').length)).toBe(1);
 await page.evaluate(async()=>{window.existingEnvelope={id:'fixed-envelope',status:'label_signed',source_document_id:'fixture',account_id:'artist',workspace_id:'brand',rehearsal:false};await window.renderIssuance(3);});
 await expect(page.getByRole('status').first()).toHaveText('Sent to signing');await expect(page.getByRole('button',{name:'Confirm, finalize and send to signing',exact:true})).toHaveCount(0);await expect(page.getByRole('button',{name:'Open signing record',exact:true})).toBeVisible();expect(await page.evaluate(()=>window.issueCalls.filter(name=>name==='control_center_issue_agreement').length)).toBe(1);await page.getByRole('button',{name:'Open signing record',exact:true}).click();expect(await page.evaluate(()=>window.signingDestination)).toBe('fixed-envelope');
});

test('verification invitation uses the themed workspace and shared blurred backdrop',async({page})=>{
 await page.route('**/__agreement-issuance-test.js',route=>route.fulfill({contentType:'application/javascript',body:issuanceBundle.outputFiles[0].text}));
 await page.goto('/');await page.evaluate(async()=>{
  const {prepareAgreementEmail}=await import('/__agreement-issuance-test.js');
  document.body.innerHTML='<div class="control-center-app"><div class="control-center-operations"><section class="agreement-rehearsal" data-signing-root></section></div></div>';
  window.mailCalls=[];
  await prepareAgreementEmail({root:document.querySelector('.control-center-operations'),client:{rpc:async(name,args)=>{window.mailCalls.push({name,args});return {data:{token:'a'.repeat(64),enquiry:'fixture-enquiry',recipient_email:'artist@example.test',expires_at:'2027-01-01T00:00:00Z'}};}},staff:{is_owner:false},envelope:{id:'verification',rehearsal:true},e:String,icon:()=>'<img class="control-center-operation-icon" src="/registry/icons/public/assets/core/actions/send/send.svg" alt="">'});
 });
 const dialog=page.getByRole('dialog',{name:'Signing verification invitation',exact:true});await expect(dialog).toBeVisible();
 await expect(page.locator('.control-center-operations > .control-center-reply-dialog')).toBeVisible();
 const backdrop=await dialog.evaluate(el=>({blur:getComputedStyle(el,'::backdrop').backdropFilter,background:getComputedStyle(el).backgroundColor,color:getComputedStyle(el).color}));
 expect(backdrop.blur).toMatch(/^blur\(/);expect(backdrop.background).not.toBe('rgba(0, 0, 0, 0)');expect(backdrop.color).not.toBe(backdrop.background);
 const approvedStyle=await dialog.evaluate(el=>({padding:getComputedStyle(el).padding,width:getComputedStyle(el).width,gap:getComputedStyle(el.querySelector('[data-contract-mail]')).gap,field:getComputedStyle(el.querySelector('input')).backgroundColor,rows:el.querySelector('textarea').rows}));
 await expect(dialog.getByRole('textbox',{name:'Subject',exact:true})).toHaveValue('Your Artanrecords signing verification');await expect(dialog.getByRole('textbox',{name:'Message',exact:true})).toHaveValue(/does not execute a contract/);
 expect(await page.evaluate(()=>window.mailCalls)).toEqual([{name:'control_center_signing_verification_link',args:{envelope:'verification'}}]);await dialog.getByRole('button',{name:'Close signing invitation',exact:true}).click();await expect(dialog).not.toBeVisible();
 await page.evaluate(async()=>{
  const {prepareAgreementEmail}=await import('/__agreement-issuance-test.js');await prepareAgreementEmail({root:document.querySelector('[data-signing-root]'),client:{rpc:async(name,args)=>{window.mailCalls.push({name,args});return {data:{token:'b'.repeat(64),enquiry:'fixture-enquiry',recipient_email:'artist@example.test',expires_at:'2027-01-01T00:00:00Z'}};}},staff:{is_owner:false},envelope:{id:'signed-contract',rehearsal:false},e:String,icon:()=>'<img class="control-center-operation-icon" src="/registry/icons/public/assets/core/actions/send/send.svg" alt="">'});
 });
 const real=page.getByRole('dialog',{name:'Signing invitation',exact:true});await expect(real).toBeVisible();await expect(real.locator('..')).toHaveClass('control-center-operations');await expect(page.locator('[data-signing-root] dialog')).toHaveCount(0);
 expect(await real.evaluate(el=>({padding:getComputedStyle(el).padding,width:getComputedStyle(el).width,gap:getComputedStyle(el.querySelector('[data-contract-mail]')).gap,field:getComputedStyle(el.querySelector('input')).backgroundColor,rows:el.querySelector('textarea').rows}))).toEqual(approvedStyle);
 await expect(real.getByRole('textbox',{name:'Subject',exact:true})).toHaveValue('Your Artanrecords agreement is ready to sign');expect(await page.evaluate(()=>window.mailCalls.at(-1))).toEqual({name:'control_center_agreement_signing_link',args:{envelope:'signed-contract'}});
});

test('artist contract inventory excludes documents belonging to a different intake',async({page})=>{
 await page.route('**/__agreement-document-test.js',route=>route.fulfill({contentType:'application/javascript',body:documentBundle.outputFiles[0].text}));
 await page.goto('/');await page.evaluate(async()=>{
  const {mountDocuments}=await import('/__agreement-document-test.js');
  document.body.innerHTML='<div class="control-center-app"><main><div data-documents></div></main></div>';
  const first='aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',second='bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';
  const rows=[{id:'one',artist_account_id:'artist-a',artist_intake_version_id:first,title:'First artist contract',tags:['agreement','draft'],classification:'confidential',body:'First artist terms without editable ownership markers'},{id:'two',artist_account_id:'artist-b',artist_intake_version_id:second,title:'Second artist contract',tags:['agreement','draft'],classification:'confidential',body:'Second artist terms'}];
  const query={select(){return query;},eq(){return query;},contains(){return query;},or(){return query;},order(){return query;},limit(){return query;},then(resolve){return Promise.resolve({data:rows}).then(resolve);}};
  await mountDocuments({content:document.querySelector('[data-documents]'),client:{from:()=>query},staff:{permissions:['documents.read','documents.confidential']},workspace:{id:'brand'},context:{},units:[],e:String,icon:()=>'',config:{chrome:{search:'core/actions/search/search.svg',close:'core/actions/close/close.svg'}},isCurrent:()=>true,agreementOnly:true,artistAccount:'artist-a',artistVersionIds:[first]});
 });
 await expect(page.getByRole('heading',{name:'First artist contract'})).toBeVisible();await expect(page.getByRole('heading',{name:'Second artist contract'})).toHaveCount(0);
});

test('scroll guidance follows the visible section without recording initials',async({page})=>{
 await page.goto('/');await page.evaluate(async()=>{
  const {signingGuide}=await import('/assets/js/layers/control-center/operations/shared/agreement-guide.js');const labels=(await fetch('/assets/data/control-center/agreement-rehearsal.json').then(r=>r.json())).guide;
  document.body.innerHTML='<section data-envelope-content><div class="agreement-rehearsal-document"></div><form><label>First<input name="initial-1"></label><label>Second<input name="initial-2"></label><label>Signer name<input name="signer" value="Fixture" readonly></label></form></section>';
  const body=document.querySelector('[data-envelope-content]');window.scrollGuide=signingGuide({body,form:body.querySelector('form'),version:{terms:{body:'1. First\n'+('Read this fixture paragraph.\n'.repeat(70))+'\n2. Second\n'+('Read this other fixture paragraph.\n'.repeat(70)),section_titles:['1. First','2. Second']}},labels,arrow:'<img alt="" src="/registry/icons/public/assets/core/interface/navigation/scroll-down.svg">'});
  const dialog=document.createElement('dialog');dialog.className='agreement-focus';dialog.innerHTML='<header><h2>Scroll fixture</h2></header>';dialog.append(body);document.body.append(dialog);dialog.showModal();
 });
 const dialog=page.getByRole('dialog'),status=dialog.locator('.agreement-guide-header [role=status]');await expect(status).toHaveText('Section 1 of 2');await expect(dialog.locator('.agreement-guide-arrow')).toHaveCSS('mask-image',/scroll-down.svg/);
 const positions=await dialog.locator('[data-guide-section] > h4').evaluateAll(nodes=>nodes.map(node=>({x:node.getBoundingClientRect().x,width:node.getBoundingClientRect().width})));
 await dialog.locator('[data-guide-section="2"]').evaluate(el=>el.scrollIntoView({block:'start'}));await expect(status).toHaveText('Section 2 of 2');expect(await page.evaluate(()=>window.scrollGuide.complete())).toBe(false);await expect(dialog.locator('[name=initial-2]')).toHaveValue('');
 expect(await dialog.locator('[data-guide-section] > h4').evaluateAll(nodes=>nodes.map(node=>({x:node.getBoundingClientRect().x,width:node.getBoundingClientRect().width})))).toEqual(positions);
 await expect(dialog.locator('[data-guide-section="1"]')).toHaveCSS('border-inline-start-color','rgba(0, 0, 0, 0)');await expect(dialog.locator('[data-guide-section="2"]')).not.toHaveCSS('border-inline-start-color','rgba(0, 0, 0, 0)');
 const follow=dialog.locator('.agreement-guide-follow');await follow.click();await expect(status).toHaveText('Signature');await expect(follow).toHaveAttribute('data-direction','up');await expect(follow).toHaveCSS('transform','none');await expect(follow).toHaveAttribute('data-label','Back: Section 2 of 2');await follow.click();await expect(status).toHaveText('Section 2 of 2');
 await dialog.locator('[data-guide-section="1"]').evaluate(el=>el.scrollIntoView({block:'start'}));await expect(status).toHaveText('Section 1 of 2');await expect(follow).toHaveAttribute('data-direction','up');
 await dialog.evaluate(el=>{el.scrollTop+=200;});await expect(follow).toHaveAttribute('data-direction','down');await expect(follow).toHaveAttribute('data-label','Next: Section 2 of 2');await follow.hover();await expect.poll(()=>follow.evaluate(el=>getComputedStyle(el,'::after').opacity)).toBe('1');await follow.click();await expect(status).toHaveText('Section 2 of 2');
 await expect(dialog.locator('[name=initial-1]')).toHaveValue('');await expect(dialog.locator('[name=initial-2]')).toHaveValue('');expect(await page.evaluate(()=>window.scrollGuide.complete())).toBe(false);await page.evaluate(()=>window.scrollGuide.focusPending());await expect(status).toHaveText('Section 1 of 2');
});

test('document signature selection has one preview and no library management fields',async({page})=>{
 await page.goto('/');await page.evaluate(async()=>{
  const {signatureInput}=await import('/assets/js/layers/control-center/operations/shared/agreement-signature.js');const labels=(await fetch('/assets/data/control-center/agreement-rehearsal.json').then(r=>r.json())).signatureLibrary;
  document.body.innerHTML='<form><label>Upload<input type="file" name="signature"></label></form>';
  const image='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO5W16UAAAAASUVORK5CYII=';
  const client={rpc:async()=>({data:[{id:'one',title:'First signature',is_default:true,image_base64:image},{id:'two',title:'Second signature',image_base64:image}]})};
  window.selectedSignature=signatureInput(document.querySelector('form'),{client,libraryLabels:labels,selectionOnly:true});
 });
 await expect(page.getByRole('img',{name:'Prepared signature',exact:true})).toBeVisible();await expect(page.getByRole('img',{name:'Saved signature image',exact:true})).toHaveCount(0);await expect(page.getByLabel('Signature name',{exact:true})).toHaveCount(0);
 await expect(page.getByRole('button',{name:'Use selected signature',exact:true})).toHaveCount(0);await expect(page.getByRole('button',{name:'Remove from library',exact:true})).toHaveCount(0);
 await page.getByRole('combobox',{name:'Saved signature',exact:true}).selectOption('two');await expect(page.getByRole('img',{name:'Prepared signature',exact:true})).toHaveCount(1);expect(await page.evaluate(()=>Boolean(window.selectedSignature.prepared()))).toBe(true);
});

test('real signing starts with the label and exposes sending only after its signature',async({page})=>{
 await page.context().addInitScript(()=>{window.print=()=>{window.printRequested=true;};});
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
 await expect(page.locator('article.agreement-rehearsal-card')).toHaveCount(1);await expect(page.locator('.agreement-rehearsal-card > summary')).toHaveCount(0);await expect(page.getByRole('dialog')).toHaveCount(0);
 await page.getByRole('button',{name:'Open document',exact:true}).click();
 await expect(page.getByRole('button',{name:'Send to artist',exact:true})).toHaveCount(0);
 const dialog=page.getByRole('dialog',{name:'Synthetic signing fixture',exact:true});
 await expect(dialog.locator(':scope > header')).toHaveCSS('border-bottom-width','0px');await expect(dialog.locator('.agreement-document-toolbar')).toHaveCSS('border-bottom-width','0px');await expect(dialog.locator('.agreement-reading-guide')).toHaveCount(0);
 await expect(dialog.locator('.agreement-guide-header')).toHaveCSS('position','sticky');await expect(dialog.locator('.agreement-guide-controls [name=review_initials]')).toBeVisible();
 await expect(dialog.locator('[data-guide-next]')).toHaveCSS('color','rgb(255, 255, 255)');expect(await dialog.evaluate(el=>el.scrollWidth<=el.clientWidth)).toBe(true);
 await expect(dialog.getByLabel('Signer name (record label)',{exact:true})).toHaveValue('Synthetic Label');
 await dialog.getByLabel('Your initials',{exact:true}).fill('SL');await dialog.getByRole('button',{name:'Initial and continue',exact:true}).click();
 await expect(dialog.locator('.agreement-guide-header')).toContainText('Review complete.');
 await dialog.getByRole('button',{name:'Add signature',exact:true}).click();await page.getByRole('radio',{name:'Type',exact:true}).check();await page.getByLabel('Type your signature',{exact:true}).fill('SYNTHETIC ONLY');await page.getByRole('button',{name:'Use signature',exact:true}).click();
 await expect(dialog.locator('.agreement-guide-controls [data-guide-sign]')).toBeVisible();await expect(dialog.locator('.agreement-guide-controls [name=review_initials]')).toBeHidden();
 const print=dialog.getByRole('button',{name:'Print',exact:true});await expect(print).toHaveCSS('border-top-color','rgba(0, 0, 0, 0)');await expect(print).toHaveAttribute('data-tooltip-position','top');await expect(print).toHaveText('');const popupPromise=page.waitForEvent('popup');await print.click();const printed=await popupPromise;await expect(printed.locator('iframe')).toHaveAttribute('src',/^blob:/);const printUrl=await printed.locator('iframe').getAttribute('src');expect(await page.evaluate(async url=>new TextDecoder().decode((await(await fetch(url)).arrayBuffer()).slice(0,5)),printUrl)).toBe('%PDF-');await expect(printed.locator('body')).toHaveText('');await printed.close();
 await dialog.getByRole('switch',{name:'View as PDF'}).check();await expect(dialog.locator('.agreement-pdf-preview canvas').first()).toBeVisible();await expect(dialog.locator('form')).toBeHidden();await expect(dialog.locator('[data-pdf-loading]')).toHaveCount(0);await dialog.getByRole('switch',{name:'View as PDF'}).uncheck();await expect(dialog.locator('form')).toBeVisible();
 await dialog.getByRole('checkbox',{name:/I have read this fixed agreement/}).check();await dialog.getByRole('button',{name:'Sign agreement',exact:true}).click();
 await expect(page.getByRole('button',{name:'Send to artist',exact:true})).toBeVisible();await expect(page.getByRole('button',{name:'Approve and activate Studio',exact:true})).toHaveCount(0);
 expect(await page.evaluate(()=>({role:window.fixtureSignature.role_name,consent:window.fixtureSignature.consent,digest:window.fixtureSignature.expected_digest}))).toEqual({role:'label',consent:true,digest:'a'.repeat(64)});
 await page.getByRole('button',{name:'Send to artist',exact:true}).click();await expect(page.locator('body')).toHaveAttribute('data-fixture-send','prepared');
});
