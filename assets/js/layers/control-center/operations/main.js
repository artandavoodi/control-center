import {createClient} from '@supabase/supabase-js';
import config from '../../../../data/control-center/operations.json';
import updateConfig from '../../../../data/control-center/update-actions.json';
import {mountUpdates} from './updates.js';
import previewConfig from '../../../../data/control-center/preview-actions.json';
import payoutConfig from '../../../../data/control-center/payout-applications.json';
import {mountPayoutApplications} from './payout-applications.js';
import releaseConfig from '../../../../data/control-center/release-submissions.json';
import {mountReleaseSubmissions} from './release-submissions.js';
import enquiryConfig from '../../../../data/control-center/artist-enquiries.json';
import {mountArtistEnquiries} from './artist-enquiries.js';
import communicationsConfig from '../../../../data/control-center/communications.json';
import {mountCommunications} from './communications.js';
config.navigation.push(communicationsConfig.navigation);
config.navigation.push(enquiryConfig.navigation);config.reviewQueues.push(enquiryConfig.queue);
config.navigation.push(releaseConfig.navigation);config.reviewQueues.push(releaseConfig.queue);
config.navigation.push(payoutConfig.navigation);
config.reviewQueues.push(payoutConfig.queue);
import {mountPreviews} from './previews.js';
import {isLocalMac,savedMacConnection,useMacConnection} from './mac-connection.js';
import {createUpdateMonitor} from './update-monitor.js';
config.navigation=[...config.navigation,updateConfig.navigation];
config.navigation.push(previewConfig.navigation);
config.workspaces.push(previewConfig.workspace);
config.functions.push({id:'local-previews',panel:'previews',label:'Start local preview',ownerOnly:true,icon:previewConfig.navigation.icon});
import {hasPermission,permittedNavigation} from './access.js';
import {createAccess} from './auth.js';
import {mountProfile} from './profile.js';
import {mountOrganization} from './organization.js';
import {mountWorkspace,readWorkspacePreference,rememberWorkspace} from './workspace.js';
import {normalizeContext} from './context.js';
import {mountDevelopment} from './development.js';
import {mountRegistry} from './registry.js';
import {mountDocuments} from './documents.js';
import {mountVacancies} from './vacancies.js';
import {assetUrl} from './assets.js';
import {setTheme} from './theme.js';
import {mountSettings} from './settings.js';
import {mountHelp} from './help.js';
import {startUsage,stopUsage} from './usage.js';
import {showLoading,finishLoading} from './loading.js';
import {setViewAccount,readView,writeView} from './view-state.js';
const root=document.querySelector('[data-control-center-root]');
if(location.protocol!=='https:'&&!['127.0.0.1','localhost'].includes(location.hostname)){
 root.textContent='Secure HTTPS access is required. Please return when the domain certificate is ready.';
 throw Error('Staff access requires HTTPS');
}
const client=createClient(config.supabase.url,config.supabase.key,{auth:{storage:sessionStorage,storageKey:'control-center-staff',flowType:'pkce',detectSessionInUrl:false}});
const e=value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const icon=path=>`<img class="control-center-operation-icon" src="${e(assetUrl('/registry/icons/public/assets/'+path))}" alt="">`;
let staff=null,user=null,panel='overview',revision=0,recovering=false,workspaces=[],workspace=null,units=[],context={function:'operations',department:'',office:''},pendingAction='',updateMonitor=null;
async function refreshRegistry(){
 const [brands,registry]=await Promise.all([client.rpc('control_center_workspaces'),client.from('control_center_units').select('id,parent_id,kind,name,active,workspace_key').order('name')]);
 if(brands.error||registry.error)throw Error('Your workspace directory could not be loaded.');
 workspaces=brands.data||[];units=registry.data||[];
}
const access=createAccess({client,root,config,e,onAuthenticated:loadAccess,onReset:()=>{finishLoading();recovering=true;staff=null;user=null;}});
function signin(message=''){updateMonitor?.stop();updateMonitor=null;finishLoading();stopUsage();staff=null;user=null;recovering=false;access.signin(message);}
async function loadAccess(){
 if(recovering)return;
 const identity=await client.auth.getUser();if(identity.error||!identity.data.user){signin();return;}
 user=identity.data.user;const response=await client.from('control_center_staff').select('account_id,permissions,enabled,is_owner,display_name,department,office,manager_id,authority_level,unit_id').eq('account_id',user.id).maybeSingle();
 if(response.error)throw Error('Staff access could not be verified. Please try again.');
 staff=response.data;if(!staff?.enabled){await client.auth.signOut({scope:'local'});signin('This account has no active staff access. Ask the owner to assign permissions.');return;}
 setViewAccount(user.id);
 const effective=await client.rpc('control_center_effective_permissions');if(effective.error)throw Error('Staff permissions could not be verified.');staff.permissions=effective.data||[];
 updateMonitor?.stop();updateMonitor=staff.is_owner?createUpdateMonitor({client}):null;updateMonitor?.refresh();
 startUsage(user.id);
 await refreshRegistry();
 if(!workspaces.length)throw Error('No workspace is assigned to this staff account. Ask your authorized manager to assign one.');
 workspace=workspaces.find(item=>item.id===readWorkspacePreference('workspace',''))||workspaces[0];
 try{context=normalizeContext(JSON.parse(readWorkspacePreference('context','{}')),units,workspace);}catch{context=normalizeContext({},units,workspace);}
 if(!config.workspaces.some(group=>group.id===context.function))context.function='operations';
 panel=context.function==='operations'?'overview':permittedNavigation(config,staff).find(item=>item.workspace===context.function)?.id||'overview';
 const remembered=readView('navigation',null);if(remembered){const savedWorkspace=workspaces.find(item=>item.id===remembered.workspace),savedPanel=permittedNavigation(config,staff).find(item=>item.id===remembered.panel);if(savedWorkspace&&savedPanel&&(savedPanel.workspace!=='reviews'||savedWorkspace.workspace_key==='artanrecords')){workspace=savedWorkspace;context=normalizeContext(remembered.context||{},units,workspace);panel=savedPanel.id;}}
 const appearance=await client.from('control_center_profiles').select('appearance').eq('account_id',user.id).maybeSingle();if(appearance.data?.appearance)setTheme(appearance.data.appearance);await render();
 if(staff?.is_owner&&!isLocalMac()&&!['previews','updates'].includes(panel)){
  try{if(await savedMacConnection(client)){await useMacConnection(client,{interactive:true});updateMonitor?.refresh();}}catch{/* Declining browser consent does not block the staff console. */}
 }
}
async function render(){
 finishLoading();
 const turn=++revision,requestedAction=pendingAction;pendingAction='';const nav=permittedNavigation(config,staff).filter(item=>item.workspace!=='reviews'||workspace.workspace_key==='artanrecords');if(!nav.some(item=>item.id===panel))panel='overview';
 if(!nav.some(item=>item.workspace===context.function)){context.function='operations';}
 writeView('navigation',{workspace:workspace.id,context,panel});
 const navigate=(id,action='')=>{const item=permittedNavigation(config,staff).find(item=>item.id===id);if(!item)return;if(item.workspace==='reviews'){const records=workspaces.find(item=>item.workspace_key==='artanrecords');if(!records)return;workspace=records;context=normalizeContext({function:'reviews'},units,workspace);rememberWorkspace('workspace',workspace.id);}if(config.workspaces.some(group=>group.id===item.workspace)){context.function=item.workspace;rememberWorkspace('context',JSON.stringify(context));}panel=id;pendingAction=action;render().catch(showError);};
 mountWorkspace({root,config,staff,user,client,updateMonitor,nav,pickerNav:permittedNavigation(config,staff),panel,e,icon,workspaces,workspace,context,units,onContext:value=>{const selected=workspaces.find(item=>item.id===value.workspace);if(!selected)return;workspace=selected;context=normalizeContext(value,units,workspace);rememberWorkspace('workspace',workspace.id);rememberWorkspace('context',JSON.stringify(context));panel=context.function==='operations'?'overview':permittedNavigation(config,staff).find(item=>item.workspace===context.function)?.id||'overview';render().catch(showError);},onNavigate:navigate,onSignout:async()=>{updateMonitor?.stop();stopUsage();++revision;root.replaceChildren();await client.auth.signOut({scope:'local'});signin();}});
 const content=root.querySelector('[data-operation-content]');
 try{
  if(panel==='overview'){
   content.innerHTML=`<div class="control-center-operation-grid">${config.services.filter(service=>service.workspace===workspace.workspace_key).map(service=>`<section><h3><img class="control-center-service-logo" src="${e(service.logo)}" alt="${e(service.name)}"></h3><p>${e(service.state)}</p><p>${e(service.detail)}</p><a href="${e(service.url)}" target="_blank" rel="noopener">Open service</a></section>`).join('')||'<p>No service connector is registered for this workspace.</p>'}</div>`;
  }else if(panel==='profile'){
   await mountProfile({content,client,user,staff,e,icon,onReset:()=>access.recover(user.email),isCurrent:()=>turn===revision});
  }else if(panel==='settings'){
   mountSettings({content,client,user,staff,e,icon,onReset:()=>access.recover(user.email),isCurrent:()=>turn===revision,onTheme:async mode=>{const saved=await client.rpc('control_center_set_appearance',{mode});const status=root.querySelector('[data-appearance-status]');if(status)status.textContent=saved.error?'Saved in this browser. Account sync is unavailable.':'Appearance saved.';}});
  }else if(panel==='help'){
   mountHelp({content,user,config,e});
  }else if(panel==='development'){
   await mountDevelopment({content,workspace,e,isCurrent:()=>turn===revision});
  }else if(panel==='registry'){
   await mountRegistry({content,e,icon,isCurrent:()=>turn===revision,action:requestedAction});
  }else if(panel==='updates'){
   await mountUpdates({content,monitor:updateMonitor,staff,e,icon,isCurrent:()=>turn===revision,action:requestedAction});
  }else if(panel==='previews'){
   await mountPreviews({content,client,staff,workspace,context,e,icon,isCurrent:()=>turn===revision});
  }else if(panel==='documents'||panel==='vacancies'){
   await (panel==='documents'?mountDocuments:mountVacancies)({content,client,staff,workspace,context,units,e,icon,config,isCurrent:()=>turn===revision,action:requestedAction,onSaved:()=>turn===revision?render():undefined});
  }else if(panel==='organization'||panel==='staff'){
   await mountOrganization({content,client,staff,user,config,e,icon,workspace,workspaces,context,units,action:requestedAction,onNavigate:navigate,manage:panel==='staff',isCurrent:()=>turn===revision,onSaved:async()=>{await refreshRegistry();context=normalizeContext(context,units,workspace);await render();}});
  }else if(panel==='artist-enquiries'){
   await mountArtistEnquiries({content,client,staff,workspace,e,icon,isCurrent:()=>turn===revision,onSaved:()=>render(),onNavigate:navigate});
  }else if(panel==='communications'){
   await mountCommunications({content,client,staff,workspace,context,units,e,icon,isCurrent:()=>turn===revision,onSaved:()=>render()});
  }else if(panel==='release-submissions'){
   await mountReleaseSubmissions({content,client,staff,workspace,e,icon,isCurrent:()=>turn===revision,onSaved:()=>render()});
  }else if(panel==='payout-applications'){
   await mountPayoutApplications({content,client,staff,e,icon,isCurrent:()=>turn===revision,onSaved:()=>render()});
  }else if(panel==='usernames'||panel==='applications'){
   const handles=panel==='usernames';const response=await client.from(handles?'studio_artist_handles':'studio_artist_applications').select(handles?'account_id,requested_username,approved_username,status,notice,updated_at':'account_id,requested_tier,approved_tier,status,artist_note,decision_note,updated_at').order('updated_at',{ascending:true}).limit(100);if(response.error)throw Error('The review queue could not be loaded.');if(turn!==revision)return;
   content.innerHTML=response.data.length?response.data.map(row=>`<article class="control-center-review"><h3>${e(handles?row.requested_username:row.requested_tier+' requested')}</h3><p>${e(row.account_id)}</p><p>Status: ${e(row.status)}${row.approved_tier?' · Approved tier: '+e(row.approved_tier):''}</p><p>${e(handles?row.notice:row.artist_note)}</p>${row.status==='pending'&&hasPermission(staff,handles?'usernames.review':'tiers.review')?`<form data-review="${e(row.account_id)}">${!handles?`<label>Approved tier<select name="tier">${config.tiers.map(tier=>`<option>${e(tier)}</option>`).join('')}</select></label>`:''}<label>Decision note<textarea name="note" maxlength="${handles?500:2000}" required></textarea></label><button type="submit" name="decision" value="approve">Approve</button><button type="submit" name="decision" value="reject">Decline</button></form>`:''}</article>`).join(''):'<p>No requests in this queue.</p>';
   content.querySelectorAll('[data-review]').forEach(form=>form.addEventListener('submit',async event=>{event.preventDefault();const approve=event.submitter?.value==='approve';if(!window.confirm(approve?'Confirm this approval? The decision will be recorded.':'Confirm this decline? The decision will be recorded.'))return;form.inert=true;const args=handles?{artist:form.dataset.review,approve,message:form.elements.note.value}:{artist:form.dataset.review,tier:form.elements.tier.value,approve,note:form.elements.note.value};const result=await client.rpc(handles?'studio_review_username':'control_center_review_tier',args);if(result.error){form.inert=false;showError(Error('The decision was not saved. Your permissions or the request may have changed.'));return;}await render();}));
  }else if(panel==='audit'){
   const response=await client.from('control_center_artist_audit').select('id,actor_id,artist_id,action,details,created_at').eq('workspace_id',workspace.id).order('created_at',{ascending:false}).limit(100);if(response.error)throw Error('Decision history could not be loaded.');if(turn!==revision)return;content.innerHTML=response.data.length?response.data.map(row=>`<article class="control-center-review"><h3>${e(row.action.replaceAll('.',' / ').replaceAll('-',' '))}</h3><p>${e(new Date(row.created_at).toLocaleString())} · ${e(row.actor_id)}</p><details><summary>Decision details</summary><dl>${Object.entries(row.details).map(([key,value])=>`<dt>${e(key.replaceAll('_',' '))}</dt><dd>${e(typeof value==='object'?JSON.stringify(value):value)}</dd>`).join('')}</dl></details></article>`).join(''):'<p>No decisions recorded in this brand workspace yet.</p>';
  }
  if(turn===revision&&staff.is_owner&&['overview','registry'].includes(panel)){
   const actions=document.createElement('div');actions.className='control-center-update-primary';
   for(const [action,label] of Object.entries(updateConfig.primary).filter(([key])=>key!=='overview')){const button=document.createElement('button');button.type='button';button.innerHTML=icon(updateConfig.navigation.icon)+e(label);button.addEventListener('click',()=>navigate('updates',action));actions.append(button);}content.prepend(actions);
  }
  if(turn===revision)root.querySelector('[data-operation-status]').textContent='';
 }catch(error){if(turn===revision)showError(error);}
}
function showError(error){const status=root.querySelector('[data-operation-status]');if(status)status.textContent=error.message;}
client.auth.onAuthStateChange(event=>{if(event==='SIGNED_OUT'){++revision;signin();}});
showLoading(root);
access.consumeCallback(new URL(location.href)).then(consumed=>{if(!consumed)return loadAccess();}).catch(error=>signin(error.message));
