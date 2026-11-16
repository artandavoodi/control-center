export function bindDocumentActions({form,icon,onAction,onPrint,onExport}){
 const close=form.querySelector('[data-document-cancel]');if(!close)return;
 const trigger=document.createElement('button'),panel=document.createElement('dialog');trigger.type='button';trigger.className='ui-icon-button';trigger.setAttribute('aria-label','More contract options');trigger.setAttribute('aria-haspopup','dialog');trigger.setAttribute('aria-expanded','false');trigger.innerHTML=icon('core/actions/more-vertical/more-vertical.svg');close.before(trigger);
 panel.className='control-center-contract-options';panel.setAttribute('aria-label','Contract options');panel.innerHTML='<header class="control-center-dialog-header"><h2>Contract options</h2><button type="button" class="global-close-button" aria-label="Close contract options"></button></header><div role="menu" aria-label="Contract actions"></div><p role="status"></p>';form.append(panel);window.NeuroartanCloseButtons?.initCloseButtonPrimitive(panel);
 const items=panel.querySelector('[role=menu]'),status=panel.querySelector('[role=status]');
 for(const [action,title,path]of [['print','Print','core/actions/print/print.svg'],['pdf','Export PDF','core/actions/download/download.svg'],['draft-archived','Archive draft',null],['draft-trash','Delete draft','core/actions/delete/delete.svg']]){
  const button=document.createElement('button');button.type='button';button.setAttribute('role','menuitem');button.className='control-center-inline-action';button.innerHTML=(path?icon(path):'<span class="control-center-operation-icon control-center-pending-artwork" data-artwork-status="pending" aria-hidden="true"></span>')+title;
  button.onclick=async()=>{status.textContent='';try{if(action==='print'){await onPrint();return;}if(action==='pdf'){button.disabled=true;await onExport();status.textContent='Draft PDF exported. This does not sign or send the contract.';return;}panel.close();await onAction(action);}catch(error){status.textContent=error.message||'The action could not be completed.';}finally{button.disabled=false;}};items.append(button);
 }
 trigger.onclick=()=>{panel.showModal();trigger.setAttribute('aria-expanded','true');items.querySelector('button')?.focus();};panel.querySelector('[aria-label="Close contract options"]').onclick=()=>panel.close();panel.addEventListener('close',()=>{trigger.setAttribute('aria-expanded','false');trigger.focus();});
 items.addEventListener('keydown',event=>{const buttons=[...items.querySelectorAll('button')],index=buttons.indexOf(document.activeElement);const next=event.key==='ArrowDown'?(index+1)%buttons.length:event.key==='ArrowUp'?(index+buttons.length-1)%buttons.length:event.key==='Home'?0:event.key==='End'?buttons.length-1:null;if(next!==null){event.preventDefault();buttons[next].focus();}});
}

export async function mountDraftArchive({root,client,workspaceId,accountId,canWrite,e,onSaved}){
 if(!accountId)return;
 const response=await client.from('control_center_documents').select('id,unit_id,title,body,classification,tags,updated_at,draft_state').eq('workspace_id',workspaceId).eq('artist_account_id',accountId).contains('tags',['agreement','draft']).order('updated_at',{ascending:false}).limit(200);
 if(response.error){root.textContent='Archived drafts could not be loaded.';return;}
 for(const row of response.data||[]){
  if(!row.tags.some(tag=>['draft-archived','draft-trash'].includes(tag)))continue;
  const item=document.createElement('article');item.className='control-center-review';item.innerHTML=`<h3>${e(row.title)}</h3><p>${row.tags.includes('draft-trash')?'Draft in trash':'Archived draft'}</p><p role="status"></p>`;root.append(item);
  if(!canWrite(row))continue;
  const restore=document.createElement('button');restore.type='button';restore.textContent='Restore draft';item.append(restore);
  restore.onclick=async()=>{restore.disabled=true;try{const saved=await client.rpc('control_center_save_document_draft',{record_id:row.id,brand:workspaceId,unit:row.unit_id,document_title:row.title,document_body:row.body,classification_name:row.classification,labels:row.tags.filter(tag=>!['draft-archived','draft-trash'].includes(tag)),expected_updated_at:row.updated_at,document_state:row.draft_state});if(saved.error||!saved.data?.id)throw Error();await onSaved();}catch{item.querySelector('[role=status]').textContent='Restore was not confirmed. Refresh before trying again.';restore.disabled=false;}};
 }
}
