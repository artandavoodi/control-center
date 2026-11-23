import {bindICloudReplies} from './icloud-replies.js';
import labels from '../../../../data/control-center/agreements.json' with {type:'json'};
import signingLabels from '../../../../data/control-center/agreement-rehearsal.json' with {type:'json'};
import {agreementDateSummary} from './agreement-dates.js';
import {draftTextDigest} from './draft-save.js';
import {renderReviewChecklist} from './shared/review-checklist.js';
import {labelReviewContent,requiredAgreementFields} from './agreement-templates.js';

export async function findExistingAgreementEnvelope({client,sourceDocumentId,workspaceId,accountId}){
 if(!sourceDocumentId||!workspaceId||!accountId)return null;
 const found=await client.from('studio_agreement_envelopes').select('id,status,source_document_id,account_id,workspace_id,rehearsal').eq('source_document_id',sourceDocumentId).eq('workspace_id',workspaceId).eq('account_id',accountId).eq('rehearsal',false).order('created_at',{ascending:false}).limit(1).maybeSingle();
 if(found.error)throw Error(signingLabels.existingUnavailable);
 const envelope=found.data;
 return envelope?.rehearsal===false&&envelope.source_document_id===sourceDocumentId&&envelope.account_id===accountId&&envelope.workspace_id===workspaceId?envelope:null;
}

