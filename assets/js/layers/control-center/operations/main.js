import {createClient} from '@supabase/supabase-js';
import config from '../../../../data/control-center/operations.json';
import {hasPermission,permittedNavigation} from './access.js';
import {createAccess} from './auth.js';
import {mountProfile} from './profile.js';
import {mountOrganization} from './organization.js';
import {mountWorkspace,readWorkspacePreference} from './workspace.js';
import {setTheme} from './theme.js';
import {mountSettings} from './settings.js';
import {mountHelp} from './help.js';
import {startUsage,stopUsage} from './usage.js';
import {showLoading,finishLoading} from './loading.js';
const root=document.querySelector('[data-control-center-root]');
if(location.protocol!=='https:'&&!['127.0.0.1','localhost'].includes(location.hostname)){
 root.textContent='Secure HTTPS access is required. Please return when the domain certificate is ready.';
 throw Error('Staff access requires HTTPS');
}
const client=createClient(config.supabase.url,config.supabase.key,{auth:{storage:sessionStorage,storageKey:'control-center-staff',flowType:'pkce',detectSessionInUrl:false}});
const e=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const icon=path=>`<img class="control-center-operation-icon" src="/registry/icons/public/assets/${e(path)}" alt="">`;
let staff=null,user=null,panel='overview',revision=0,recovering=false,workspaces=[],workspace=null;
const access=createAccess({client,root,config,e,onAuthenticated:loadAccess,onReset:()=>{finishLoading();recovering=true;staff=null;user=null;}});
function signin(message=''){finishLoading();stopUsage();staff=null;user=null;recovering=false;access.signin(message);}
async function loadAccess(){
 if(recovering)return;
 const identity=await client.auth.getUser();if(identity.error||!identity.data.user){signin();return;}
 user=identity.data.user;const response=await client.from('control_center_staff').select('account_id,permissions,enabled,is_owner,display_name,department,office,manager_id,authority_level,unit_id').eq('account_id',user.id).maybeSingle();
 if(response.error)throw Error('Staff access could not be verified. Please try again.');
 staff=response.data;if(!staff?.enabled){await client.auth.signOut({scope:'local'});signin('This account has no active staff access. Ask the owner to assign permissions.');return;}
 const effective=await client.rpc('control_center_effective_permissions');if(effective.error)throw Error('Staff permissions could not be verified.');staff.permissions=effective.data||[];
 startUsage(user.id);
 const registry=await client.rpc('control_center_workspaces');if(registry.error)throw Error('Your workspaces could not be verified.');workspaces=registry.data||[];
 if(!workspaces.length)throw Error('No workspace is assigned to this staff account. Ask your authorized manager to assign one.');
 workspace=workspaces.find(item=>item.id===readWorkspacePreference('workspace',''))||workspaces[0];
 const appearance=await client.from('control_center_profiles').select('appearance').eq('account_id',user.id).maybeSingle();if(appearance.data?.appearance)setTheme(appearance.data.appearance);await render();
}
async function render(){
 finishLoading();
 const turn=++revision;const nav=permittedNavigation(config,staff).filter(item=>item.workspace!=='reviews'||workspace.workspace_key==='artanrecords');if(!nav.some(item=>item.id===panel))panel='overview';
 mountWorkspace({root,config,staff,user,client,nav,panel,e,icon,workspaces,workspace,onWorkspace:id=>{workspace=workspaces.find(item=>item.id===id);render().catch(showError);},onNavigate:id=>{panel=id;render().catch(showError);},onSignout:async()=>{stopUsage();++revision;root.replaceChildren();await client.auth.signOut({scope:'local'});signin();}});
 const content=root.querySelector('[data-operation-content]');
 try{
  if(panel==='overview'){
   content.innerHTML=`<div class="control-center-operation-grid">${config.services.filter(service=>service.workspace===workspace.workspace_key).map(service=>`<section><h3><img class="control-center-service-logo" src="${e(service.logo)}" alt="${e(service.name)}"></h3><p>${e(service.state)}</p><p>${e(service.detail)}</p><a href="${e(service.url)}" target="_blank" rel="noopener">Open service</a></section>`).join('')||'<p>No service connector is registered for this workspace.</p>'}</div>`;
   if(workspace.workspace_key==='artanrecords'&&hasPermission(staff,'artists.read')){const [handles,applications]=await Promise.all([client.from('studio_artist_handles').select('account_id',{count:'exact',head:true}).eq('status','pending'),client.from('studio_artist_applications').select('account_id',{count:'exact',head:true}).eq('status','pending')]);if(handles.error||applications.error)throw Error('Review totals could not be loaded.');if(turn!==revision)return;const totals=document.createElement('p');totals.textContent=`Pending usernames: ${handles.count}. Pending artist applications: ${applications.count}.`;content.prepend(totals);}
  }else if(panel==='profile'){
   await mountProfile({content,client,user,staff,e,icon,onReset:()=>access.recover(user.email),isCurrent:()=>turn===revision});
  }else if(panel==='settings'){
   mountSettings({content,client,user,staff,e,icon,onReset:()=>access.recover(user.email),isCurrent:()=>turn===revision,onTheme:async mode=>{const saved=await client.rpc('control_center_set_appearance',{mode});const status=root.querySelector('[data-appearance-status]');if(status)status.textContent=saved.error?'Saved in this browser. Account sync is unavailable.':'Appearance saved.';}});
  }else if(panel==='help'){
   mountHelp({content,user,config,e});
  }else if(panel==='organization'||panel==='staff'){
   await mountOrganization({content,client,staff,user,config,e,workspace,manage:panel==='staff',isCurrent:()=>turn===revision});
  }else if(panel==='usernames'||panel==='applications'){
   const handles=panel==='usernames';const response=await client.from(handles?'studio_artist_handles':'studio_artist_applications').select(handles?'account_id,requested_username,approved_username,status,notice,updated_at':'account_id,requested_tier,approved_tier,status,artist_note,decision_note,updated_at').order('updated_at',{ascending:true}).limit(100);if(response.error)throw Error('The review queue could not be loaded.');if(turn!==revision)return;
   content.innerHTML=response.data.length?response.data.map(row=>`<article class="control-center-review"><h3>${e(handles?row.requested_username:row.requested_tier+' requested')}</h3><p>${e(row.account_id)}</p><p>Status: ${e(row.status)}${row.approved_tier?' · Approved tier: '+e(row.approved_tier):''}</p><p>${e(handles?row.notice:row.artist_note)}</p>${row.status==='pending'&&hasPermission(staff,handles?'usernames.review':'tiers.review')?`<form data-review="${e(row.account_id)}">${!handles?`<label>Approved tier<select name="tier">${config.tiers.map(tier=>`<option>${e(tier)}</option>`).join('')}</select></label>`:''}<label>Decision note<textarea name="note" maxlength="${handles?500:2000}" required></textarea></label><button type="submit" name="decision" value="approve">Approve</button><button type="submit" name="decision" value="reject">Decline</button></form>`:''}</article>`).join(''):'<p>No requests in this queue.</p>';
   content.querySelectorAll('[data-review]').forEach(form=>form.addEventListener('submit',async event=>{event.preventDefault();const approve=event.submitter?.value==='approve';if(!window.confirm(approve?'Confirm this approval? The decision will be recorded.':'Confirm this decline? The decision will be recorded.'))return;form.inert=true;const args=handles?{artist:form.dataset.review,approve,message:form.elements.note.value}:{artist:form.dataset.review,tier:form.elements.tier.value,approve,note:form.elements.note.value};const result=await client.rpc(handles?'studio_review_username':'control_center_review_tier',args);if(result.error){form.inert=false;showError(Error('The decision was not saved. Your permissions or the request may have changed.'));return;}await render();}));
  }else if(panel==='audit'){
   const response=await client.from('control_center_artist_audit').select('id,actor_id,artist_id,action,details,created_at').eq('workspace_id',workspace.id).order('created_at',{ascending:false}).limit(100);if(response.error)throw Error('Decision history could not be loaded.');if(turn!==revision)return;content.innerHTML=response.data.length?response.data.map(row=>`<article class="control-center-review"><h3>${e(row.action.replaceAll('.',' / ').replaceAll('-',' '))}</h3><p>${e(new Date(row.created_at).toLocaleString())} · ${e(row.actor_id)}</p><details><summary>Decision details</summary><dl>${Object.entries(row.details).map(([key,value])=>`<dt>${e(key.replaceAll('_',' '))}</dt><dd>${e(typeof value==='object'?JSON.stringify(value):value)}</dd>`).join('')}</dl></details></article>`).join(''):'<p>No decisions recorded in this brand workspace yet.</p>';
  }
  if(turn===revision)root.querySelector('[data-operation-status]').textContent='';
 }catch(error){if(turn===revision)showError(error);}
}
function showError(error){const status=root.querySelector('[data-operation-status]');if(status)status.textContent=error.message;}
client.auth.onAuthStateChange(event=>{if(event==='SIGNED_OUT'){++revision;signin();}});
showLoading(root);
access.consumeCallback(new URL(location.href)).then(consumed=>{if(!consumed)return loadAccess();}).catch(error=>signin(error.message));
