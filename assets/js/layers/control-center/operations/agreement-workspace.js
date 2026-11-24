import {bindSearchField} from './search-field.js';
import {flushDraftSaves} from './draft-save.js';
import {readView,writeView} from './view-state.js';
import {signatureInput} from './shared/agreement-signature.js';
import {mountContractInvitations} from './contract-invitations.js';
import {writableUnits} from './records-common.js';
import labels from '../../../../data/control-center/agreements.json' with {type:'json'};
import signingLabels from '../../../../data/control-center/agreement-rehearsal.json' with {type:'json'};
import {bindRecordOptions} from './shared/record-options.js';

export async function mountAgreementWorkspace(options,mountArtist){
 const {content,client,staff,workspace,e,icon,isCurrent}=options;
 if(workspace.workspace_key!=='artanrecords'){content.textContent='Choose Artanrecords to manage agreements.';return;}
 content.replaceChildren();
 const directory=document.createElement('section'),selected=document.createElement('section');
 directory.className='control-center-artist-directory';selected.className='control-center-artist-workspace';selected.hidden=true;
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
 signatureInput(form,{client,libraryLabels:signingLabels.signatureLibrary,icons:{clear:icon('core/actions/reset/reset.svg'),add:icon(options.config.chrome.create),edit:icon(options.config.chrome.edit),save:icon(options.config.chrome.save),use:icon(labels.tabIcons.signatures),default:icon('core/actions/favorite/favorite.svg'),archive:icon('core/actions/delete/delete.svg')}});
 await mountContractInvitations({root:globalPanels.get('invitations').panel,client,staff,workspace,scope:writableUnits(options.units,workspace,staff),e,icon});
 if(!isCurrent())return;
 const input=directory.querySelector('input'),status=directory.querySelector('[role=status]'),results=directory.querySelector('.control-center-artist-results');
 bindSearchField(directory.querySelector('.control-center-search-field'),{clearLabel:'Clear artist search'});
 let revision=0,timer,selectionTurn=0,entries=[],cursor=null;
 const sort=directory.querySelector('[data-artist-sort]'),statusFilter=directory.querySelector('[data-artist-status]'),collator=new Intl.Collator('en',{sensitivity:'base',numeric:true});let matching=[];
 sort.setAttribute('aria-label','Sort by');statusFilter.setAttribute('aria-label','Status');
 const draw=rows=>{matching=rows;const shown=rows.filter(row=>!statusFilter.value||row.status===statusFilter.value).slice().sort((a,b)=>{if(sort.value==='az'||sort.value==='za')return collator.compare(a.artist_name,b.artist_name)*(sort.value==='za'?-1:1);return ((Date.parse(a.updated_at)||0)-(Date.parse(b.updated_at)||0))*(sort.value==='latest'?-1:1);});results.replaceChildren();for(const row of shown){const button=document.createElement('button');button.type='button';button.className='control-center-artist-result';button.setAttribute('aria-label',row.artist_name);button.innerHTML=`<strong>${e(row.artist_name)}</strong><span>${e([row.username?'@'+row.username:'',row.partnership||labels.states[row.status]||row.status||''].filter(Boolean).join(' · '))}</span>`;button.onclick=()=>open(row);results.append(button);}status.textContent=shown.length?'':'No matching artists.';};
 const visibilityLabel=document.createElement('label'),visibility=document.createElement('select'),more=document.createElement('button');visibilityLabel.textContent='Directory';visibility.setAttribute('aria-label','Artist directory');for(const [value,text]of [['active',labels.artistActions.active],['archived',labels.artistActions.archived]]){const option=document.createElement('option');option.value=value;option.textContent=text;visibility.append(option);}visibilityLabel.append(visibility);directory.querySelector('.control-center-field-pair').append(visibilityLabel);more.type='button';more.className='control-center-inline-action';more.textContent=labels.artistActions.moreResults;more.hidden=true;results.after(more);
 async function load(reset=true){const turn=++revision;if(reset){cursor=null;entries=[];results.replaceChildren();}more.disabled=true;status.classList.add('control-center-artist-loading');status.setAttribute('aria-label','Loading artists');status.innerHTML='<span class="ui-loader-circle" aria-hidden="true"></span>';try{const response=await client.rpc('control_center_agreement_artist_directory',{brand:workspace.id,search_text:input.value.trim(),include_archived:visibility.value==='archived',sort_by:sort.value,after_cursor:cursor,page_size:50,status_filter:statusFilter.value});if(turn!==revision||!isCurrent())return;if(response.error||!Array.isArray(response.data?.items))throw Error();entries.push(...response.data.items.filter(row=>!entries.some(item=>item.account_id===row.account_id)));cursor=response.data.next_cursor;draw(entries);more.hidden=!cursor;}catch{if(turn===revision)status.textContent='Artist directory could not be loaded. No records were changed.';}finally{if(turn===revision){status.classList.remove('control-center-artist-loading');status.removeAttribute('aria-label');more.disabled=false;}}}
 sort.onchange=statusFilter.onchange=visibility.onchange=()=>load();more.onclick=()=>load(false);
 async function open(row){
  if(!(await flushDraftSaves(selected)))return;
  const turn=++selectionTurn;
  selected.replaceChildren();selected.dataset.artistAccount=row.account_id;selected.hidden=false;directory.hidden=true;
  const header=document.createElement('header'),body=document.createElement('section');header.className='control-center-contract-header control-center-artist-context-header';
  header.innerHTML=`<h2>${e(row.artist_name)}</h2><div class="control-center-contract-actions"><button type="button" class="global-close-button" aria-label="Exit artist"></button></div>`;
  const loading=document.createElement('div');loading.className='control-center-artist-loading';loading.setAttribute('role','status');loading.setAttribute('aria-label','Loading artist agreements');loading.innerHTML='<span class="ui-loader-circle" aria-hidden="true"></span>';
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
   const commands={},copy=labels.artistActions;
   const artistOptions=()=>{
    const actions=[];
    if(commands.edit)actions.push({id:'edit-details',label:copy.edit,icon:'core/actions/edit/edit.svg',run:commands.edit});
    if(commands.print)actions.push({id:'print-details',label:copy.print,icon:'core/actions/print/print.svg',close:false,run:commands.print});
    if(commands.export)actions.push({id:'export-details',label:copy.pdf,icon:'core/actions/download/download.svg',close:false,run:commands.export});
    if(commands.access)actions.push({id:'studio-access',label:'Studio access',icon:'core/identity/account/account.svg',run:commands.access});
    if(staff.permissions.includes('documents.write'))actions.push({id:'archive-artist',label:row.archived?copy.restore:copy.archive,icon:'core/commerce/revenue-shares/shares-archive.svg',run:async()=>{if(!row.archived&&!window.confirm(copy.archiveNotice))return;if(!(await flushDraftSaves(body)))throw Error('Save your changes before archiving.');const result=await client.rpc('control_center_set_agreement_artist_archived',{artist:row.account_id,brand:workspace.id,archived:!row.archived});if(result.error)throw Error('Archive change was not confirmed. No access was changed.');++selectionTurn;writeView('agreementArtist','');selected.replaceChildren();selected.hidden=true;directory.hidden=false;await load();}});
    return actions;
   };
   await mountArtist({...options,action:/^(signing|archive|drafts|requests):/.exec(options.action||'')?.[1]||options.action,content:body,artistAccount:row.account_id,artistName:row.artist_name,artistRequestId:real.find(item=>item.status!=='closed')?.id||real[0]?.id,artistVersionIds:versions.data.map(item=>item.id),artistDetailsVersion:version,artistOptions,onArtistDetailsActions:value=>Object.assign(commands,value),onArtistAccessReady:fn=>commands.access=fn,isCurrent:active});
   if(active()){
    const controls=document.createElement('header'),title=document.createElement('h2'),actions=document.createElement('div'),anchor=document.createTextNode('');
    controls.className='control-center-contract-header control-center-agreement-pane-header';controls.dataset.artistPaneControls='';actions.className='control-center-contract-actions';actions.append(anchor);controls.append(title,actions);
    const menu=bindRecordOptions({host:body,before:anchor,icon,title:copy.title,triggerLabel:copy.more,actions:artistOptions});anchor.remove();menu.trigger.dataset.artistOptions='';
    const updateControls=()=>{
     if(!active())return;
     const id=body.dataset.agreementTab,panel=body.querySelector(':scope > #agreement-panel-'+id);
     if(!panel||panel.hidden)return;
     if(menu.panel.open)menu.panel.close();
     const previous=controls.parentElement,oldRefresh=controls.querySelector('[data-rehearsal-refresh]');
     if(previous&&oldRefresh)previous.insertBefore(oldRefresh,controls.nextSibling);
     const refresh=panel.querySelector(':scope > [data-rehearsal-refresh]');if(refresh)menu.trigger.before(refresh);
     if(id==='details')title.remove();else{title.textContent=labels.tabs[id];controls.prepend(title);}panel.prepend(controls);
     controls.hidden=id==='drafts'&&panel.classList.contains('is-editing');
    };
    body.addEventListener('agreement:panel-change',updateControls);body.addEventListener('agreement:editor-state',updateControls);updateControls();
    loading.remove();body.hidden=false;body.inert=false;body.removeAttribute('aria-busy');header.scrollIntoView({block:'start'});
   }
  }catch{if(active()){loading.remove();body.hidden=false;body.inert=false;body.removeAttribute('aria-busy');body.textContent='This artist workspace could not be opened. No contract was changed.';}}
 }
 input.addEventListener('input',()=>{clearTimeout(timer);++revision;timer=setTimeout(()=>load(),200);});
 await load();if(!isCurrent())return;
 const general=/^(signatures|invitations)(?::([0-9a-f-]{36}))?$/.exec(options.action||'');
 if(general){if(general[2])globalPanels.get('invitations').panel.querySelector('[name=enquiry]').value=general[2];globalPanels.get(general[1]).button.click();return;}
 const reference=/^details:([0-9a-fA-F-]{36})$/.exec(options.action||'')?.[1];
 const accountReference=/^(?:signing|archive|drafts|requests):([0-9a-f-]{36})$/i.exec(options.action||'')?.[1];
 let linked;if(reference){const result=await client.from('studio_agreement_intake_requests').select('account_id').eq('workspace_id',workspace.id).eq('id',reference).single();if(!result.error)linked=result.data;}
 const remembered=accountReference||linked?.account_id||readView('agreementArtist','');let row=entries.find(item=>item.account_id===remembered);
 if(!row&&remembered){const result=await client.rpc('control_center_agreement_artist_directory',{brand:workspace.id,search_text:remembered,include_archived:false,sort_by:'latest',after_cursor:null,page_size:1});if(!result.error)row=result.data?.items?.find(item=>item.account_id===remembered);}
 if(row)await open(row);
}
