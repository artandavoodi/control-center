import {bindICloudReplies} from './icloud-replies.js';
import labels from '../../../../data/control-center/agreements.json' with {type:'json'};

// Issuing is separate from saving, PDF preview, email delivery and final access approval.
export async function mountAgreementIssuance({root,dialog,client,staff,workspace,record,e,icon,isCurrent,onIssued}){
 const copy=labels.issuance;
 root.replaceChildren();
 const status=document.createElement('p');status.setAttribute('role','status');root.append(status);
 if(!record){status.textContent=copy.saveFirst;return;}
 const stillCurrent=()=>root.isConnected&&dialog.open&&isCurrent();
 const reference=record.artist_intake_version_id;
 const fields=record.draft_state?.fields;
 if(!reference||(fields&&(/pending|no approval|not approved|proposed/i.test(fields['legal review']||'')||!fields['legal review']?.trim()))||/\bdraft\b/i.test(record.title)
  ||/WORKING DRAFT|NOT ISSUED FOR SIGNATURE|NON-BINDING REHEARSAL|current Studio preview is non-binding/i.test(record.body)){
  status.textContent=copy.finalTextRequired;return;
 }
 const result=await client.from('studio_agreement_intake_requests').select('id,account_id,current_version_id,status,rehearsal').eq('workspace_id',workspace.id).eq('current_version_id',reference).eq('status','approved').eq('rehearsal',false).single();
 if(!stillCurrent())return;
 if(result.error||!result.data){status.textContent=copy.recipientRequired;return;}
 const intake=result.data,tier=record.tags.find(tag=>/^partnership-(silver|gold|platinum)$/.test(tag))?.slice('partnership-'.length);
 if(!tier||intake.account_id===staff.account_id){status.textContent=copy.partiesRequired;return;}
 const ready=await client.rpc('control_center_agreement_execution_ready',{brand:workspace.id,unit:record.unit_id});
 if(!stillCurrent())return;
 if(ready.error||ready.data!==true){status.textContent=copy.unavailable;return;}
 const form=document.createElement('form');form.className='control-center-issue-form';
 form.innerHTML=`<h3>${e(copy.title)}</h3><p>${e(copy.boundary)}</p><label>${e(copy.signer)}<input name="signer" required maxlength="160"></label><div class="control-center-field-pair"><label>${e(copy.starts)}<input name="starts" type="date" required></label><label>${e(copy.ends)}<input name="ends" type="date" required></label></div><label>${e(copy.review)}<textarea name="review" required minlength="20" maxlength="2000" rows="3"></textarea></label><label class="control-center-operation-check"><input name="confirmed" type="checkbox" required><span>${e(copy.confirm)}</span></label><button type="submit" class="control-center-primary-action">${icon('core/legal/contracts/signature.svg')}${e(copy.issue)}</button><p role="status"></p>`;
 form.elements.review.value=fields?.['legal review']||'';form.elements.signer.value=fields?.['label signatory']||'';root.append(form);status.textContent='';
 form.onsubmit=async event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const message=form.querySelector('[role=status]');
  if(form.elements.ends.value<=form.elements.starts.value){message.textContent=copy.dateError;return;}
  if(!window.confirm(copy.finalConfirm))return;
  form.inert=true;
  try{
   const issued=await client.rpc('control_center_issue_agreement',{document:record.id,intake:intake.id,expected_updated_at:record.updated_at,tier,label_signer:staff.account_id,label_signer_name:form.elements.signer.value,starts_on:form.elements.starts.value,ends_on:form.elements.ends.value,review_note:form.elements.review.value,confirmed:form.elements.confirmed.checked});
   if(issued.error||!issued.data)throw Error(copy.issueError);
   form.hidden=true;status.textContent=copy.issued;
   const next=document.createElement('button');next.type='button';next.className='ui-button';next.innerHTML=icon('core/legal/contracts/signature.svg')+e(copy.addLabelSignature);next.onclick=()=>{dialog.close();onIssued?.(issued.data);};root.append(next);
  }catch(error){message.textContent=error.message||copy.issueError;form.inert=false;}
 };
}

export async function prepareAgreementEmail({root,client,staff,envelope,e,icon}){
 const copy=labels.issuance,dialog=document.createElement('dialog');dialog.className='control-center-reply-dialog';dialog.setAttribute('aria-label',copy.emailTitle);
 dialog.innerHTML=`<header class="control-center-dialog-header"><h2>${e(copy.emailTitle)}</h2><button type="button" class="global-close-button" aria-label="Close signing invitation"></button></header><p role="status"></p><section data-contract-mail></section>`;
 root.append(dialog);window.NeuroartanCloseButtons?.initCloseButtonPrimitive(dialog);dialog.querySelector('button').onclick=()=>dialog.close();dialog.showModal();
 const status=dialog.querySelector('[role=status]');status.innerHTML='<span class="ui-loader-circle" aria-label="Preparing invitation"></span>';
 const link=await client.rpc('control_center_agreement_signing_link',{envelope:envelope.id});
 if(!dialog.isConnected)return;
 if(link.error||!link.data?.token){status.textContent=copy.linkError;return;}
 const url=new URL(labels.studioUrl);url.hash=new URLSearchParams({token:link.data.token}).toString();
 const mail=dialog.querySelector('[data-contract-mail]');mail.className='control-center-issue-form';
 mail.innerHTML=`<label>${e(copy.to)}<input readonly value="${e(link.data.recipient_email)}"></label><label>${e(copy.subjectLabel)}<input name="subject" maxlength="300"></label><label>${e(copy.messageLabel)}<textarea name="body" maxlength="16000" rows="8"></textarea></label><div data-icloud-reply></div>`;
 mail.querySelector('[name=subject]').value=copy.subject;mail.querySelector('[name=body]').value=copy.body.replace('{url}',url.href).replace('{expiry}',new Date(link.data.expires_at).toLocaleString());
 status.textContent=copy.issued;
 const connect=bindICloudReplies({dialog:mail,row:{id:link.data.enquiry,reply_email:link.data.recipient_email},client,staff,e,icon});
 mail.addEventListener('icloud:accepted',()=>{status.textContent=copy.emailAccepted;});mail.addEventListener('icloud:uncertain',()=>{status.textContent=copy.emailUncertain;});connect();
}
