import {bindRecordOptions} from './shared/record-options.js';
export function bindDocumentActions({form,icon,onAction,onPrint,onExport,extraActions=()=>[]}){
 const close=form.querySelector('[data-document-cancel]');if(!close)return;
 return bindRecordOptions({host:form,before:close,icon,title:'Contract options',triggerLabel:'More contract options',actions:()=>[
  {label:'Print',icon:'core/actions/print/print.svg',close:false,run:onPrint},
  {label:'Export PDF',icon:'core/actions/download/download.svg',close:false,run:async()=>{await onExport();return 'Draft PDF exported. This does not sign or send the contract.';}},
  {label:'Archive draft',run:()=>onAction('draft-archived')},
  {label:'Delete draft',icon:'core/actions/delete/delete.svg',run:()=>onAction('draft-trash')}
 ].concat(extraActions())});
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
