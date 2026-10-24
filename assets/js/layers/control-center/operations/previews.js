import labels from '../../../../data/control-center/preview-actions.json' with {type:'json'};
const key='control-center.preview-private-origin';
export function privatePreviewOrigin(value){
 if(!value)return '';
 const url=new URL(value);
 if(url.protocol!=='https:'||!url.hostname.endsWith('.ts.net')||url.username||url.password||url.pathname!=='/'||url.search||url.hash)throw Error('Use your private Tailscale HTTPS address, without a path.');
 return url.origin;
}
export async function mountPreviews({content,client,staff,workspace,context,e,icon,isCurrent}){
 if(!staff?.enabled||!staff.is_owner){content.textContent='Owner access is required.';return;}
 const local=['127.0.0.1','localhost'].includes(location.hostname);
 let base='';try{base=privatePreviewOrigin(localStorage.getItem(key)||'');}catch{/* An invalid saved connector is never used. */}
 if(local)base='';
 content.innerHTML=`<p>Start website previews without publishing or changing data. Private and archived repositories remain listed, but cannot be served.</p>${local?'':`<form data-preview-connect><label class="control-center-filter-label">Private Mac connection<input name="origin" type="url" placeholder="https://your-mac.your-tailnet.ts.net" value="${e(base)}" required></label><button type="submit">${icon('core/productivity/workspace/workspace.svg')}Connect Mac</button><p>Requires a configured private connection and your Mac to be awake. This does not expose your terminal publicly.</p></form>`}<label class="control-center-filter-label">Brand<select data-preview-brand>${labels.brands.map(brand=>`<option value="${brand.id}">${e(brand.label)}</option>`).join('')}</select></label><p role="status" data-preview-status>Connecting to your Mac…</p><div data-preview-list></div><section data-preview-terminal hidden><h3>Preview result</h3><p data-preview-result></p><a data-preview-open target="_blank" rel="noopener" hidden>Open preview</a><details open><summary>Terminal details</summary><pre data-preview-output></pre></details></section>`;
 const status=content.querySelector('[data-preview-status]'),list=content.querySelector('[data-preview-list]'),filter=content.querySelector('[data-preview-brand]');
 filter.value=context.allBrands?'all':labels.brands.some(brand=>brand.id===workspace.workspace_key)?workspace.workspace_key:'all';
 let repositories=[];
 async function request(route,method='GET'){
  if(!local&&!base)throw Error('Connect your private Mac address to use Local Development online.');
  const {data,error}=await client.auth.getSession();if(error||!data.session)throw Error('Sign in again to verify owner access.');
  let response;try{response=await fetch(base+'/api/previews/'+route,{method,headers:{Authorization:'Bearer '+data.session.access_token,'X-Control-Center-Action':'previews'},signal:AbortSignal.timeout(20000)});}catch{throw Error('Your Mac could not be reached. Check its private connection and Local Development server.');}
  let dataResponse;try{dataResponse=await response.json();}catch{throw Error('The connected server does not provide Local Development.');}
  if(!response.ok)throw Error(dataResponse.error||'The preview request could not be completed.');return dataResponse;
 }
 function render(){
  list.innerHTML=repositories.filter(item=>filter.value==='all'||item.brand===filter.value).map(item=>`<article class="control-center-review"><h3>${e(item.repository)}</h3><p>${e(item.domains.length?item.domains.join(' · '):'No verified public domain')}</p>${item.strategy?`<button type="button" data-preview-start="${e(item.id)}">${icon('core/navigation/direction/arrow-right.svg')}Start preview</button>`:`<p>${e(item.reason)}</p>`}</article>`).join('')||'<p>No repositories are registered for this brand.</p>';
  list.querySelectorAll('[data-preview-start]').forEach(button=>button.addEventListener('click',async()=>{
   button.disabled=true;status.textContent='Starting preview on your Mac…';
   try{const result=await request(button.dataset.previewStart+'/start','POST');if(!isCurrent())return;
    const panel=content.querySelector('[data-preview-terminal]');panel.hidden=false;
    content.querySelector('[data-preview-result]').textContent=result.message||(result.ready?'Your preview is ready.':'The process started but is not ready yet. Review its terminal output.');
    content.querySelector('[data-preview-output]').textContent=result.output||'No terminal output was produced.';
    const link=content.querySelector('[data-preview-open]');link.hidden=!result.url||!result.ready;if(result.url)link.href=result.url;
    status.textContent=result.ready?'Preview is running. No changes were published.':'Preview readiness is not confirmed.';
   }catch(error){if(isCurrent())status.textContent=error.message;}finally{button.disabled=false;}
  }));
 }
 async function connect(){try{const result=await request('catalogue');if(!isCurrent())return;repositories=result.repositories;render();status.textContent=`${repositories.length} repositories registered. Owner access is checked for every launch.`;}catch(error){if(isCurrent())status.textContent=error.message;}}
 filter.addEventListener('change',render);
 content.querySelector('[data-preview-connect]')?.addEventListener('submit',event=>{event.preventDefault();try{base=privatePreviewOrigin(new FormData(event.target).get('origin'));localStorage.setItem(key,base);connect();}catch(error){status.textContent=error.message;}});
 await connect();
}
