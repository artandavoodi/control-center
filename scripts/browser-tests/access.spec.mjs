import {test,expect} from '@playwright/test';
const id='98000000-0000-0000-0000-000000000001';
const user={id,email:'staff@example.test',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{}};
const token=[{alg:'HS256'},{sub:id,role:'authenticated',exp:Math.floor(Date.now()/1000)+3600},'test-only'].map(part=>Buffer.from(typeof part==='string'?part:JSON.stringify(part)).toString('base64url')).join('.');
const records='98000000-0000-0000-0001-000000000001',neuro='98000000-0000-0000-0001-000000000002';
async function backend(page,permissions,{owner=false}={}){
 await page.route('https://hahtbepdrjkjluhespbs.supabase.co/**',async route=>{
  const path=new URL(route.request().url()).pathname;let body;
    if(path.endsWith('/token'))body={access_token:token,refresh_token:'test-only',expires_in:3600,token_type:'bearer',user};
  else if(path.endsWith('/verify'))body={access_token:token,refresh_token:'test-only',expires_in:3600,token_type:'bearer',user};
  else if(path.endsWith('/recover'))body={};
  else if(path.endsWith('/user'))body=user;
  else if(path.endsWith('/logout')){await route.fulfill({status:204});return;}
  else if(path.endsWith('/control_center_staff'))body=permissions?[{account_id:id,enabled:true,is_owner:owner,display_name:'Test reviewer',permissions,manager_id:null,authority_level:'executive',unit_id:records}]:[];
  else if(path.endsWith('/control_center_effective_permissions'))body=permissions||[];
  else if(path.endsWith('/control_center_workspaces'))body=[{id:records,name:'Artanrecords',workspace_key:'artanrecords'},...(owner?[{id:neuro,name:'Neuroartan',workspace_key:'neuroartan'}]:[])];
  else if(path.endsWith('/control_center_profiles'))body=route.request().method()==='GET'?[]:{};
  else if(path.endsWith('/control_center_set_appearance'))body=null;
  else if(path.endsWith('/control_center_workspace_directory'))body=[{account_id:id,manager_id:null,display_name:'Test reviewer',authority_level:'executive',department:'Operations',office:'',is_owner:owner,enabled:true,unit_id:records}];
  else if(path.endsWith('/control_center_units'))body=[{id:records,parent_id:null,name:'Artanrecords',kind:'pillar',active:true,workspace_key:'artanrecords'},{id:neuro,parent_id:null,name:'Neuroartan',kind:'pillar',active:true,workspace_key:'neuroartan'}];
  else if(path.includes('/storage/v1/object/sign/')){await route.fulfill({status:400,contentType:'application/json',body:'{"error":"not_found"}'});return;}
  else if(path.endsWith('/studio_artist_handles')||path.endsWith('/studio_artist_applications'))body=[];
  else throw Error('Unexpected endpoint '+path);
  await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(body)});
 });
}
test('an ordinary account does not enter the staff console',async({page})=>{
 await backend(page,null);await page.goto('/');await page.getByLabel('Email',{exact:true}).fill('staff@example.test');await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Password',{exact:true}).fill('not-a-real-password');await page.getByRole('button',{name:'Sign in',exact:true}).click();await expect(page.getByRole('status')).toContainText('no active staff access');await expect(page.getByRole('navigation',{name:'Operations'})).toHaveCount(0);
});
test('a scoped reviewer sees only permitted navigation',async({page})=>{
 await backend(page,['artists.read']);await page.goto('/');await page.getByLabel('Email',{exact:true}).fill('staff@example.test');await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Password',{exact:true}).fill('not-a-real-password');await page.getByRole('button',{name:'Sign in',exact:true}).click();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();await expect(page.getByRole('button',{name:'Staff & offices'})).toHaveCount(0);await expect(page.getByRole('button',{name:'Decision history'})).toHaveCount(0);await page.getByLabel('Workspace function',{exact:true}).selectOption('reviews');await page.getByRole('button',{name:'Username reviews'}).click();await expect(page.getByText('No requests in this queue.')).toBeVisible();expect(await page.locator('body').evaluate(element=>element.scrollWidth<=window.innerWidth)).toBe(true);
});
test('password recovery keeps email responses neutral and uses the Control Center callback',async({page})=>{
 await backend(page,null);let request;
 await page.route('**/auth/v1/recover*',async route=>{request={url:route.request().url(),body:route.request().postDataJSON()};await route.fulfill({status:200,contentType:'application/json',body:'{}'});});
 await page.goto('/');await page.getByRole('button',{name:'Forgot password?'}).click();await page.getByLabel('Email',{exact:true}).fill('unknown@example.test');await page.getByRole('button',{name:'Send reset link',exact:true}).click();await expect(page.getByRole('status')).toContainText('If an account matches');expect(request.body.email).toBe('unknown@example.test');expect(decodeURIComponent(request.url)).toContain('/?flow=recovery');
});
test('verified recovery link is scrubbed and opens only the password form',async({page})=>{
 await backend(page,null);await page.goto('/?token_hash=test-only-recovery&type=recovery');await expect(page.getByRole('heading',{name:'Choose your password'})).toBeVisible();await expect(page).toHaveURL('http://127.0.0.1:8894/');await expect(page.getByRole('navigation',{name:'Operations'})).toHaveCount(0);
 await page.getByLabel('New password',{exact:true}).fill('Test-only-password-123');await page.getByLabel('Confirm password',{exact:true}).fill('Test-only-password-123');await page.getByRole('button',{name:'Save password'}).click();await expect(page.getByRole('status')).toContainText('Password updated');
});
test('email delivery failures do not claim that a reset was sent',async({page})=>{
 await backend(page,null);
 await page.route('**/auth/v1/recover*',route=>route.fulfill({status:429,contentType:'application/json',body:JSON.stringify({msg:'Rate limit',code:'over_email_send_rate_limit'})}));
 await page.goto('/');await page.getByRole('button',{name:'Forgot password?'}).click();await page.getByLabel('Email',{exact:true}).fill('staff@example.test');await page.getByRole('button',{name:'Send reset link',exact:true}).click();await expect(page.getByRole('status')).toContainText('could not be sent');await expect(page.getByRole('button',{name:'Send reset link',exact:true})).toBeEnabled();
});
async function enter(page,permissions,options){await backend(page,permissions,options);await page.goto('/');await page.getByLabel('Email',{exact:true}).fill('staff@example.test');await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Password',{exact:true}).fill('not-a-real-password');await page.getByRole('button',{name:'Sign in',exact:true}).click();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();}
test('brand selection filters reviews and retains the chosen function',async({page})=>{
 await enter(page,['artists.read','staff.manage'],{owner:true});await page.getByLabel('Workspace function',{exact:true}).selectOption('administration');await expect(page.getByRole('heading',{name:'Staff & offices',exact:true})).toBeVisible();await page.locator('[data-workspace]').selectOption(neuro);await expect(page.getByRole('heading',{name:'Staff & offices',exact:true})).toBeVisible();await expect(page.getByLabel('Workspace function',{exact:true}).locator('option[value=reviews]')).toHaveCount(0);await expect(page.getByText('Artanrecords Studio',{exact:true})).toHaveCount(0);
});
test('appearance and collapsed navigation survive a reload',async({page})=>{
 await enter(page,['artists.read']);await expect(page.getByRole('radio',{name:'Light',exact:true})).toHaveCount(0);await page.getByRole('button',{name:'Account menu',exact:true}).click();await page.getByRole('menuitem',{name:'Settings',exact:true}).click();await page.getByRole('radio',{name:'Light',exact:true}).check();await expect(page.locator('html')).toHaveAttribute('data-theme','light');await page.getByRole('button',{name:'Toggle navigation'}).click();await expect(page.locator('[data-rail]')).toHaveAttribute('data-rail','closed');await page.reload();await expect(page.locator('[data-rail]')).toHaveAttribute('data-rail','closed');await expect(page.locator('html')).toHaveAttribute('data-theme','light');await page.getByRole('button',{name:'Toggle navigation'}).click();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();
});
test('private account form saves names and does not expose editable assignments',async({page})=>{
 await enter(page,['artists.read']);await page.getByLabel('Workspace function',{exact:true}).selectOption('personal');await page.getByLabel('First name',{exact:true}).fill('Test');await page.getByLabel('Last name',{exact:true}).fill('Person');await page.getByLabel('Phone number',{exact:true}).fill('+1 202 555 0123');await page.getByRole('button',{name:'Save profile',exact:true}).click();await expect(page.locator('[data-profile-status]')).toHaveText('Profile saved.');await expect(page.getByRole('heading',{name:'Assigned responsibilities'})).toBeVisible();await expect(page.getByRole('textbox',{name:'Department',exact:true})).toHaveCount(0);
});
test('account menu supports Escape and Help keeps tracking opt-in',async({page})=>{
 await enter(page,['artists.read']);const trigger=page.getByRole('button',{name:'Account menu',exact:true});await trigger.click();await expect(trigger).toHaveAttribute('aria-expanded','true');await page.getByRole('menuitem',{name:'My account',exact:true}).press('Escape');await expect(trigger).toHaveAttribute('aria-expanded','false');await expect(trigger).toBeFocused();await trigger.click();await page.getByRole('menuitem',{name:'Help',exact:true}).click();await expect(page.getByRole('checkbox',{name:'Track my active time on this browser'})).not.toBeChecked();await expect(page.getByText('Version 0.1.0 · Development',{exact:true})).toBeVisible();await expect(page.getByRole('heading',{name:'Choose your workspace',exact:true})).toBeVisible();await page.getByRole('button',{name:'Next',exact:true}).click();await expect(page.getByRole('heading',{name:'Understand your organization',exact:true})).toBeVisible();
});
test('refresh shows only the canonical loader until account checks finish',async({page})=>{
 await enter(page,['artists.read']);let release;const gate=new Promise(resolve=>release=resolve);await page.route('**/auth/v1/user',async route=>{await gate;await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(user)});});await page.reload({waitUntil:'domcontentloaded'});await expect(page.getByRole('status',{name:'Loading Control Center',exact:true})).toBeVisible();await expect(page.getByRole('navigation',{name:'Operations'})).toHaveCount(0);expect(await page.locator('.control-center-boot').evaluate(element=>getComputedStyle(element).backgroundColor)).toBe('rgb(255, 255, 255)');release();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();
});
