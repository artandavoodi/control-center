import labels from '../../../../data/control-center/update-actions.json' with {type:'json'};
import {readView,writeView} from './view-state.js';
import {updateSummary} from './update-monitor.js';
export async function mountUpdates({content,monitor,staff,e,icon,isCurrent,action}){
 if(!staff?.enabled||!staff.is_owner){content.textContent='Owner access is required.';return;}
 content.innerHTML=`<p>${e(labels.notice)}</p><p role="status" data-update-status>Checking local service…</p><div data-update-actions></div><section data-update-job hidden><h3>Update result</h3><div data-update-summary></div><p data-update-state></p><pre data-update-output></pre></section><section data-update-history></section>`;
 const status=content.querySelector('[data-update-status]'),list=content.querySelector('[data-update-actions]');
 const confirmation=document.createElement('dialog');confirmation.className='control-center-context-dialog';confirmation.setAttribute('aria-label',labels.confirmation.title);
 confirmation.innerHTML=`<form method="dialog" class="control-center-context-form"><header><h2>${e(labels.confirmation.title)}</h2><button type="button" class="global-close-button" data-confirm-close aria-label="${e(labels.confirmation.close)}"></button></header><p data-confirm-scope></p><p>${e(labels.confirmation.description)}</p><label><input type="checkbox" required>${e(labels.confirmation.reviewed)}</label><div class="control-center-organization-actions"><button type="button" data-confirm-cancel>${e(labels.confirmation.cancel)}</button><button type="submit">${e(labels.confirmation.publish)}</button></div></form>`;content.append(confirmation);
 confirmation.querySelector('[data-confirm-close]').addEventListener('click',()=>confirmation.close('cancel'));
 confirmation.querySelector('[data-confirm-cancel]').addEventListener('click',()=>confirmation.close('cancel'));
 confirmation.querySelector('form').addEventListener('submit',event=>{event.preventDefault();confirmation.close('publish');});
 function confirmPublication(doc,trigger){return new Promise(resolve=>{confirmation.querySelector('form').reset();confirmation.querySelector('[data-confirm-scope]').textContent=doc.title;confirmation.returnValue='';confirmation.addEventListener('close',()=>{trigger.focus();resolve(confirmation.returnValue==='publish');},{once:true});confirmation.showModal();confirmation.querySelector('[data-confirm-cancel]').focus();});}
 function display(job){if(!isCurrent())return;const terminal=content.querySelector('[data-update-job]');terminal.hidden=false;content.append(terminal);content.querySelector('[data-update-summary]').innerHTML=updateSummary(job,e);content.querySelector('[data-update-state]').textContent=job.title+' · '+job.method+' · '+job.status;content.querySelector('[data-update-output]').textContent=job.output||'Waiting for output…';writeView('updateJob',job.id);}
 let data;try{data=await monitor.refresh();if(!isCurrent())return;if(data.error)throw Error(data.error);status.textContent='Local update service connected. Permissions are rechecked for every action.';}catch(error){if(isCurrent())status.textContent=error.message;return;}
 const selected=action==='registry'?'11':'00';
 const ordered=[...data.documents].sort((a,b)=>(a.id===selected?-1:b.id===selected?1:a.id.localeCompare(b.id)));
 list.innerHTML=`<details><summary>Update All covers ${data.layers.length} registered layers</summary><ul>${data.layers.map(layer=>`<li>${e(layer.id)}${layer.domains.length?' · '+e(layer.domains.join(', ')):''}</li>`).join('')}</ul><p>${data.unconfiguredDomains.length?'Not configured: '+e(data.unconfiguredDomains.join(', ')):''}</p></details>`+ordered.map(doc=>`<article class="control-center-review" data-update-document="${e(doc.id)}"><h3 class="control-center-filter-label">${icon(labels.documentIcons[doc.id]||'core/actions/reset/reset.svg')}${e(doc.id==='00'?labels.primary.all:doc.id==='11'?labels.primary.registry:doc.title)}</h3><div class="control-center-organization-actions">${doc.methods.map(method=>`<button type="button" data-run-update="${e(method)}">${icon('core/actions/reset/reset.svg')}${e(labels.methods[method])}</button>`).join('')}</div></article>`).join('');
 list.querySelectorAll('[data-run-update]').forEach(button=>button.addEventListener('click',async()=>{
  const document=button.closest('[data-update-document]').dataset.updateDocument,method=button.dataset.runUpdate;
  if(method==='publish'&&!await confirmPublication(data.documents.find(doc=>doc.id===document),button))return;
  list.inert=true;status.textContent='Starting update…';
  try{const job=await monitor.start(document,method);if(isCurrent())display(job);}catch(error){if(isCurrent())status.textContent=error.message;}finally{if(isCurrent())list.inert=monitor.state.jobs.some(job=>job.status==='running');}
 }));
 monitor.subscribe(state=>{
  if(!isCurrent())return false;
  const active=state.jobs.find(job=>job.status==='running'),selected=state.jobs.find(job=>job.id===readView('updateJob',''))||active||state.jobs.at(-1);
  list.inert=Boolean(active);if(selected)display(selected);
  status.textContent=state.error?labels.results.connection:active?labels.results.running:'Local update service connected. Permissions are rechecked for every action.';
  const history=content.querySelector('[data-update-history]'),completed=state.jobs.filter(job=>job.status!=='running').reverse();
  history.innerHTML=`<h3>${e(labels.results.history)}</h3>`+(completed.length?completed.map(job=>updateSummary(job,e)+`<button type="button" data-view-update="${e(job.id)}">View terminal details</button>`).join(''):`<p>${e(labels.results.empty)}</p>`);
  history.querySelectorAll('[data-view-update]').forEach(button=>button.addEventListener('click',()=>{const job=state.jobs.find(job=>job.id===button.dataset.viewUpdate);if(job){display(job);content.querySelector('[data-update-job]').scrollIntoView({block:'start'});}}));
 });
}
