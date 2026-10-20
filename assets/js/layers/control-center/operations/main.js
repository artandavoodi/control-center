import {createClient} from '@supabase/supabase-js';
import config from '../../../../data/control-center/operations.json';
import {hasPermission,permittedNavigation,validateStaffAssignment} from './access.js';
import {createAccess} from './auth.js';
const root=document.querySelector('[data-control-center-root]');
if(location.protocol!=='https:'&&!['127.0.0.1','localhost'].includes(location.hostname)){
 root.textContent='Secure HTTPS access is required. Please return when the domain certificate is ready.';
 throw Error('Staff access requires HTTPS');
}
const client=createClient(config.supabase.url,config.supabase.key,{auth:{storage:sessionStorage,storageKey:'control-center-staff',flowType:'pkce',detectSessionInUrl:false}});
const e=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const icon=path=>`<img class="control-center-operation-icon" src="/registry/icons/public/assets/${e(path)}" alt="">`;
let staff=null,user=null,panel='overview',revision=0,recovering=false;
const access=createAccess({client,root,config,e,onAuthenticated:loadAccess,onReset:()=>{recovering=true;staff=null;user=null;}});
function signin(message=''){staff=null;user=null;recovering=false;access.signin(message);}
async function loadAccess(){
 if(recovering)return;
 const identity=await client.auth.getUser();if(identity.error||!identity.data.user){signin();return;}
 user=identity.data.user;const response=await client.from('control_center_staff').select('account_id,permissions,enabled,is_owner,display_name,department,office').eq('account_id',user.id).maybeSingle();
 if(response.error)throw Error('Staff access could not be verified. Please try again.');
 staff=response.data;if(!staff?.enabled){await client.auth.signOut({scope:'local'});signin('This account has no active staff access. Ask the owner to assign permissions.');return;}await render();
}
async function render(){
 const turn=++revision;const nav=permittedNavigation(config,staff);if(!nav.some(item=>item.id===panel))panel='overview';
 root.innerHTML=`<div class="control-center-operations"><aside><header><h1>${e(config.title)}</h1><p>${e(staff.is_owner?'Owner workspace':staff.display_name||'Staff workspace')}</p></header><nav aria-label="Operations">${nav.map(item=>`<button type="button" data-panel="${e(item.id)}" aria-current="${item.id===panel?'page':'false'}">${icon(item.icon)}${e(item.label)}</button>`).join('')}</nav><button type="button" data-signout>Sign out</button></aside><main><header><h2>${e(nav.find(item=>item.id===panel)?.label)}</h2><p>${e(config.description)}</p></header><p role="status" data-operation-status>Loading...</p><div data-operation-content></div></main></div>`;
 const navigation=root.querySelector('nav');
 const search=document.createElement('search');
 search.innerHTML='<label>Find a workspace<input type="search" aria-label="Find a workspace" placeholder="Search navigation" autocomplete="off"></label><p role="status" data-search-status></p>';
 navigation.before(search);
 search.querySelector('input').addEventListener('input',event=>{
  const query=event.target.value.trim().toLocaleLowerCase();let count=0;
  navigation.querySelectorAll('[data-panel]').forEach(button=>{button.hidden=!button.textContent.toLocaleLowerCase().includes(query);if(!button.hidden)count++;});
  search.querySelector('[data-search-status]').textContent=count?'':'No matching workspaces.';
 });
 root.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>{panel=button.dataset.panel;render().catch(showError);}));root.querySelector('[data-signout]').addEventListener('click',async()=>{++revision;root.replaceChildren();await client.auth.signOut({scope:'local'});signin();});
 const content=root.querySelector('[data-operation-content]');
 try{
  if(panel==='overview'){
   content.innerHTML=`<div class="control-center-operation-grid">${config.services.map(service=>`<section><h3>${e(service.name)}</h3><p>${e(service.state)}</p><p>${e(service.detail)}</p><a href="${e(service.url)}" target="_blank" rel="noopener">Open service</a></section>`).join('')}</div><p>Application approval is an operational decision, not a signed agreement or financial entitlement.</p>`;
   if(hasPermission(staff,'artists.read')){const [handles,applications]=await Promise.all([client.from('studio_artist_handles').select('account_id',{count:'exact',head:true}).eq('status','pending'),client.from('studio_artist_applications').select('account_id',{count:'exact',head:true}).eq('status','pending')]);if(handles.error||applications.error)throw Error('Review totals could not be loaded.');if(turn!==revision)return;const totals=document.createElement('p');totals.textContent=`Pending usernames: ${handles.count}. Pending artist applications: ${applications.count}.`;content.prepend(totals);}
  }else if(panel==='profile'){
   content.innerHTML=`<section class="control-center-review"><h3>Account and security</h3><p>${e(user.email)}</p><p>${e(user.email_confirmed_at?'Email verified':'Email verification required')}</p><p>${e(staff.department)}${staff.office?' · '+e(staff.office):''}</p><p>Your password is shared with Artan Store and Artanrecords Studio. Changing it does not change your assigned permissions.</p><button type="button" data-profile-reset>Send password reset link</button></section>`;
   content.querySelector('[data-profile-reset]').addEventListener('click',()=>access.recover(user.email));
  }else if(panel==='usernames'||panel==='applications'){
   const handles=panel==='usernames';const response=await client.from(handles?'studio_artist_handles':'studio_artist_applications').select(handles?'account_id,requested_username,approved_username,status,notice,updated_at':'account_id,requested_tier,approved_tier,status,artist_note,decision_note,updated_at').order('updated_at',{ascending:true}).limit(100);if(response.error)throw Error('The review queue could not be loaded.');if(turn!==revision)return;
   content.innerHTML=response.data.length?response.data.map(row=>`<article class="control-center-review"><h3>${e(handles?row.requested_username:row.requested_tier+' requested')}</h3><p>${e(row.account_id)}</p><p>Status: ${e(row.status)}${row.approved_tier?' · Approved tier: '+e(row.approved_tier):''}</p><p>${e(handles?row.notice:row.artist_note)}</p>${row.status==='pending'&&hasPermission(staff,handles?'usernames.review':'tiers.review')?`<form data-review="${e(row.account_id)}">${!handles?`<label>Approved tier<select name="tier">${config.tiers.map(tier=>`<option>${e(tier)}</option>`).join('')}</select></label>`:''}<label>Decision note<textarea name="note" maxlength="${handles?500:2000}" required></textarea></label><button type="submit" name="decision" value="approve">Approve</button><button type="submit" name="decision" value="reject">Decline</button></form>`:''}</article>`).join(''):'<p>No requests in this queue.</p>';
   content.querySelectorAll('[data-review]').forEach(form=>form.addEventListener('submit',async event=>{event.preventDefault();const approve=event.submitter?.value==='approve';if(!window.confirm(approve?'Confirm this approval? The decision will be recorded.':'Confirm this decline? The decision will be recorded.'))return;form.inert=true;const args=handles?{artist:form.dataset.review,approve,message:form.elements.note.value}:{artist:form.dataset.review,tier:form.elements.tier.value,approve,note:form.elements.note.value};const result=await client.rpc(handles?'studio_review_username':'control_center_review_tier',args);if(result.error){form.inert=false;showError(Error('The decision was not saved. Your permissions or the request may have changed.'));return;}await render();}));
  }else if(panel==='audit'){
   const response=await client.from('control_center_artist_audit').select('id,actor_id,artist_id,action,details,created_at').order('created_at',{ascending:false}).limit(100);if(response.error)throw Error('Decision history could not be loaded.');if(turn!==revision)return;content.innerHTML=response.data.length?response.data.map(row=>`<article class="control-center-review"><h3>${e(row.action)}</h3><p>${e(row.created_at)} · ${e(row.actor_id)}</p><pre>${e(JSON.stringify(row.details,null,2))}</pre></article>`).join(''):'<p>No decisions recorded yet.</p>';
  }else if(panel==='staff'){
   const response=await client.from('control_center_staff').select('account_id,display_name,department,office,enabled,is_owner,permissions');if(response.error)throw Error('Staff directory could not be loaded.');if(turn!==revision)return;
   content.innerHTML=`<p>Assign existing verified accounts only. Account invitations and new-user provisioning are not connected. Office assignments describe responsibility; explicit permissions control access.</p>${response.data.map(row=>`<article class="control-center-review"><h3>${e(row.display_name||row.account_id)}</h3><p>${e(row.is_owner?'Owner':row.enabled?'Active':'Disabled')} · ${e(row.department)} · ${e(row.office)}</p><p>${e(row.permissions.join(', '))}</p><p>${e(row.account_id)}</p></article>`).join('')}<h3>Assign or update staff</h3><form data-staff-assignment><label>Existing account ID<input name="target" required autocomplete="off"></label><label>Display name<input name="label" maxlength="100"></label><label>Department<input name="department" maxlength="200"></label><label>Office<input name="office" maxlength="200"></label>${config.permissions.filter(scope=>scope.id!=='staff.manage'||staff.is_owner).map(scope=>`<label class="control-center-operation-check"><input type="checkbox" name="scopes" value="${e(scope.id)}">${e(scope.label)}</label>`).join('')}<label class="control-center-operation-check"><input type="checkbox" name="enabled" checked>Active access</label><button type="submit">Save staff assignment</button></form>`;
   content.querySelector('form').addEventListener('submit',async event=>{event.preventDefault();const form=event.currentTarget;try{const value=validateStaffAssignment({target:form.elements.target.value.trim(),scopes:[...form.querySelectorAll('[name=scopes]:checked')].map(input=>input.value)},config);if(!window.confirm('Confirm these staff permissions for this existing account? This security change will be recorded.'))return;form.inert=true;const result=await client.rpc('control_center_assign_staff',{target:value.target,scopes:value.scopes,active:form.elements.enabled.checked,label:form.elements.label.value,department_name:form.elements.department.value,office_name:form.elements.office.value});if(result.error)throw Error('Staff access was not changed. Check the account ID and your permissions.');await render();}catch(error){form.inert=false;showError(error);}});
  }
  if(turn===revision)root.querySelector('[data-operation-status]').textContent='';
 }catch(error){if(turn===revision)showError(error);}
}
function showError(error){const status=root.querySelector('[data-operation-status]');if(status)status.textContent=error.message;}
client.auth.onAuthStateChange(event=>{if(event==='SIGNED_OUT'){++revision;signin();}});
root.innerHTML='<section class="control-center-access"><p role="status">Checking staff access...</p></section>';
access.consumeCallback(new URL(location.href)).then(consumed=>{if(!consumed)return loadAccess();}).catch(error=>signin(error.message));
