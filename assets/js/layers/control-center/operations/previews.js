import labels from '../../../../data/control-center/preview-actions.json' with {type:'json'};
import {isLocalMac,savedMacConnection,useMacConnection,saveMacConnection,forgetMacBrowser} from './mac-connection.js';
import {readView,writeView} from './view-state.js';
export {privatePreviewOrigin} from './mac-connection.js';
export async function mountPreviews({content,client,staff,workspace,context,e,icon,isCurrent}){
 if(!staff?.enabled||!staff.is_owner){content.textContent='Owner access is required.';return;}
 const local=isLocalMac();let base='',saved='',timer,busy=false,generation=0;
 const results=new Map();
 try{saved=await savedMacConnection(client);}catch{/* The connection form remains available if account settings are unavailable. */}
 content.innerHTML=`<p>Preview websites with verified custom domains without publishing or changing data.</p><form data-preview-connect class="control-center-preview-toolbar"><label>Private Mac connection<span class="control-center-preview-connection"><input name="origin" type="url" placeholder="https://your-mac.your-tailnet.ts.net" value="${e(saved)}" required><button type="button" data-preview-forget class="global-close-button control-center-preview-forget" aria-label="Forget this browser"><span></span><span></span></button></span></label><button type="submit">${icon(labels.icons.connect)}Connect Mac</button><label>Brand<select data-preview-brand>${labels.brands.map(brand=>`<option value="${brand.id}">${e(brand.label)}</option>`).join('')}</select></label></form><p class="control-center-field-note">Save the connection to your private account settings to reuse it in other browsers. New browsers require confirmation. Other devices also need private-network access, and your Mac must be awake.</p><p role="status" data-preview-status>Connecting to your Mac…</p><div data-preview-list></div>`;
 const status=content.querySelector('[data-preview-status]'),list=content.querySelector('[data-preview-list]'),filter=content.querySelector('[data-preview-brand]'),form=content.querySelector('[data-preview-connect]');
 const forget=content.querySelector('[data-preview-forget]');
 const filterKey='preview-brand:'+(context.allBrands?'all':workspace.workspace_key),remembered=readView(filterKey,'');
 const brand=labels.brandParents[workspace.workspace_key]||workspace.workspace_key;
 filter.value=labels.brands.some(brand=>brand.id===remembered)?remembered:context.allBrands?'all':labels.brands.some(item=>item.id===brand)?brand:'all';
 let repositories=[];
 async function request(route,method='GET'){
  if(!local&&!base)throw Error('Connect your private Mac address to use Local Development online.');
  const {data,error}=await client.auth.getSession();if(error||!data.session)throw Error('Sign in again to verify owner access.');
  let response;try{response=await fetch(base+'/api/previews/'+route,{method,headers:{Authorization:'Bearer '+data.session.access_token,'X-Control-Center-Action':'previews'},signal:AbortSignal.timeout(20000)});}catch{throw Error('Your Mac could not be reached. Check its private connection and Local Development server.');}
  let result;try{result=await response.json();}catch{throw Error('The connected server does not provide Local Development.');}
  if(!response.ok)throw Error(result.error||'The preview request could not be completed.');return result;
 }
 function render(){
  list.innerHTML=repositories.filter(item=>filter.value==='all'||item.brand===filter.value||labels.brandParents[item.brand]===filter.value).map(item=>{
   const result=results.get(item.id);
   return `<article class="control-center-review control-center-preview-row"><div class="control-center-preview-domain"><span class="control-center-preview-dot" data-ready="${Boolean(item.ready)}" role="img" aria-label="${item.ready?'Running':'Not running'}"></span><h3>${e(item.domains[0])}</h3></div><button type="button" data-preview-start="${e(item.id)}" ${busy?'disabled':''}>${icon(item.ready?labels.icons.preview:labels.icons.run)}${item.ready?'Preview':'Run'}</button>${result?`<section class="control-center-preview-result"><p>${e(result.message||(result.ready?'Your preview is ready.':'The preview is not ready yet. Review its terminal output.'))}</p><div class="control-center-preview-links">${result.ready&&result.url?`<a href="${e(result.url)}" target="_blank" rel="noopener">${icon(labels.icons.preview)}Open preview</a>`:''}${result.localUrl?`<label>Local address<span class="control-center-preview-address"><input readonly aria-label="Local address" value="${e(result.localUrl)}"><button type="button" class="control-center-preview-copy" data-preview-copy="${e(result.localUrl)}" aria-label="Copy local address">${icon('core/actions/copy/copy.svg')}</button></span></label>`:''}</div><p class="control-center-field-note">The local address opens on this Mac. Open preview also works on connected private-network devices.</p><details><summary>Terminal details</summary><pre>${e(result.output||(result.occupied?'This preview is already running. No new terminal output is expected.':'No terminal output was produced.'))}</pre></details></section>`:''}</article>`;
  }).join('')||'<p>No custom-domain websites are registered for this brand.</p>';
  list.querySelectorAll('[data-preview-copy]').forEach(button=>button.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(button.dataset.previewCopy);status.textContent='Local address copied.';}catch{status.textContent='Select the local address and copy it.';}}));
  list.querySelectorAll('[data-preview-start]').forEach(button=>button.addEventListener('click',async()=>{
   const id=button.dataset.previewStart;busy=true;render();status.textContent='Checking preview on your Mac…';
   try{const result=await request(id+'/start','POST');if(!isCurrent())return;
    const item=repositories.find(item=>item.id===id);Object.assign(item,{ready:result.ready,occupied:result.occupied});
    results.set(id,result);
    status.textContent=result.ready?'Preview is running. No changes were published.':'Preview readiness is not confirmed.';
   }catch(error){if(isCurrent())status.textContent=error.message;}finally{busy=false;if(isCurrent())render();}
  }));
 }
 async function refresh(quiet=false){
  const version=generation;
  clearTimeout(timer);if(!isCurrent())return;
  try{const result=await request('catalogue');if(!isCurrent()||version!==generation)return;repositories=result.repositories;render();if(local&&!form.elements.origin.value)form.elements.origin.value=result.privateOrigin||'';if(!quiet)status.textContent=`${repositories.length} custom-domain websites. Owner access is checked for every launch.`;}
  catch(error){if(isCurrent()){repositories.forEach(item=>item.ready=false);render();status.textContent=error.message;}}
  finally{if(isCurrent()&&version===generation)timer=setTimeout(()=>{if(!busy)refresh(true);else timer=setTimeout(()=>refresh(true),15000);},15000);}
 }
 filter.addEventListener('change',()=>{writeView(filterKey,filter.value);render();});
 form.addEventListener('submit',async event=>{event.preventDefault();try{saved=await saveMacConnection(client,form.elements.origin.value);base=local?'':await useMacConnection(client);await refresh();status.textContent='Mac connection saved to your account.';}catch(error){status.textContent=error.message;}});
 forget.addEventListener('click',()=>{
  const dialog=document.createElement('dialog');dialog.className='control-center-context-dialog';
  dialog.setAttribute('aria-label','Forget this browser');dialog.innerHTML='<form method="dialog" class="control-center-context-form"><h2>Forget this browser?</h2><p>Your account connection remains saved for other devices. This browser will need confirmation again.</p><button value="cancel">Cancel</button><button value="forget">Forget</button></form>';
  content.append(dialog);dialog.addEventListener('close',async()=>{const confirmed=dialog.returnValue==='forget';dialog.remove();forget.focus();if(!confirmed)return;try{await forgetMacBrowser(client);generation++;base='';clearTimeout(timer);form.elements.origin.value='';repositories=[];results.clear();render();status.textContent='This browser is no longer remembered. Your account connection remains saved.';}catch(error){status.textContent=error.message;}},{once:true});dialog.showModal();
 });
 try{base=await useMacConnection(client,{interactive:true});await refresh();}catch(error){status.textContent=error.message;}
}
