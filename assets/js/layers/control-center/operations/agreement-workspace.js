import {bindSearchField} from './search-field.js';
import {flushDraftSaves} from './draft-save.js';
import {readView,writeView} from './view-state.js';
import {signatureInput} from './shared/agreement-signature.js';
import {mountContractInvitations} from './contract-invitations.js';
import {writableUnits} from './records-common.js';
import labels from '../../../../data/control-center/agreements.json' with {type:'json'};
import signingLabels from '../../../../data/control-center/agreement-rehearsal.json' with {type:'json'};

export async function mountAgreementWorkspace(options,mountArtist){
 const {content,client,staff,workspace,e,icon,isCurrent}=options;
 if(workspace.workspace_key!=='artanrecords'){content.textContent='Choose Artanrecords to manage agreements.';return;}
 content.replaceChildren();
 const directory=document.createElement('section'),selected=document.createElement('section');
 directory.className='control-center-artist-directory';selected.hidden=true;
 directory.innerHTML=`<label>Find artist<span class="control-center-search-field">${icon('core/actions/search/search.svg')}<input type="search" aria-label="Find agreement artist" placeholder="Name, username or submission reference" autocomplete="off" maxlength="200"></span></label><div class="control-center-field-pair"><label>Sort by<select data-artist-sort><option value="latest">Latest update</option><option value="oldest">Oldest update</option><option value="az">Name: A to Z</option><option value="za">Name: Z to A</option></select></label><label>Status<select data-artist-status><option value="">All statuses</option>${Object.entries(labels.states).map(([key,title])=>`<option value="${e(key)}">${e(title)}</option>`).join('')}</select></label></div><p role="status"></p><div class="control-center-artist-results"></div>`;
 content.append(directory,selected);
 const pageHeader=content.closest('main')?.querySelector(':scope > header');
 pageHeader?.querySelector('[data-agreement-tools]')?.remove();
 pageHeader?.classList.add('control-center-contract-header');
 const tools=document.createElement('nav');tools.className='control-center-contract-actions';tools.dataset.agreementTools='';tools.setAttribute('aria-label','Agreement tools');(pageHeader||content).append(tools);
 const globalPanels=new Map();
 for(const id of ['signatures','invitations']){
  const button=document.createElement('button'),panel=document.createElement('section');button.type='button';button.innerHTML=icon(labels.tabIcons[id])+e(labels.tabs[id]);button.setAttribute('aria-pressed','false');panel.hidden=true;if(id!=='signatures')panel.setAttribute('aria-label',labels.tabs[id]);tools.append(button);content.append(panel);globalPanels.set(id,{panel,button});
  button.onclick=async()=>{if(!(await flushDraftSaves(selected)))return;const open=panel.hidden;for(const item of globalPanels.values()){item.panel.hidden=true;item.button.setAttribute('aria-pressed','false');}panel.hidden=!open;button.setAttribute('aria-pressed',String(open));directory.hidden=open||Boolean(selected.children.length);selected.hidden=open||!selected.children.length;};
 }
 const signatures=globalPanels.get('signatures').panel,form=document.createElement('form');
 form.innerHTML='<label>'+e(signingLabels.signatureLibrary.title)+'<input type="file" name="signature"></label>';form.onsubmit=event=>event.preventDefault();signatures.append(form);
 signatureInput(form,{client,libraryLabels:signingLabels.signatureLibrary,icons:{add:icon(options.config.chrome.create),edit:icon(options.config.chrome.edit),save:icon(options.config.chrome.save),use:icon(labels.tabIcons.signatures),default:icon('core/actions/favorite/favorite.svg'),archive:icon('core/actions/delete/delete.svg')}});
 await mountContractInvitations({root:globalPanels.get('invitations').panel,client,staff,workspace,scope:writableUnits(options.units,workspace,staff),e,icon});
 if(!isCurrent())return;
 const input=directory.querySelector('input'),status=directory.querySelector('[role=status]'),results=directory.querySelector('.control-center-artist-results');
 bindSearchField(directory.querySelector('.control-center-search-field'),{clearLabel:'Clear artist search'});
 let revision=0,timer,selectionTurn=0,entries=[];
 const requests=await client.from('studio_agreement_intake_requests').select('id,account_id,current_version_id,status,rehearsal,updated_at').eq('workspace_id',workspace.id).order('updated_at',{ascending:false}).limit(200);
 if(!isCurrent())return;
 if(requests.error){status.textContent='Artist requests could not be loaded.';return;}
 for(const row of requests.data||[]){
  if(row.rehearsal||entries.some(item=>item.account_id===row.account_id))continue;
  let details={},email='';
  if(row.current_version_id){const v=await client.from('studio_agreement_intake_versions').select('details,reply_email').eq('id',row.current_version_id).single();if(v.error)continue;details=v.data.details;email=v.data.reply_email;}
  entries.push({account_id:row.account_id,artist_name:details.artist_name||details.legal_name||email||row.account_id,username:details.username||'',email,status:row.status,updated_at:row.updated_at});
 }
 if(!isCurrent())return;
 const sort=directory.querySelector('[data-artist-sort]'),statusFilter=directory.querySelector('[data-artist-status]'),collator=new Intl.Collator('en',{sensitivity:'base',numeric:true});let matching=[];
 sort.setAttribute('aria-label','Sort by');statusFilter.setAttribute('aria-label','Status');
 const draw=rows=>{matching=rows;const shown=rows.filter(row=>!statusFilter.value||row.status===statusFilter.value).slice().sort((a,b)=>{if(sort.value==='az'||sort.value==='za')return collator.compare(a.artist_name,b.artist_name)*(sort.value==='za'?-1:1);return ((Date.parse(a.updated_at)||0)-(Date.parse(b.updated_at)||0))*(sort.value==='latest'?-1:1);});results.replaceChildren();for(const row of shown){const button=document.createElement('button');button.type='button';button.className='control-center-artist-result';button.setAttribute('aria-label',row.artist_name);button.innerHTML=`<strong>${e(row.artist_name)}</strong><span>${e([row.username?'@'+row.username:'',row.partnership||labels.states[row.status]||row.status||''].filter(Boolean).join(' · '))}</span>`;button.onclick=()=>open(row);results.append(button);}status.textContent=shown.length?'':'No matching artists.';};
 sort.onchange=statusFilter.onchange=()=>draw(matching);
 async function open(row){
  if(!(await flushDraftSaves(selected)))return;
  const turn=++selectionTurn;
  selected.replaceChildren();selected.dataset.artistAccount=row.account_id;selected.hidden=false;directory.hidden=true;
  const header=document.createElement('header'),body=document.createElement('section');header.className='control-center-contract-header control-center-artist-context-header';
  header.innerHTML=`<h2>${e(row.artist_name)}</h2><button type="button" class="global-close-button" aria-label="Exit artist"></button>`;
  const loading=document.createElement('span');loading.className='ui-loader-circle';loading.setAttribute('role','status');loading.setAttribute('aria-label','Loading artist agreements');
  body.hidden=true;body.inert=true;body.setAttribute('aria-busy','true');selected.append(header,loading,body);window.NeuroartanCloseButtons?.initCloseButtonPrimitive(header);
  header.querySelector('button').onclick=async()=>{if(!(await flushDraftSaves(body)))return;++selectionTurn;writeView('agreementArtist','');selected.replaceChildren();selected.hidden=true;delete selected.dataset.artistAccount;directory.hidden=false;directory.scrollIntoView({block:'start'});input.focus({preventScroll:true});};
  const active=()=>isCurrent()&&turn===selectionTurn;
  try{
   const intake=await client.from('studio_agreement_intake_requests').select('id,account_id,status,current_version_id,rehearsal').eq('workspace_id',workspace.id).eq('account_id',row.account_id).order('updated_at',{ascending:false}).limit(200);
   if(intake.error)throw intake.error;if(!active())return;
   const real=(intake.data||[]).filter(item=>!item.rehearsal),ids=real.map(item=>item.id);
   const versions=ids.length?await client.from('studio_agreement_intake_versions').select('id,request_id,version_number,details,details_digest').in('request_id',ids):{data:[]};
   if(versions.error)throw versions.error;if(!active())return;
   const current=real.find(item=>item.status==='approved'),version=versions.data.find(item=>item.id===current?.current_version_id);
   writeView('agreementArtist',row.account_id);
   await mountArtist({...options,action:/^(signing|archive|drafts|requests):/.exec(options.action||'')?.[1]||options.action,content:body,artistAccount:row.account_id,artistName:row.artist_name,artistVersionIds:versions.data.map(item=>item.id),artistDetailsVersion:version,isCurrent:active});
   if(active()){loading.remove();body.hidden=false;body.inert=false;body.removeAttribute('aria-busy');header.scrollIntoView({block:'start'});}
  }catch{if(active()){loading.remove();body.hidden=false;body.inert=false;body.removeAttribute('aria-busy');body.textContent='This artist workspace could not be opened. No contract was changed.';}}
 }
 input.addEventListener('input',()=>{clearTimeout(timer);const query=input.value.trim(),turn=++revision;const local=entries.filter(row=>Object.values(row).join(' ').toLocaleLowerCase().includes(query.toLocaleLowerCase()));draw(local);if(query.length<2||!staff.permissions.includes('artists.read'))return;
  timer=setTimeout(async()=>{const response=await client.rpc('control_center_search_artists',{search_text:query,brand:workspace.id});if(turn!==revision||!isCurrent()||directory.hidden)return;if(response.error){status.textContent='Search is unavailable. Existing requests remain listed.';return;}const rows=[...local];for(const row of response.data||[])if(!rows.some(item=>item.account_id===row.account_id))rows.push(row);draw(rows);},200);
 });
 draw(entries);
 const general=/^(signatures|invitations)(?::([0-9a-f-]{36}))?$/.exec(options.action||'');
 if(general){if(general[2])globalPanels.get('invitations').panel.querySelector('[name=enquiry]').value=general[2];globalPanels.get(general[1]).button.click();return;}
 const reference=/^details:([0-9a-fA-F-]{36})$/.exec(options.action||'')?.[1];
 const accountReference=/^(?:signing|archive|drafts|requests):([0-9a-f-]{36})$/i.exec(options.action||'')?.[1];
 const linked=(requests.data||[]).find(row=>row.id===reference),remembered=accountReference||linked?.account_id||readView('agreementArtist','');
 const row=entries.find(item=>item.account_id===remembered);if(row)await open(row);
}