// Issuing is separate from saving, PDF preview, email delivery and final access approval.
export async function mountAgreementIssuance({root,dialog,client,staff,workspace,record,e,icon,isCurrent,onIssued,onResolve,onSaveReview,onPrepareFinal}){
 const copy=labels.issuance;
 root.replaceChildren();
 const status=document.createElement('p');status.className='agreement-loading-status';status.setAttribute('role','status');status.innerHTML='<span class="ui-loader-circle" aria-label="Checking contract"></span>';root.append(status);
 if(!record){status.textContent=copy.saveFirst;return;}
 const stillCurrent=()=>root.isConnected&&dialog.open&&isCurrent();
 const reference=record.artist_intake_version_id;
 const fields=record.draft_state?.fields;
 const blockers=[];
 const labelSaved=record.draft_state?.label_saved_sha256===await draftTextDigest(labelReviewContent(record));
 if(fields&&Object.hasOwn(fields,'label legal name')&&!labelSaved)blockers.push({message:'Review and save the label details for this copy.',action:'Review label details',field:'label signatory'});
 if(fields&&(/pending|no approval|not approved|proposed/i.test(fields['legal review']||'')||!fields['legal review']?.trim()))blockers.push({message:'Legal approval has not been recorded for this version.',action:'Review legal approval',field:'legal review'});
 if(/\bdraft\b/i.test(record.title)||/WORKING DRAFT|NOT ISSUED FOR SIGNATURE|NON-BINDING REHEARSAL|current Studio preview is non-binding/i.test(record.body))blockers.push({message:'The text is a working draft. Editing or saving it does not record legal approval.',action:'Edit document text',field:'text'});
 if(!blockers.some(item=>item.field==='text')&&/\[[^\]]+ - required\]|PENDING[^\n]*NO APPROVAL|PROPOSED FOR (REVIEW|CONFIRMATION)/i.test(record.body))blockers.push({message:'Required or proposed terms remain unresolved in the document.',action:'Review contract terms',field:'text'});
 if(!reference)blockers.push({message:copy.recipientRequired});
 const result=reference?await client.from('studio_agreement_intake_requests').select('id,account_id,current_version_id,status,rehearsal').eq('workspace_id',workspace.id).eq('current_version_id',reference).eq('status','approved').eq('rehearsal',false).single():{data:null};
 if(!stillCurrent())return;
 if(reference&&(result.error||!result.data))blockers.push({message:copy.recipientRequired});
 const intake=result.data,tier=record.tags.find(tag=>/^partnership-(silver|gold|platinum)$/.test(tag))?.slice('partnership-'.length);
 const artistId=record.artist_account_id||intake?.account_id;
 const existingEnvelope=()=>findExistingAgreementEnvelope({client,sourceDocumentId:record.id,workspaceId:workspace.id,accountId:artistId});
 const showExisting=envelope=>{
  const state=document.createElement('p'),open=document.createElement('button');status.textContent=signingLabels.sentToSigning;state.textContent=signingLabels.execution.states[envelope.status]||envelope.status;open.type='button';open.className='ui-button';open.innerHTML=icon('core/legal/contracts/signature.svg')+e(signingLabels.openSigningRecord);open.onclick=()=>{dialog.close();onIssued?.(envelope.id);};root.replaceChildren(status,state,open);
 };
 try{const existing=await existingEnvelope();if(!stillCurrent())return;if(existing){showExisting(existing);return;}}catch(error){if(stillCurrent())status.textContent=error.message;return;}
 const normalize=value=>String(value||'').normalize('NFKC').trim().toLocaleLowerCase().replace(/\s+/g,' ');
 const sameName=fields&&normalize(fields['label signatory'])&&normalize(fields['label signatory'])===normalize(fields['artist legal name']);
 if(!tier)blockers.push({message:'Select the partnership tier before issuing this agreement.',system:true});
 if(intake?.account_id===staff.account_id)blockers.push({message:'The artist and label signer use the same account. A different authorized label signer is required before issuing.',system:true});
 else if(sameName)blockers.push({message:copy.partiesRequired,system:true});
 if(fields&&!agreementDateSummary(fields['effective date'],fields['expiry date'])&&!blockers.some(item=>item.field==='effective date'))blockers.push({message:copy.dateError,action:'Select contract dates',field:'effective date'});
 const ready=await client.rpc('control_center_agreement_execution_ready',{brand:workspace.id,unit:record.unit_id});
 if(!stillCurrent())return;
 if(ready.error||ready.data!==true)blockers.push({message:copy.unavailable,system:true});
 if(blockers.length){
  const heading=document.createElement('h3'),list=document.createElement('ul'),steps=[];heading.textContent='Before signing';
  if(fields?.['legal review']?.trim()&&!blockers.some(item=>item.field==='legal review'))steps.push({id:'legal-review',state:'complete',label:'Review note saved'});
  if(labelSaved)steps.push({id:'label-signatory',state:'complete',label:'Label details saved'});
  const reviewBlockers=blockers.filter(item=>!item.system&&['label signatory','legal review'].includes(item.field));
  for(const [index,blocker]of reviewBlockers.entries()){
   steps.push({id:blocker.field.replaceAll(' ','-'),state:'blocked',label:blocker.message,icon:blocker.field==='legal review'?'core/legal/contracts/contract.svg':'core/identity/profile/user.svg',action:onResolve?{label:blocker.action,run:()=>{if(blocker.field==='legal review'&&onSaveReview){mountLegalReview();return;}dialog.close();onResolve(blocker.field);}}:null});
  }
  renderReviewChecklist(list,{steps,icon,onError:error=>{status.textContent=error.message;}});
  const finalize=document.createElement('button');finalize.type='button';finalize.className='control-center-primary-action';finalize.disabled=true;finalize.innerHTML=icon('core/legal/contracts/signature.svg')+e(labels.finalizationAction);finalize.setAttribute('aria-describedby','contract-finalization-blockers');list.id='contract-finalization-blockers';
  status.textContent='Nothing has been sent.';if(list.children.length)root.append(heading,list);
  const missing=requiredAgreementFields(record.body).filter(key=>key!=='legal review'),dates=blockers.find(item=>item.field==='effective date');
  if(missing.length||dates){const fix=document.createElement('button');fix.type='button';fix.innerHTML=icon('core/actions/edit/edit.svg')+'Complete contract';fix.onclick=()=>{dialog.close();onResolve?.(missing[0]||'effective date');};root.append(fix);}
  const textPending=blockers.some(item=>item.field==='text'),sendingBlocked=blockers.some(item=>item.system||!item.field);
  if(!textPending){status.textContent=labels.finalizedTextStatus;finalize.innerHTML=icon('core/legal/contracts/signature.svg')+e(labels.sendFinalAction);}
  if(onPrepareFinal&&tier&&!missing.length&&textPending&&blockers.every(item=>item.system||item.field==='text')){finalize.disabled=false;if(sendingBlocked)finalize.innerHTML=icon('core/legal/contracts/contract.svg')+e(labels.finalizeTextAction);finalize.onclick=async()=>{finalize.disabled=true;try{record=await onPrepareFinal();await mountAgreementIssuance({root,dialog,client,staff,workspace,record,e,icon,isCurrent,onIssued,onResolve,onSaveReview,onPrepareFinal});}catch(error){status.textContent=error.message||'The contract could not be prepared. Nothing has been sent.';finalize.disabled=false;}};}
  for(const unavailable of blockers.filter(item=>item.system||!item.field)){const notice=document.createElement('p');notice.textContent=unavailable.message;root.append(notice);}root.append(finalize);
  return;
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
  }catch(error){
   try{const existing=await existingEnvelope();if(!stillCurrent())return;if(existing){showExisting(existing);return;}}catch{message.textContent=signingLabels.existingUnavailable;form.inert=false;return;}
   if(stillCurrent()){message.textContent=error.message||copy.issueError;form.inert=false;}
  }
 };
}

