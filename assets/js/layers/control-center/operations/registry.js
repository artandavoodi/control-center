import {assetUrl} from './assets.js';
export function registryReference(kind,row){return kind==='icons'?'icon:'+row.id:row.id==='close-control'?'motion:'+row.id:'token:--'+row.id;}
export function registryMatches(row,query){return (row.id+' '+(row.value||'')+' '+(row.tags||[]).join(' ')).toLowerCase().includes(query.toLowerCase());}
export const registryKinds={tokens:'Tokens',icons:'Icons',colors:'Colors',typography:'Typography',motions:'Motion & interaction'};
export async function loadRegistry(){const response=await fetch(assetUrl('/assets/data/control-center/registry-index.json'));if(!response.ok)throw Error('The registry index could not be loaded.');return response.json();}
export async function mountRegistry({content,e,icon,isCurrent,action}){
 const registry=await loadRegistry();if(!isCurrent())return;
 content.innerHTML='<p>All brands share these canonical sources. Copy an ID to identify the exact source across the ecosystem.</p><div class="control-center-settings-tabs" role="group" aria-label="Registry categories">'+Object.entries(registryKinds).map(([kind,label])=>`<button type="button" data-registry-kind="${kind}" aria-pressed="false">${label}</button>`).join('')+'</div><label>Find a registered source<input type="search" data-registry-search autocomplete="off" placeholder="Name, ID, tag or value"></label><label>Filter category<select data-registry-category><option value="">All categories</option></select></label><p role="status" aria-live="polite"></p><div data-registry-results></div><button type="button" data-registry-more>Show more sources</button>';
 let kind=Object.hasOwn(registryKinds,action)?action:'tokens',limit=50;
 const output=content.querySelector('[data-registry-results]'),field=content.querySelector('input'),more=content.querySelector('[data-registry-more]'),category=content.querySelector('select'),status=content.querySelector('[role=status]');
 const copy=(value,label)=>`<div class="control-center-registry-copy"><code>${e(value)}</code><button type="button" data-copy="${e(value)}" aria-label="Copy ${e(label)}">${icon('core/actions/copy/copy.svg')}</button></div>`;
 function sourceRows(){return kind==='motions'?[...(registry.motions||[]),...registry.tokens.filter(row=>row.category==='motion')]:kind==='colors'?registry.tokens.filter(row=>row.category==='color'):kind==='typography'?registry.tokens.filter(row=>row.category==='typography'):registry[kind];}
 function categories(){const values=[...new Set(sourceRows().map(row=>row.category||row.id.split('/')[0]))].sort();category.innerHTML='<option value="">All categories</option>'+values.map(value=>`<option>${e(value)}</option>`).join('');}
 function draw(){
  const query=field.value.trim().toLowerCase(),rows=sourceRows().filter(row=>(registryMatches(row,query)||registryReference(kind,row).toLowerCase().includes(query))&&(!category.value||(row.category||row.id.split('/')[0])===category.value));
  status.textContent=rows.length+' registered '+kind;
  content.querySelectorAll('[data-registry-kind]').forEach(item=>item.setAttribute('aria-pressed',String(item.dataset.registryKind===kind)));
  output.innerHTML=rows.slice(0,limit).map(row=>{const parts=row.id.split('/'),name=parts.pop(),prefix=parts.join('/');return `<article class="control-center-review control-center-registry-item">${kind==='icons'?icon(row.path):`<div data-token-preview="${e(row.id)}" aria-label="Token preview"></div>`}<h3>${prefix?`<span class="control-center-registry-prefix">${e(prefix)}/</span>`:''}<strong>${e(name)}</strong></h3>${kind==='icons'?`<p class="control-center-artwork-status" data-artwork="${row.hasArtwork?'available':'needed'}"><span aria-hidden="true"></span>${row.hasArtwork?'Vector available':'Registered slot - artwork needed'}</p>`:`<p><code>${e(row.value||row.description||'')}</code></p>`}${copy(registryReference(kind,row),'ID')}${copy(row.source,'source path')}${row.tags?.length?`<p class="control-center-field-note">${row.tags.map(e).join(' · ')}</p>`:''}</article>`;}).join('');
  output.querySelectorAll('[data-token-preview]').forEach(node=>{
   const row=rows.find(item=>item.id===node.dataset.tokenPreview);if(!row)return;const value='var(--'+row.id+')';
   if(kind==='motions'&&row.id==='close-control'){node.innerHTML='<button type="button" class="global-close-button" aria-label="Preview close interaction"></button>';window.NeuroartanCloseButtons?.initCloseButtonPrimitive(node);}
   else if(/color|surface|background/.test(row.id)&&CSS.supports('color',row.value)){node.className='control-center-color-preview';node.style.backgroundColor=value;}
   else if(/font|type-/.test(row.id)){node.textContent='Aa · The quick brown fox';if(/family/.test(row.id))node.style.fontFamily=value;else if(/size/.test(row.id))node.style.fontSize=value;else if(/weight/.test(row.id))node.style.fontWeight=value;}
   else if(/spacing|size|width|height|radius/.test(row.id)&&CSS.supports('width',row.value)){node.className='control-center-size-preview';node.style.width=value;}
   else if(/duration|motion/.test(row.id)&&CSS.supports('transition-duration',row.value)){node.className='control-center-motion-preview';node.style.transitionDuration=value;node.textContent='Hover to preview';node.tabIndex=0;}
  });more.hidden=limit>=rows.length;
 }
 output.addEventListener('click',async event=>{const button=event.target.closest('[data-copy]');if(!button)return;try{await navigator.clipboard.writeText(button.dataset.copy);if(isCurrent())status.textContent='Copied '+button.dataset.copy;}catch{if(isCurrent())status.textContent='Copy unavailable. Select the ID or source path to copy manually.';}});
 field.addEventListener('input',()=>{limit=50;draw();});category.addEventListener('change',()=>{limit=50;draw();});more.addEventListener('click',()=>{limit+=50;draw();});content.querySelectorAll('[data-registry-kind]').forEach(button=>button.addEventListener('click',()=>{kind=button.dataset.registryKind;limit=50;categories();draw();}));categories();draw();
}
