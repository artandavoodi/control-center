import {bindICloudReplies} from './icloud-replies.js';
import labels from '../../../../data/control-center/agreements.json' with {type:'json'};
import {agreementDateSummary} from './agreement-dates.js';
import {draftTextDigest} from './draft-save.js';

// Issuing is separate from saving, PDF preview, email delivery and final access approval.
export async function mountAgreementIssuance({root,dialog,client,staff,workspace,record,e,icon,isCurrent,onIssued,onResolve,onSaveReview,onPrepareFinal}){
 const copy=labels.issuance;
 root.replaceChildren();
 const status=document.createElement('p');status.setAttribute('role','status');status.innerHTML='<span class="ui-loader-circle" aria-label="Checking contract"></span>';root.append(status);
 if(!record){status.textContent=copy.saveFirst;return;}
 const stillCurrent=()=>root.isConnected&&dialog.open&&isCurrent();
 const reference=record.artist_intake_version_id;
 const fields=record.draft_state?.fields;
 const blockers=[];
 const textSaved=record.draft_state?.text_saved_sha256===await draftTextDigest(record.body);
 if(fields&&(/pending|no approval|not approved|proposed/i.test(fields['legal review']||'')||!fields['legal review']?.trim()))blockers.push({message:'Legal approval has not been recorded for this version.',action:'Review legal approval',field:'legal review'});
 if(/\bdraft\b/i.test(record.title)||/WORKING DRAFT|NOT ISSUED FOR SIGNATURE|NON-BINDING REHEARSAL|current Studio preview is non-binding/i.test(record.body))blockers.push({message:'The text is a working draft. Editing or saving it does not record legal approval.',action:'Edit document text',field:'text'});
 if(!blockers.some(item=>item.field==='text')&&/\[[^\]]+ - required\]|PENDING[^\n]*NO APPROVAL|PROPOSED FOR (REVIEW|CONFIRMATION)/i.test(record.body))blockers.push({message:'Required or proposed terms remain unresolved in the document.',action:'Review contract terms',field:'text'});
 if(!reference)blockers.push({message:copy.recipientRequired});
 const result=reference?await client.from('studio_agreement_intake_requests').select('id,account_id,current_version_id,status,rehearsal').eq('workspace_id',workspace.id).eq('current_version_id',reference).eq('status','approved').eq('rehearsal',false).single():{data:null};
 if(!stillCurrent())return;
 if(reference&&(result.error||!result.data))blockers.push({message:copy.recipientRequired});
 const intake=result.data,tier=record.tags.find(tag=>/^partnership-(silver|gold|platinum)$/.test(tag))?.slice('partnership-'.length);
 const normalize=value=>String(value||'').normalize('NFKC').trim().toLocaleLowerCase().replace(/\s+/g,' ');
 const sameName=fields&&normalize(fields['label signatory'])&&normalize(fields['label signatory'])===normalize(fields['artist legal name']);
 if(!tier||intake?.account_id===staff.account_id||sameName)blockers.push({message:copy.partiesRequired,action:'Review label identity',field:'label legal name'});
 if(fields&&!agreementDateSummary(fields['effective date'],fields['expiry date']))blockers.push({message:copy.dateError,action:'Select contract dates',field:'effective date'});
 const ready=await client.rpc('control_center_agreement_execution_ready',{brand:workspace.id,unit:record.unit_id});
 if(!stillCurrent())return;
 if(ready.error||ready.data!==true)blockers.push({message:copy.unavailable,system:true});
 if(blockers.length){
  const heading=document.createElement('h3'),list=document.createElement('ul');heading.textContent='Before signing';list.className='control-center-signing-checks';
  if(fields?.['legal review']?.trim()&&!blockers.some(item=>item.field==='legal review')){const item=document.createElement('li'),label=document.createElement('label'),check=document.createElement('input'),text=document.createElement('span');label.className='control-center-operation-check';check.type='checkbox';check.checked=true;check.disabled=true;text.textContent='Review note saved';label.append(check,text);item.append(label);list.append(item);}
  for(const blocker of blockers.filter(item=>!item.system)){const item=document.createElement('li'),message=document.createElement('label'),check=document.createElement('input'),text=document.createElement('span');message.className='control-center-operation-check';check.type='checkbox';check.disabled=true;check.checked=blocker.field==='text'&&textSaved;text.textContent=check.checked?'Text saved. Final terms and approval are still required before issuing.':blocker.message;message.append(check,text);item.append(message);if(blocker.field&&onResolve){const action=document.createElement('button');action.type='button';action.className='ui-button';const artwork=blocker.field==='legal review'?'core/legal/contracts/contract.svg':blocker.field==='label legal name'?'core/legal/contracts/signature.svg':'core/actions/edit/edit.svg';action.innerHTML=icon(artwork)+e(blocker.action);action.onclick=()=>{if(blocker.field==='legal review'&&onSaveReview){mountLegalReview();return;}dialog.close();onResolve(blocker.field);};item.append(action);}list.append(item);}
  const finalize=document.createElement('button');finalize.type='button';finalize.className='control-center-primary-action';finalize.disabled=true;finalize.innerHTML=icon('core/legal/contracts/signature.svg')+e(labels.finalizationAction);finalize.setAttribute('aria-describedby','contract-finalization-blockers');list.id='contract-finalization-blockers';
  status.textContent='Nothing has been sent. Complete the items below to enable finalization.';if(list.children.length)root.append(heading,list);
  if(onPrepareFinal&&blockers.some(item=>item.field==='text')){const prepare=document.createElement('button');prepare.type='button';prepare.className='control-center-primary-action';prepare.innerHTML=icon('core/legal/contracts/contract.svg')+'Prepare final text';prepare.onclick=async()=>{prepare.disabled=true;try{record=await onPrepareFinal();await mountAgreementIssuance({root,dialog,client,staff,workspace,record,e,icon,isCurrent,onIssued,onResolve,onSaveReview,onPrepareFinal});}catch(error){status.textContent=error.message||'Final text could not be prepared. Nothing has been sent.';prepare.disabled=false;}};root.append(prepare);}
  const unavailable=blockers.find(item=>item.system);if(unavailable){const notice=document.createElement('p');notice.textContent=unavailable.message;root.append(notice);}root.append(finalize);return;
 }
 function mountLegalReview(){
  const review=document.createElement('form');review.className='control-center-issue-form';
  review.innerHTML='<h3>Record legal review</h3><p>Record the actual reviewer and their decision. Saving this note does not sign, issue or activate the contract.</p><label>Reviewer and decision<textarea name="note" required minlength="20" maxlength="2000" rows="4"></textarea></label><label class="control-center-operation-check"><input name="confirmed" type="checkbox" required><span>I am authorized to record this review and the note accurately identifies the reviewer and decision.</span></label><div class="control-center-action-row"><button type="button" data-return>Back</button><button type="submit" class="control-center-primary-action">Save review</button></div><p role="status"></p>';
  const back=review.querySelector('[data-return]');back.onclick=()=>mountAgreementIssuance({root,dialog,client,staff,workspace,record,e,icon,isCurrent,onIssued,onResolve,onSaveReview,onPrepareFinal});
  review.querySelector('button[type=submit]').insertAdjacentHTML('afterbegin',icon('core/actions/save/save.svg'));
  review.onsubmit=async event=>{event.preventDefault();if(!review.reportValidity())return;const note=review.elements.note.value.trim(),message=review.querySelector('[role=status]');if(/pending|no approval|not approved|proposed/i.test(note)){message.textContent='This note still describes an unresolved review. Keep the draft pending until the actual decision is available.';return;}review.inert=true;try{record=await onSaveReview(note);await mountAgreementIssuance({root,dialog,client,staff,workspace,record,e,icon,isCurrent,onIssued,onResolve,onSaveReview,onPrepareFinal});}catch(error){message.textContent=error.message||'Review could not be saved. Nothing has been issued.';review.inert=false;}};
  root.replaceChildren(review);review.elements.note.focus();
 }
 const form=document.createElement('form');form.className='control-center-issue-form';
 form.innerHTML=`<h3>${e(copy.title)}</h3><p>${e(copy.boundary)}</p><label>${e(copy.signer)}<input name="signer" required maxlength="160"></label><div class="control-center-field-pair"><label>${e(copy.starts)}<input name="starts" type="date" required></label><label>${e(copy.ends)}<input name="ends" type="date" required></label></div><label>${e(copy.review)}<textarea name="review" required minlength="20" maxlength="2000" rows="3"></textarea></label><label class="control-center-operation-check"><input name="confirmed" type="checkbox" required><span>${e(copy.confirm)}</span></label><button type="submit" class="control-center-primary-action">${icon('core/legal/contracts/signature.svg')}${e(copy.issue)}</button><p role="status"></p>`;
 form.querySelector('button[type=submit]').innerHTML=icon('core/legal/contracts/signature.svg')+e(labels.finalizationAction);
 form.elements.review.value=fields?.['legal review']||'';form.elements.signer.value=fields?.['label signatory']||'';
 if(fields){form.elements.starts.value=fields['effective date'];form.elements.ends.value=fields['expiry date'];form.elements.starts.readOnly=form.elements.ends.readOnly=true;}
 root.append(form);status.textContent='';
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
