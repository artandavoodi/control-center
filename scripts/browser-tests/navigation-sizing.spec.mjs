import {test,expect} from '@playwright/test';

test('navigation startup survives delayed token CSS on authenticated reload',async({page})=>{
 const id='98000000-0000-0000-0000-000000000001',brand='98000000-0000-0000-0001-000000000001',user={id,email:'staff@example.test',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{}};
 const token=[{alg:'HS256'},{sub:id,role:'authenticated',exp:Math.floor(Date.now()/1000)+3600},'fixture'].map(part=>Buffer.from(typeof part==='string'?part:JSON.stringify(part)).toString('base64url')).join('.');
 await page.route('https://hahtbepdrjkjluhespbs.supabase.co/**',route=>{
  const path=new URL(route.request().url()).pathname;let body;
  if(path.endsWith('/token'))body={access_token:token,refresh_token:'fixture',expires_in:3600,token_type:'bearer',user};
  else if(path.endsWith('/user'))body=user;
  else if(path.endsWith('/control_center_staff'))body=[{account_id:id,enabled:true,is_owner:false,permissions:['artists.read']}];
  else if(path.endsWith('/control_center_effective_permissions'))body=['artists.read'];
  else if(path.endsWith('/control_center_workspaces'))body=[{id:brand,name:'Artanrecords',workspace_key:'artanrecords'}];
  else if(path.endsWith('/control_center_units'))body=[{id:brand,name:'Artanrecords',kind:'pillar',active:true}];
  else if(path.endsWith('/control_center_profiles'))body=[];
  else if(path.startsWith('/storage/v1/object/sign/'))return route.fulfill({status:400,json:{error:'not_found'}});
  else if(['/studio_artist_handles','/studio_artist_applications','/artan_artist_enquiries','/studio_payout_applications','/studio_release_submissions','/studio_account_change_requests','/studio_agreement_intake_requests','/studio_agreement_envelopes'].some(table=>path.endsWith(table)))body=[];
  else throw Error('Unexpected endpoint '+path);
  return route.fulfill({json:body});
 });
 await page.addInitScript(()=>{window.navigationMeasurements=[];const read=window.getComputedStyle;window.getComputedStyle=function(element,...args){const style=read.call(this,element,...args);if(element.style.width.startsWith('var(')&&element.style.position==='absolute')window.navigationMeasurements.push({token:element.style.width,width:style.width,connected:element.isConnected,ready:document.readyState});return style;};});
 await page.goto('/');await page.getByLabel('Email',{exact:true}).fill(user.email);await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Password',{exact:true}).fill('fixture');await page.getByRole('button',{name:'Sign in',exact:true}).click();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();
 await page.getByRole('button',{name:'Toggle navigation',exact:true}).click();await expect(page.locator('[data-rail]')).toHaveAttribute('data-rail','closed');
 let release;const gate=new Promise(resolve=>{release=resolve;});let requested;const pending=new Promise(resolve=>{requested=resolve;});
 await page.route('**/registry/tokens/manifests/control-center.tokens.css',async route=>{requested();await gate;await route.continue();});
 const reload=page.reload({waitUntil:'domcontentloaded'});await pending;
 try{await expect(page.getByText('Invalid navigation sizing tokens',{exact:true})).toHaveCount(0);}finally{release();}
 await reload;await expect(page.locator('[data-rail]')).toHaveAttribute('data-rail','closed');await expect(page.getByText('Invalid navigation sizing tokens',{exact:true})).toHaveCount(0);
 expect(await page.evaluate(()=>window.navigationMeasurements)).not.toEqual([]);
 for(const measurement of await page.evaluate(()=>window.navigationMeasurements)){expect(measurement.connected).toBe(true);expect(measurement.ready).toBe('complete');expect(Number.parseFloat(measurement.width),JSON.stringify(measurement)).toBeGreaterThan(0);}
});
