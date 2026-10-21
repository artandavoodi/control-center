import {test,expect} from '@playwright/test';
const id='98000000-0000-0000-0000-000000000001';
const user={id,email:'staff@example.test',aud:'authenticated',role:'authenticated',app_metadata:{provider:'email'},user_metadata:{}};
const token=[{alg:'HS256'},{sub:id,role:'authenticated',exp:Math.floor(Date.now()/1000)+3600},'test-only'].map(part=>Buffer.from(typeof part==='string'?part:JSON.stringify(part)).toString('base64url')).join('.');
const records='98000000-0000-0000-0001-000000000001',neuro='98000000-0000-0000-0001-000000000002';
const department='98000000-0000-0000-0002-000000000001',office='98000000-0000-0000-0003-000000000001';
async function backend(page,permissions,{owner=false}={}){
 const documents=[],vacancies=[];
 await page.route('**/assets/data/control-center/registry-index.json*',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({tokens:[{id:'spacing-md',value:'1rem',source:'registry/tokens/manifests/runtime-tokens.json'}],icons:[{id:'core/actions/create/plus',path:'core/actions/create/plus.svg',source:'registry/icons/source/core/actions/create/plus.svg',hasArtwork:true}]})}));
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
  else if(path.endsWith('/control_center_units'))body=[{id:records,parent_id:null,name:'Artanrecords',kind:'pillar',active:true,workspace_key:'artanrecords'},{id:neuro,parent_id:null,name:'Neuroartan',kind:'pillar',active:true,workspace_key:'neuroartan'},{id:department,parent_id:records,name:'Communication',kind:'department',active:true},{id:office,parent_id:department,name:'Press',kind:'office',active:true}];
  else if(path.endsWith('/control_center_create_unit')||path.endsWith('/control_center_rename_unit'))body=office;
  else if(path.includes('/storage/v1/object/sign/')){await route.fulfill({status:400,contentType:'application/json',body:'{"error":"not_found"}'});return;}
  else if(path.endsWith('/studio_artist_handles')||path.endsWith('/studio_artist_applications'))body=[];
  else if(path.endsWith('/control_center_artist_audit')||path.endsWith('/control_center_assign_email'))body=[];
  else if(path.endsWith('/control_center_documents'))body=documents;
  else if(path.endsWith('/control_center_vacancies'))body=vacancies;
  else if(path.endsWith('/control_center_save_document')){const value=route.request().postDataJSON();const row={id:'93000000-0000-0000-0000-000000000001',unit_id:value.unit,title:value.document_title,body:value.document_body,classification:value.classification_name,tags:value.labels};documents.splice(0,documents.length,row);body=row.id;}
  else if(path.endsWith('/control_center_save_vacancy')){const value=route.request().postDataJSON();const row={id:'93000000-0000-0000-0000-000000000002',unit_id:value.unit,title:value.job_title,slug:value.job_slug,description:value.job_description,location:value.job_location,employment_type:value.job_type,application_url:value.apply_url,status:'draft',tags:value.labels};vacancies.splice(0,vacancies.length,row);body=row.id;}
  else throw Error('Unexpected endpoint '+path);
  await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(body)});
 });
}
async function chooseContext(page,{function:mode,brand,department,office}={}){
 await page.getByRole('button',{name:'Choose workspace',exact:true}).click();const dialog=page.getByRole('dialog',{name:'Choose workspace'});
 if(brand)await dialog.getByRole('combobox',{name:'Brand',exact:true}).selectOption(brand);
 if(mode)await dialog.getByRole('combobox',{name:'Workspace',exact:true}).selectOption(mode);
 if(department)await dialog.getByRole('combobox',{name:'Department',exact:true}).selectOption(department);
 if(office)await dialog.getByRole('combobox',{name:'Office',exact:true}).selectOption(office);
 await dialog.getByRole('button',{name:'Open workspace',exact:true}).click();
}
test('an ordinary account does not enter the staff console',async({page})=>{
 await backend(page,null);await page.goto('/');await page.getByLabel('Email',{exact:true}).fill('staff@example.test');await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Password',{exact:true}).fill('not-a-real-password');await page.getByRole('button',{name:'Sign in',exact:true}).click();await expect(page.getByRole('status')).toContainText('no active staff access');await expect(page.getByRole('navigation',{name:'Operations'})).toHaveCount(0);
});
test('a scoped reviewer sees only permitted navigation',async({page})=>{
 await backend(page,['artists.read']);await page.goto('/');await page.getByLabel('Email',{exact:true}).fill('staff@example.test');await page.getByRole('button',{name:'Continue',exact:true}).click();await page.getByLabel('Password',{exact:true}).fill('not-a-real-password');await page.getByRole('button',{name:'Sign in',exact:true}).click();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();await expect(page.getByRole('button',{name:'Staff & offices'})).toHaveCount(0);await expect(page.getByRole('button',{name:'Decision history'})).toHaveCount(0);await chooseContext(page,{function:'reviews'});await page.getByRole('button',{name:'Username reviews',exact:true}).click();await expect(page.getByText('No requests in this queue.')).toBeVisible();expect(await page.locator('body').evaluate(element=>element.scrollWidth<=window.innerWidth)).toBe(true);
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
 await enter(page,['artists.read','staff.manage'],{owner:true});await chooseContext(page,{function:'administration'});await expect(page.getByRole('heading',{name:'Staff & offices',exact:true})).toBeVisible();await chooseContext(page,{brand:neuro});await expect(page.getByRole('heading',{name:'Staff & offices',exact:true})).toBeVisible();await page.getByRole('button',{name:'Choose workspace',exact:true}).click();await expect(page.getByRole('dialog').getByRole('combobox',{name:'Workspace',exact:true}).locator('option[value=reviews]')).toHaveAttribute('disabled','');await page.getByRole('button',{name:'Close workspace picker'}).click();await expect(page.getByText('Artanrecords Studio',{exact:true})).toHaveCount(0);
});
test('appearance and collapsed navigation survive a reload',async({page})=>{
 await enter(page,['artists.read']);await expect(page.getByRole('radio',{name:'Light',exact:true})).toHaveCount(0);await page.getByRole('button',{name:'Account menu',exact:true}).click();await page.getByRole('menuitem',{name:'Settings',exact:true}).click();await page.getByRole('radio',{name:'Light',exact:true}).check();await expect(page.locator('html')).toHaveAttribute('data-theme','light');await page.getByRole('button',{name:'Toggle navigation'}).click();await expect(page.locator('[data-rail]')).toHaveAttribute('data-rail','closed');await page.reload();await expect(page.locator('[data-rail]')).toHaveAttribute('data-rail','closed');await expect(page.locator('html')).toHaveAttribute('data-theme','light');await page.getByRole('button',{name:'Toggle navigation'}).click();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();
});
test('private account form saves names and does not expose editable assignments',async({page})=>{
 await enter(page,['artists.read']);await page.getByRole('button',{name:'Account menu',exact:true}).click();await page.getByRole('menuitem',{name:'My account',exact:true}).click();await page.getByLabel('First name',{exact:true}).fill('Test');await page.getByLabel('Last name',{exact:true}).fill('Person');await page.getByLabel('Phone number',{exact:true}).fill('+1 202 555 0123');await page.getByRole('button',{name:'Save profile',exact:true}).click();await expect(page.locator('[data-profile-status]')).toHaveText('Profile saved.');await expect(page.getByRole('heading',{name:'Assigned responsibilities'})).toBeVisible();await expect(page.getByRole('textbox',{name:'Department',exact:true})).toHaveCount(0);
});
test('account menu supports Escape and Help keeps tracking opt-in',async({page})=>{
 await enter(page,['artists.read']);const trigger=page.getByRole('button',{name:'Account menu',exact:true});await trigger.click();await expect(trigger).toHaveAttribute('aria-expanded','true');await page.getByRole('menuitem',{name:'My account',exact:true}).press('Escape');await expect(trigger).toHaveAttribute('aria-expanded','false');await expect(trigger).toBeFocused();await trigger.click();await page.getByRole('menuitem',{name:'Help',exact:true}).click();await expect(page.getByRole('checkbox',{name:'Track my active time on this browser'})).not.toBeChecked();await expect(page.getByText('Version 0.1.0 · Development',{exact:true})).toBeVisible();await expect(page.getByRole('heading',{name:'Choose your workspace',exact:true})).toBeVisible();await page.getByRole('button',{name:'Next',exact:true}).click();await expect(page.getByRole('heading',{name:'Understand your organization',exact:true})).toBeVisible();
});
test('refresh shows only the canonical loader until account checks finish',async({page})=>{
 await enter(page,['artists.read']);let release;const gate=new Promise(resolve=>release=resolve);await page.route('**/auth/v1/user',async route=>{await gate;await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(user)});});await page.reload({waitUntil:'domcontentloaded'});await expect(page.getByRole('status',{name:'Loading Control Center',exact:true})).toBeVisible();await expect(page.getByRole('navigation',{name:'Operations'})).toHaveCount(0);expect(await page.locator('.control-center-boot').evaluate(element=>getComputedStyle(element).backgroundColor)).toBe('rgb(255, 255, 255)');release();await expect(page.getByRole('navigation',{name:'Operations'})).toBeVisible();
});
test('workspace picker cascades department and office and remembers the scope',async({page})=>{
 await enter(page,['artists.read'],{owner:true});await chooseContext(page,{department,office});await page.getByRole('button',{name:'Choose workspace',exact:true}).click();await expect(page.getByRole('dialog').getByRole('combobox',{name:'Office',exact:true})).toHaveValue(office);await page.getByRole('dialog').getByRole('combobox',{name:'Brand',exact:true}).selectOption(neuro);await expect(page.getByRole('dialog').getByRole('combobox',{name:'Department',exact:true})).toHaveValue('');await expect(page.getByRole('dialog').getByRole('combobox',{name:'Office',exact:true})).toBeDisabled();await page.getByRole('dialog').press('Escape');await expect(page.getByRole('button',{name:'Choose workspace',exact:true})).toBeFocused();await page.reload();await page.getByRole('button',{name:'Choose workspace',exact:true}).click();await expect(page.getByRole('dialog').getByRole('combobox',{name:'Office',exact:true})).toHaveValue(office);await expect(page.getByRole('dialog').getByRole('combobox',{name:'Workspace',exact:true}).locator('option[value=personal]')).toHaveCount(0);expect(await page.locator('body').evaluate(el=>el.scrollWidth<=innerWidth)).toBe(true);
});
test('collapsed rail keeps operable registered icons and review totals open queues',async({page})=>{
 await enter(page,['artists.read']);await page.getByRole('button',{name:'Toggle navigation'}).click();const nav=page.getByRole('navigation',{name:'Operations',exact:true});await expect(nav.getByRole('button',{name:'Organization',exact:true})).toBeVisible();await expect(nav.getByRole('button',{name:'Organization',exact:true}).locator('img')).toBeVisible();await page.getByRole('button',{name:'Pending usernames 0',exact:true}).click();await expect(page.getByRole('heading',{name:'Username reviews',exact:true})).toBeVisible();await expect(page.getByText('No requests in this queue.')).toBeVisible();
});
test('organization actions expose permissions only for authorized managers',async({page})=>{
 await enter(page,['staff.manage','departments.manage','offices.manage'],{owner:true});await page.getByRole('button',{name:'Organization',exact:true}).click();await page.getByRole('button',{name:'Add staff member',exact:true}).click();await expect(page.getByRole('group',{name:'Permissions',exact:true})).toBeVisible();await page.getByRole('button',{name:'Add office',exact:true}).click();await expect(page.locator('[data-unit-create] [name=kind]')).toHaveValue('office');await expect(page.locator('[data-unit-create] [name=parent] option')).toHaveCount(1);await expect(page.locator('[data-unit-create] [name=parent]')).toHaveValue(department);expect(await page.locator('[data-unit-create] select').first().evaluate(el=>getComputedStyle(el).appearance)).toBe('none');
});
test('review-only staff cannot open management actions',async({page})=>{
 await enter(page,['artists.read']);await page.getByRole('button',{name:'Organization',exact:true}).click();await expect(page.getByRole('heading',{name:'Reporting structure',exact:true})).toBeVisible();await expect(page.getByRole('navigation',{name:'Organization management',exact:true})).toHaveCount(0);await expect(page.getByRole('button',{name:'Add staff member',exact:true})).toHaveCount(0);
});
test('development feed deduplicates commit identities and reports protected sources',async({page})=>{
 await page.route('https://api.github.com/repos/**',async route=>{const url=new URL(route.request().url());if(url.pathname.includes('/artanrecords/')){await route.fulfill({status:404,body:'{}'});return;}const commit={sha:'a'.repeat(40),commit:{message:'[website/test] sample change',committer:{date:'2026-10-21T00:00:00Z'}}};await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify([commit,commit])});});await enter(page,['artists.read']);await page.getByRole('button',{name:'Development history',exact:true}).click();await expect(page.getByText('artanrecords: Private or unavailable — connector required.',{exact:true})).toBeVisible();await expect(page.locator('[data-commit="control-center:'+ 'a'.repeat(40)+'"]')).toHaveCount(1);await page.getByRole('button',{name:'Load more changes'}).click();await expect(page.locator('[data-commit="control-center:'+ 'a'.repeat(40)+'"]')).toHaveCount(1);
});
for(const mode of ['light','dark'])test(`refresh loader uses saved ${mode} appearance before staff access resolves`,async({page})=>{
 await page.addInitScript(value=>localStorage.setItem('control-center.appearance',value),mode);await enter(page,['artists.read']);let release;const gate=new Promise(resolve=>release=resolve);await page.route('**/auth/v1/user',async route=>{await gate;await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify(user)});});await page.reload({waitUntil:'domcontentloaded'});await expect(page.getByRole('status',{name:'Loading Control Center',exact:true})).toBeVisible();await expect(page.locator('html')).toHaveAttribute('data-theme',mode);expect(await page.locator('.control-center-boot').evaluate(el=>getComputedStyle(el).backgroundColor)).toBe(mode==='dark'?'rgb(0, 0, 0)':'rgb(255, 255, 255)');expect(await page.locator('.ui-loader-circle').evaluate(el=>getComputedStyle(el).getPropertyValue('--loader-circle-color').trim())).toBe(mode==='dark'?'#ffffff':'#000000');release();await expect(page.getByRole('navigation',{name:'Operations',exact:true})).toBeVisible();
});
test('header search focuses immediately, filters permitted records and restores focus',async({page})=>{
 await enter(page,['artists.read']);await page.getByRole('button',{name:'Search workspace',exact:true}).click();const dialog=page.getByRole('dialog',{name:'Search your workspace',exact:true});const input=dialog.getByRole('searchbox',{name:'Search workspace',exact:true});await expect(input).toBeFocused();await input.fill('Communication');await expect(dialog.locator('[data-search-results]').getByRole('button',{name:'Communication department',exact:true})).toBeVisible();await input.fill('Staff & offices');await expect(dialog.locator('[data-search-results]').getByRole('button')).toHaveCount(0);await input.fill('My account');await dialog.locator('[data-search-results]').getByRole('button').click();await expect(page.getByRole('heading',{name:'My account',exact:true})).toBeVisible();await page.getByRole('button',{name:'Search workspace',exact:true}).click();await page.getByRole('button',{name:'Close search',exact:true}).click();await expect(page.getByRole('button',{name:'Search workspace',exact:true})).toBeFocused();expect(await page.locator('body').evaluate(el=>el.scrollWidth<=innerWidth)).toBe(true);await expect(page.locator('.control-center-header-wordmark')).toHaveAttribute('alt','Artanrecords');
});
test('staff assignment cascades brand access and sends the selected office as its scope',async({page})=>{
 await enter(page,['staff.manage','departments.manage','offices.manage'],{owner:true});let saved;await page.route('**/rest/v1/rpc/control_center_assign_email',async route=>{saved=route.request().postDataJSON();await route.fulfill({status:200,contentType:'application/json',body:'null'});});await page.getByRole('button',{name:'Organization',exact:true}).click();await page.getByRole('button',{name:'Add staff member',exact:true}).click();const form=page.locator('[data-staff-assignment]');await expect(form.getByRole('combobox',{name:'Brand access',exact:true})).toHaveValue(records);await form.getByRole('combobox',{name:'Department',exact:true}).selectOption(department);await form.getByRole('combobox',{name:'Office',exact:true}).selectOption(office);await form.getByRole('textbox',{name:'Account email',exact:true}).fill('lawyer@example.test');await form.getByRole('textbox',{name:'Directory name',exact:true}).fill('Test lawyer');await expect(form.getByRole('button',{name:'Save assignment',exact:true})).toBeEnabled();page.once('dialog',dialog=>dialog.accept());await form.getByRole('button',{name:'Save assignment',exact:true}).click();await expect.poll(()=>saved?.unit).toBe(office);expect(saved.scopes).toEqual([]);await page.getByRole('button',{name:'Add staff member',exact:true}).click();await form.getByRole('combobox',{name:'Brand access',exact:true}).selectOption(neuro);await expect(form.getByRole('combobox',{name:'Department',exact:true})).toHaveValue('');await expect(form.getByRole('combobox',{name:'Office',exact:true})).toBeDisabled();
});
test('search functions open staff creation and tokens resolve to their canonical registry',async({page})=>{
 await enter(page,['staff.manage']);await page.getByRole('button',{name:'Search workspace',exact:true}).click();const dialog=page.getByRole('dialog',{name:'Search your workspace',exact:true});await dialog.getByRole('searchbox').fill('Add staff');await dialog.getByRole('button',{name:'Functions',exact:true}).click();await dialog.locator('[data-search-results]').getByRole('button',{name:'Add staff member Open function',exact:true}).click();await expect(page.locator('[data-staff-editor]')).toBeVisible();await expect(page.getByRole('textbox',{name:'Account email',exact:true})).toBeFocused();await page.getByRole('button',{name:'Search workspace',exact:true}).click();await page.getByRole('dialog').getByRole('searchbox').fill('token');await page.getByRole('dialog').getByRole('button',{name:'Design tokens Open function',exact:true}).click();await expect(page.getByRole('heading',{name:'Tokens & icons',exact:true})).toBeVisible();await expect(page.getByText('token:--spacing-md',{exact:true})).toBeVisible();
});
test('global design categories preserve IDs and copy through the registered action',async({page})=>{
 await enter(page,['artists.read']);await chooseContext(page,{function:'design',brand:'all'});
 await expect(page.locator('.control-center-header-brand')).toHaveText('All brands');
 await expect(page.getByRole('button',{name:'Colors',exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Icons',exact:true}).click();
 await expect(page.getByText('Vector available',{exact:true})).toBeVisible();
 await page.getByRole('combobox',{name:'Artwork status',exact:true}).selectOption('needed');
 await expect(page.locator('.control-center-registry-item')).toHaveCount(0);
 await page.getByRole('combobox',{name:'Artwork status',exact:true}).selectOption('available');
 await expect(page.getByText('Vector available',{exact:true})).toBeVisible();
 await expect(page.getByText('icon:core/actions/create/plus',{exact:true})).toBeVisible();
 await page.evaluate(()=>{Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async value=>{window.copiedReference=value;}}});});
 await page.getByRole('button',{name:'Copy ID',exact:true}).click();
 await expect.poll(()=>page.evaluate(()=>window.copiedReference)).toBe('icon:core/actions/create/plus');
 await page.getByRole('button',{name:'Choose workspace',exact:true}).click();
 const close=page.getByRole('button',{name:'Close workspace picker',exact:true});
 expect(await close.evaluate(el=>getComputedStyle(el).borderTopWidth)).toBe('0px');
});
test('brand selection restores its wordmark and positions prepare unsaved vacancy forms',async({page})=>{
 await enter(page,['artists.read','jobs.read','jobs.write'],{owner:true});
 await chooseContext(page,{function:'design',brand:'all'});
 await expect(page.locator('.control-center-header-brand')).toHaveText('All brands');
 await chooseContext(page,{function:'operations',brand:neuro});
 await expect(page.locator('.control-center-header-wordmark')).toHaveAttribute('alt','Neuroartan');
 await page.getByRole('button',{name:'Organization',exact:true}).click();
 await expect(page.getByRole('heading',{name:'Positions & reporting plan',exact:true})).toBeVisible();
 const chart=page.getByRole('region',{name:'Position reporting chart',exact:true});
 const branch=chart.locator('[data-tree-branch]').first();
 await branch.click();await expect(branch).toHaveAttribute('aria-expanded','false');
 await expect(chart.locator('.control-center-org-tree > li > ol')).toBeHidden();
 await branch.click();await expect(branch).toHaveAttribute('aria-expanded','true');
 const plan=page.locator('section').filter({has:page.getByRole('heading',{name:'Positions & reporting plan',exact:true})}).last();
 await plan.getByText('Role details',{exact:true}).first().click();
 await plan.getByRole('button',{name:'Prepare vacancy draft',exact:true}).first().click();
 await expect(page.locator('[data-vacancy-editor]')).toBeVisible();
 await expect(page.getByRole('textbox',{name:'Job title',exact:true})).not.toHaveValue('');
 await expect(page.getByText(/Nothing has been saved or published/)).toBeVisible();
});
test('registered component previews expose stable IDs and functional selection controls',async({page})=>{
 await enter(page,['artists.read']);
 await page.route('**/assets/data/control-center/registry-index.json*',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({tokens:[],icons:[],components:[{id:'field/password',title:'Password field',preview:'password',category:'fields',source:'auth.js',tags:['password'],tokens:['field-border']},{id:'selection/toggle',title:'Toggle switch',preview:'toggle',category:'selection',source:'toggle.css',tags:['switch'],tokens:[]}]})}));
 await chooseContext(page,{function:'design',brand:'all'});
 await page.getByRole('button',{name:'Fields',exact:true}).click();
 await expect(page.getByLabel('Password field preview',{exact:true})).toHaveAttribute('type','password');
 await expect(page.getByText('component:field/password',{exact:true})).toBeVisible();
 await page.getByText('Related tokens',{exact:true}).click();
 await expect(page.getByText('token:--field-border',{exact:true})).toBeVisible();
 await page.getByRole('button',{name:'Selection controls',exact:true}).click();
 const toggle=page.getByRole('switch',{name:'Preview toggle switch',exact:true});
 await expect(toggle).toHaveAttribute('aria-checked','false');await toggle.click();await expect(toggle).toHaveAttribute('aria-checked','true');
});
test('chart zoom simplifies details and keeps the signed-in staff assignment identifiable',async({page})=>{
 await enter(page,['artists.read'],{owner:true});await page.getByRole('button',{name:'Organization',exact:true}).click();
 const chart=page.getByRole('region',{name:'Staff reporting chart',exact:true}),tools=page.getByRole('group',{name:'Staff reporting chart controls',exact:true});
 await expect(chart.locator('[aria-current=true] .control-center-tree-you')).toHaveText('You');
 await tools.getByRole('button',{name:'Zoom out Staff reporting chart',exact:true}).click();
 await tools.getByRole('button',{name:'Zoom out Staff reporting chart',exact:true}).click();
 await expect(tools.locator('output')).toHaveText('70%');
 await expect(chart.locator('.control-center-org-tree')).toHaveAttribute('data-density','compact');
 await expect(chart.locator('[aria-current=true] .control-center-tree-you')).toBeVisible();
 await tools.getByRole('button',{name:'Find me',exact:true}).click();
 await tools.getByRole('button',{name:'Reset view',exact:true}).click();
 await expect(tools.locator('output')).toHaveText('100%');
});
test('color swatches have a theme outline and motion close previews remain borderless',async({page})=>{
 await enter(page,['artists.read']);
 await page.route('**/assets/data/control-center/registry-index.json*',route=>route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({tokens:[{id:'color-primary1',value:'#917c6f',category:'color',source:'registry/tokens/manifests/runtime-tokens.json'}],icons:[],motions:[{id:'close-control',description:'Close',source:'shared/close-button.css',category:'interaction'}]})}));
 await chooseContext(page,{function:'design',brand:'all'});
 await page.getByRole('button',{name:'Colors',exact:true}).click();
 const swatch=page.locator('.control-center-color-preview');
 expect(await swatch.evaluate(el=>parseFloat(getComputedStyle(el).borderTopWidth))).toBeGreaterThan(0);
 await page.getByRole('button',{name:'Motion & interaction',exact:true}).click();
 const close=page.getByRole('button',{name:'Preview close interaction',exact:true});
 expect(await close.evaluate(el=>getComputedStyle(el).borderTopWidth)).toBe('0px');
 await expect(close.locator('.global-close-button__line')).toHaveCount(2);
});
test('private documents save classifications and tags and are found by tag search',async({page})=>{
 await enter(page,['documents.read','documents.write','documents.confidential']);await page.getByRole('button',{name:'Documents & tags',exact:true}).click();await page.getByRole('button',{name:'Register document',exact:true}).click();const form=page.locator('[data-document-editor] form');await form.getByRole('textbox',{name:'Title',exact:true}).fill('Test legal record');await form.getByRole('combobox',{name:'Classification',exact:true}).selectOption('confidential');await form.getByRole('textbox',{name:'Tags, separated by commas',exact:true}).fill('legal, review, legal');await form.getByRole('textbox',{name:'Document text',exact:true}).fill('Private test text <script>not executed</script>');await form.getByRole('button',{name:'Save document',exact:true}).click();await expect(page.getByRole('heading',{name:'Test legal record',exact:true})).toBeVisible();await page.getByRole('button',{name:'Search workspace',exact:true}).click();await page.getByRole('dialog').getByRole('searchbox').fill('#legal');await expect(page.getByRole('dialog').getByRole('button',{name:'Test legal record confidential · legal · review',exact:true})).toBeVisible();expect(await page.locator('body').evaluate(el=>el.querySelectorAll('script:not([src])').length)).toBe(0);
});
test('vacancies stay draft and publication is absent without its separate permission',async({page})=>{
 await enter(page,['jobs.read','jobs.write']);await page.getByRole('button',{name:'Job vacancies',exact:true}).click();await page.getByRole('button',{name:'Create vacancy draft',exact:true}).click();const form=page.locator('[data-vacancy-editor] form');await form.getByRole('textbox',{name:'Job title',exact:true}).fill('Test counsel');await form.getByRole('textbox',{name:'Public address slug',exact:true}).fill('test-counsel');await form.getByRole('textbox',{name:'Location',exact:true}).fill('Remote');await form.getByRole('textbox',{name:'Description',exact:true}).fill('Synthetic test role. '.repeat(10));await form.getByRole('button',{name:'Save draft',exact:true}).click();await expect(page.getByRole('heading',{name:'Test counsel',exact:true})).toBeVisible();await expect(page.getByText('draft · Remote · contract',{exact:true})).toBeVisible();await expect(page.getByRole('button',{name:'Publish vacancy',exact:true})).toHaveCount(0);
});
test('shared close primitive and local Neuroartan wordmark render without redundant chrome',async({page})=>{
 await enter(page,['artists.read'],{owner:true});await chooseContext(page,{brand:neuro});const logo=page.locator('.control-center-header-wordmark');await expect(logo).toHaveAttribute('src',/\/registry\/icons\/public\/assets\/core\/identity\/brand\/neuroartan\/logo-typo\.svg\?v=/);await expect.poll(()=>logo.evaluate(el=>el.complete&&el.naturalWidth>0)).toBe(true);await expect(page.locator('.control-center-app-mark')).toHaveCount(0);await page.getByRole('button',{name:'Choose workspace',exact:true}).click();const close=page.getByRole('button',{name:'Close workspace picker',exact:true});await expect(close).toHaveClass(/global-close-button/);await expect(close.locator('.global-close-button__line')).toHaveCount(2);expect(await close.evaluate(el=>parseFloat(getComputedStyle(el).width))).toBeCloseTo(38.4,0);expect(await page.locator('.control-center-operations main').evaluate(el=>getComputedStyle(el).scrollbarWidth)).toBe('none');
});
