import {test,expect} from '@playwright/test';
import {build} from 'esbuild';
const bundle=await build({entryPoints:['assets/js/layers/control-center/operations/studio-access-email.js'],bundle:true,format:'esm',write:false,loader:{'.ttf':'binary','.css':'text'}});
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
