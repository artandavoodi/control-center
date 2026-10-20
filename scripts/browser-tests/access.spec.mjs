import {test,expect} from '@playwright/test';
const id='98000000-0000-0000-0000-000000000001';
const user={id,email:'staff@example.test',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{}};
const token=[{alg:'HS256'},{sub:id,role:'authenticated',exp:Math.floor(Date.now()/1000)+3600},'test-only'].map(part=>Buffer.from(typeof part==='string'?part:JSON.stringify(part)).toString('base64url')).join('.');
async function backend(page,permissions){
 await page.route('https://hahtbepdrjkjluhespbs.supabase.co/**',async route=>{
  const path=new URL(route.request().url()).pathname;let body;
    if(path.endsWith('/token'))body={access_token:token,refresh_token:'test-only',expires_in:3600,token_type:'bearer',user};
  else if(path.endsWith('/verify'))body={access_token:token,refresh_token:'test-only',expires_in:3600,token_type:'bearer',user};
  else if(path.endsWith('/recover'))body={};
  else if(path.endsWith('/user'))body=user;
  else if(path.endsWith('/logout')){await route.fulfill({status:204});return;}
  else if(path.endsWith('/control_center_staff'))body=permissions?[{account_id:id,enabled:true,is_owner:false,permissions}]:[];
  else if(path.endsWith('/studio_artist_handles')||path.endsWith('/studio_artist_applications'))body=[];
  else throw Error('Unexpected endpoint '+path);
  await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(body)});
 });
}
test('an ordinary account does not enter the staff console',async({page})=>{
 await backend(page,null);await page.goto('/');await page.getByLabel('Email',{exact:true}).fill('staff@example.test');await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Password',{exact:true}).fill('not-a-real-password');await page.getByRole('button',{name:'Sign in',exact:true}).click();await expect(page.getByRole('status')).toContainText('no active staff access');await expect(page.getByRole('navigation',{name:'Operations'})).toHaveCount(0);
});
test('a scoped reviewer sees only permitted navigation',async({page})=>{
 await backend(page,['artists.read']);await page.goto('/');await page.getByLabel('Email',{exact:true}).fill('staff@example.test');await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Password',{exact:true}).fill('not-a-real-password');await page.getByRole('button',{name:'Sign in',exact:true}).click();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();await expect(page.getByRole('button',{name:'Staff & offices'})).toHaveCount(0);await expect(page.getByRole('button',{name:'Decision history'})).toHaveCount(0);await page.getByRole('button',{name:'Username reviews'}).click();await expect(page.getByText('No requests in this queue.')).toBeVisible();expect(await page.locator('body').evaluate(element=>element.scrollWidth<=window.innerWidth)).toBe(true);
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
