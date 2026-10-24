import labels from '../../../../data/control-center/preview-actions.json' with {type:'json'};
import {isLocalMac,savedMacConnection,useMacConnection,saveMacConnection,forgetMacBrowser} from './mac-connection.js';
import {readView,writeView} from './view-state.js';
export {privatePreviewOrigin} from './mac-connection.js';
export async function mountPreviews({content,client,staff,workspace,context,e,icon,isCurrent}){
 if(!staff?.enabled||!staff.is_owner){content.textContent='Owner access is required.';return;}
 const local=isLocalMac();let base='',saved='',timer,busy=false;
 try{saved=await savedMacConnection(client);}catch{/* The connection form remains available if account settings are unavailable. */}
 content.innerHTML=`<p>Preview websites with verified custom domains without publishing or changing data.</p><form data-preview-connect class="control-center-preview-toolbar"><label>Private Mac connection<input name="origin" type="url" placeholder="https://your-mac.your-tailnet.ts.net" value="${e(saved)}" required></label><button type="submit">${icon('core/productivity/workspace/workspace.svg')}Connect Mac</button><label>Brand<select data-preview-brand>${labels.brands.map(brand=>`<option value="${brand.id}">${e(brand.label)}</option>`).join('')}</select></label></form><div class="control-center-organization-actions"><button type="button" data-preview-forget>Forget this browser</button></div><p class="control-center-field-note">Save the connection to your private account settings to reuse it in other browsers. New browsers require confirmation. Other devices also need private-network access, and your Mac must be awake.</p><p role="status" data-preview-status>Connecting to your Mac…</p><div data-preview-list></div><section data-preview-terminal hidden><h3>Preview result</h3><p data-preview-result></p><div class="control-center-organization-actions"><a data-preview-open target="_blank" rel="noopener" hidden>Open preview</a><label>Local address<input data-preview-local readonly></label><button type="button" data-preview-copy aria-label="Copy local address">${icon('core/actions/copy/copy.svg')}</button></div><p class="control-center-field-note">The local address opens on the Mac running this preview. Use Open preview for access from another connected device.</p><details><summary>Terminal details</summary><pre data-preview-output></pre></details></section>`;
 const status=content.querySelector('[data-preview-status]'),list=content.querySelector('[data-preview-list]'),filter=content.querySelector('[data-preview-brand]'),form=content.querySelector('[data-preview-connect]');
 const filterKey='preview-brand:'+(context.allBrands?'all':workspace.workspace_key),remembered=readView(filterKey,'');
 filter.value=labels.brands.some(brand=>brand.id===remembered)?remembered:context.allBrands?'all':labels.brands.some(brand=>brand.id===workspace.workspace_key)?workspace.workspace_key:'all';
 let repositories=[];
 async function request(route,method='GET'){
  if(!local&&!base)throw Error('Connect your private Mac address to use Local Development online.');
  const {data,error}=await client.auth.getSession();if(error||!data.session)throw Error('Sign in again to verify owner access.');
  let response;try{response=await fetch(base+'/api/previews/'+route,{method,headers:{Authorization:'Bearer '+data.session.access_token,'X-Control-Center-Action':'previews'},signal:AbortSignal.timeout(20000)});}catch{throw Error('Your Mac could not be reached. Check its private connection and Local Development server.');}
  let result;try{result=await response.json();}catch{throw Error('The connected server does not provide Local Development.');}
  if(!response.ok)throw Error(result.error||'The preview request could not be completed.');return result;
 }
 function render(){
  list.innerHTML=repositories.filter(item=>filter.value==='all'||item.brand===filter.value||labels.brands.find(brand=>brand.id===item.brand)?.parent===filter.value).map(item=>`<article class="control-center-review control-center-preview-row"><div class="control-center-preview-domain"><span class="control-center-preview-dot" data-ready="${Boolean(item.ready)}" role="img" aria-label="${item.ready?'Running':'Not running'}"></span><h3>${e(item.domains[0])}</h3></div><button type="button" data-preview-start="${e(item.id)}" ${busy?'disabled':''}>${icon('core/navigation/direction/arrow-right.svg')}${item.ready?'Preview options':'Start preview'}</button></article>`).join('')||'<p>No custom-domain websites are registered for this brand.</p>';
  list.querySelectorAll('[data-preview-start]').forEach(button=>button.addEventListener('click',async()=>{
   const id=button.dataset.previewStart;busy=true;render();status.textContent='Checking preview on your Mac…';
   try{const result=await request(id+'/start','POST');if(!isCurrent())return;
    const item=repositories.find(item=>item.id===id);Object.assign(item,{ready:result.ready,occupied:result.occupied});
    content.querySelector('[data-preview-terminal]').hidden=false;
    content.querySelector('[data-preview-result]').textContent=item.domains[0]+' · '+(result.message||(result.ready?'Your preview is ready.':'The preview is not ready yet. Review its terminal output.'));
    content.querySelector('[data-preview-output]').textContent=result.output||(result.occupied?'This preview is already running. No new terminal output is expected.':'No terminal output was produced.');
    const link=content.querySelector('[data-preview-open]');link.hidden=!result.url||!result.ready;if(result.url)link.href=result.url;
    content.querySelector('[data-preview-local]').value=result.localUrl||'';
    status.textContent=result.ready?'Preview is running. No changes were published.':'Preview readiness is not confirmed.';
   }catch(error){if(isCurrent())status.textContent=error.message;}finally{busy=false;if(isCurrent())render();}
  }));
 }
 async function refresh(quiet=false){
  clearTimeout(timer);if(!isCurrent())return;
  try{const result=await request('catalogue');if(!isCurrent())return;repositories=result.repositories;render();if(local&&!form.elements.origin.value)form.elements.origin.value=result.privateOrigin||'';if(!quiet)status.textContent=`${repositories.length} custom-domain websites. Owner access is checked for every launch.`;}
  catch(error){if(isCurrent()){repositories.forEach(item=>item.ready=false);render();status.textContent=error.message;}}
  finally{if(isCurrent())timer=setTimeout(()=>{if(!busy)refresh(true);else timer=setTimeout(()=>refresh(true),15000);},15000);}
 }
 filter.addEventListener('change',()=>{writeView(filterKey,filter.value);render();});
 form.addEventListener('submit',async event=>{event.preventDefault();try{saved=await saveMacConnection(client,form.elements.origin.value);base=local?'':await useMacConnection(client);await refresh();status.textContent='Mac connection saved to your account.';}catch(error){status.textContent=error.message;}});
 content.querySelector('[data-preview-forget]').addEventListener('click',async()=>{try{await forgetMacBrowser(client);base='';clearTimeout(timer);repositories=[];render();status.textContent='This browser is no longer remembered. Your account connection remains saved.';}catch(error){status.textContent=error.message;}});
 content.querySelector('[data-preview-copy]').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(content.querySelector('[data-preview-local]').value);status.textContent='Local address copied.';}catch{status.textContent='Select the local address and copy it.';}});
 try{base=await useMacConnection(client,{interactive:true});await refresh();}catch(error){status.textContent=error.message;}
}
