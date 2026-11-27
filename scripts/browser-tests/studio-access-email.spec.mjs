import {test,expect} from '@playwright/test';
import {build} from 'esbuild';
import {readFile} from 'node:fs/promises';
const bundle=await build({entryPoints:['assets/js/layers/control-center/operations/studio-access-email.js'],bundle:true,format:'esm',write:false,loader:{'.ttf':'binary','.css':'text'}});
const reader=await build({entryPoints:['assets/js/layers/control-center/operations/shared/agreement-rehearsal.js'],bundle:true,format:'esm',write:false,loader:{'.ttf':'binary','.css':'text'},plugins:[{name:'pdf-worker-source',setup(builder){builder.onLoad({filter:/pdf\.worker\.mjs$/},async args=>({contents:await readFile(args.path,'utf8'),loader:'text'}));}}]});
test('archived read-only contract can prepare access without reopening signature or activation actions',async({page})=>{
 await page.route('**/__access-reader.js',route=>route.fulfill({contentType:'application/javascript',body:reader.outputFiles[0].text}));await page.goto('/');await page.evaluate(async()=>{
  const {mountSigningRehearsals}=await import('/__access-reader.js'),labels=await fetch('/assets/data/control-center/agreement-rehearsal.json').then(r=>r.json());document.body.innerHTML='<main data-reader></main>';
  const envelope={id:'approved',version_id:'version',rehearsal:false,status:'archived',created_at:'2026-11-26T00:00:00Z'},version={id:'version',version_number:1,terms_digest:'a'.repeat(64),terms:{kind:'artist_partnership_execution_v1',title:'Approved contract',body:'Fixed text',section_titles:[],notice:''}};
  const client={auth:{getUser:async()=>({data:{user:{id:'label'}}})},from(table){const rows=table==='studio_agreement_envelopes'?[envelope]:table==='studio_agreement_versions'?[version]:table==='studio_agreement_execution_reviews'?[{label_signer:'label'}]:[];const q={select(){return q;},eq(){return q;},order(){return q;},limit(){return q;},single:async()=>({data:rows[0]}),then(resolve){return Promise.resolve({data:rows}).then(resolve);}};return q;}};
  await mountSigningRehearsals({root:document.querySelector('[data-reader]'),client,role:'label',canWrite:()=>false,view:'archive',labels,icons:{open:'',refresh:'',download:'',send:''},onActivated:()=>{document.body.dataset.accessPrepared='approved';}});
 });
 await page.getByRole('button',{name:'Open document',exact:true}).click();await page.getByRole('button',{name:'Send Studio access',exact:true}).click();await expect(page.locator('body')).toHaveAttribute('data-access-prepared','approved');await expect(page.getByRole('button',{name:'Sign agreement',exact:true})).toHaveCount(0);await expect(page.getByRole('button',{name:'Approve and activate Studio',exact:true})).toHaveCount(0);
});
test('access email requires explicit preparation and keeps the verified recipient locked',async({page})=>{
 await page.route('**/__access-email.js',route=>route.fulfill({contentType:'application/javascript',body:bundle.outputFiles[0].text}));
 await page.goto('/');await page.evaluate(async()=>{
  const {prepareStudioAccessEmail}=await import('/__access-email.js');window.accessCalls=[];document.body.innerHTML='<main class="control-center-operations"></main>';
  await prepareStudioAccessEmail({root:document.body,staff:{},envelope:{id:'approved'},e:String,icon:()=>'',client:{functions:{invoke:async(name,args)=>{window.accessCalls.push({name,args});return {data:{recipient_email:'artist@example.test',username:'artist',enquiry:'submission',code:'12345678',setup_url:'https://studio.artanrecords.com/account/?flow=studio-access'}};}}}});
 });
 expect(await page.evaluate(()=>window.accessCalls)).toEqual([]);
 await page.getByRole('button',{name:'Generate setup code'}).click();
 await expect(page.locator('[name=recipient]')).toHaveValue('artist@example.test');await expect(page.locator('[name=recipient]')).toHaveAttribute('readonly','');
 await expect(page.locator('[name=body]')).toHaveValue(/Username: artist\nOne-time setup code: 12345678/);
 expect(await page.evaluate(()=>window.accessCalls)).toEqual([{name:'studio-access-email',args:{body:{envelope:'approved'}}}]);
 await expect(page.getByRole('button',{name:'Generate setup code'})).toBeHidden();
});