export async function prepareAgreementEmail({root,client,staff,envelope,e,icon}){
 const copy=envelope.rehearsal?{...labels.issuance,...labels.verificationEmail}:labels.issuance;
 const {dialog,status,mail}=createAgreementEmailDialog({root,title:copy.emailTitle,e});status.innerHTML='<span class="ui-loader-circle" aria-label="Preparing invitation"></span>';
 const link=await client.rpc(envelope.rehearsal?'control_center_signing_verification_link':'control_center_agreement_signing_link',{envelope:envelope.id});
 if(!dialog.isConnected)return;
 if(link.error||!link.data?.token){status.textContent=copy.linkError;return;}
 const url=new URL(labels.studioUrl);url.hash=new URLSearchParams({token:link.data.token}).toString();
 mail.querySelector('[name=recipient]').value=link.data.recipient_email;mail.hidden=false;
 mail.querySelector('[name=subject]').value=copy.subject;mail.querySelector('[name=body]').value=copy.body.replace('{url}',url.href).replace('{expiry}',new Date(link.data.expires_at).toLocaleString());
 status.textContent=copy.issued;
 const connect=bindICloudReplies({dialog:mail,row:{id:link.data.enquiry,reply_email:link.data.recipient_email},client,staff,e,icon});
 mail.addEventListener('icloud:accepted',()=>{status.textContent=copy.emailAccepted;});mail.addEventListener('icloud:uncertain',()=>{status.textContent=copy.emailUncertain;});connect();
}

export function createAgreementEmailDialog({root,title,name=title,closeLabel='Close signing invitation',e}){
 const host=root?.closest('.control-center-operations')||root?.querySelector('.control-center-operations');
 if(!host)throw Error('Open the invitation from the Control Center workspace.');
 const copy=labels.issuance,dialog=document.createElement('dialog');dialog.className='control-center-reply-dialog';dialog.setAttribute('aria-label',name);
 dialog.innerHTML=`<header class="control-center-dialog-header"><h2>${e(title)}</h2><button type="button" class="global-close-button" aria-label="${e(closeLabel)}"></button></header><p role="status"></p><section class="control-center-issue-form" data-contract-mail hidden><label>${e(copy.to)}<input name="recipient" readonly></label><label>${e(copy.subjectLabel)}<input name="subject" maxlength="300"></label><label>${e(copy.messageLabel)}<textarea name="body" maxlength="16000" rows="8"></textarea></label><div data-icloud-reply></div></section>`;
 host.append(dialog);window.NeuroartanCloseButtons?.initCloseButtonPrimitive(dialog);dialog.querySelector('button').onclick=()=>dialog.close();dialog.showModal();
 return {dialog,status:dialog.querySelector('[role=status]'),mail:dialog.querySelector('[data-contract-mail]')};
}
