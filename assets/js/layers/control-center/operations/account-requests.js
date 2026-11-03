import labels from '../../../../data/control-center/account-requests.json' with {type:'json'};
export async function mountAccountRequests({root,client,isCurrent,onSaved,workspaceId}){
 root.classList.add('control-center-account-requests');
 const title=document.createElement('h2'),notice=document.createElement('p');title.textContent=labels.title;notice.textContent=labels.notice;root.replaceChildren(title,notice);
 try{const owner=await client.rpc('control_center_account_request_owner');if(owner.error||owner.data!==true)throw Error();const response=await client.from('studio_account_change_requests').select('id,account_id,kind,reason,status,review_note,updated_at,created_at').order('created_at',{ascending:false}).limit(100);if(response.error)throw response.error;if(!isCurrent())return;
  for(const row of response.data||[]){const article=document.createElement('article');article.className='control-center-review';const heading=document.createElement('h3'),state=document.createElement('p'),reference=document.createElement('code'),account=document.createElement('p'),reason=document.createElement('p'),note=document.createElement('p');heading.textContent=labels.kinds[row.kind];state.textContent=labels.statuses[row.status];reference.textContent=row.id;account.textContent='Artist account: '+row.account_id;reason.textContent=row.reason;note.textContent=row.review_note;article.append(heading,state,reference,account,reason,note);root.append(article);
   state.className='control-center-review-status';state.dataset.tone=row.status==='submitted'?'new':['under_review','approved'].includes(row.status)?'review':row.status==='declined'?'declined':'neutral';
   const facts=document.createElement('dl');facts.className='control-center-request-facts';
   const fact=(label,value)=>{const group=document.createElement('div'),name=document.createElement('dt'),detail=document.createElement('dd');name.textContent=label;detail.textContent=value;group.append(name,detail);facts.append(group);};
   let identity;
   if(workspaceId){const found=await client.rpc('control_center_search_artists',{search_text:row.account_id,brand:workspaceId});if(!found.error)identity=found.data?.find(artist=>artist.account_id===row.account_id);}
   if(!isCurrent())return;
   fact(labels.artist,identity?.artist_name||labels.unresolvedArtist);
   if(identity?.username)fact(labels.username,'@'+identity.username);
   if(identity?.partnership)fact(labels.partnership,identity.partnership);
   fact(labels.reference,row.id);fact(labels.account,row.account_id);
   reference.replaceWith(facts);account.remove();
   const reasonTitle=document.createElement('h4');reasonTitle.textContent=labels.reason;reason.before(reasonTitle);
   if(!row.review_note)note.remove();
   else {const noteTitle=document.createElement('h4');noteTitle.textContent=labels.savedNote;note.before(noteTitle);}
   if(['submitted','under_review'].includes(row.status)){
    const form=document.createElement('form'),decision=document.createElement('select'),field=document.createElement('textarea'),button=document.createElement('button'),status=document.createElement('p'),decisionLabel=document.createElement('label'),noteLabel=document.createElement('label');
    form.className='control-center-account-request-review';decision.name='decision';
    const caption=document.createElement('span');caption.id='request-decision-label-'+row.id;caption.textContent=labels.decision;decision.setAttribute('aria-labelledby',caption.id);
    for(const value of ['under_review','approved','declined']){const option=document.createElement('option');option.value=value;option.textContent=labels.statuses[value];decision.append(option);}
    decisionLabel.append(caption,decision);noteLabel.textContent=labels.note;field.name='note';field.required=true;field.minLength=10;field.maxLength=2000;field.rows=4;noteLabel.append(field);
    const confirmation=document.createElement('label'),confirmed=document.createElement('input'),confirmationText=document.createElement('span');confirmation.className='control-center-operation-check';confirmed.type='checkbox';confirmed.required=true;confirmationText.textContent=labels.confirm;confirmation.append(confirmed,confirmationText);
    button.type='submit';button.className='control-center-primary-action';button.textContent=labels.review;status.setAttribute('role','status');
    decision.onchange=()=>button.dataset.decision=decision.value;decision.onchange();
    form.append(decisionLabel,noteLabel,confirmation,button,status);article.append(form);
    form.onsubmit=async event=>{event.preventDefault();if(!form.reportValidity()||!confirmed.checked)return;form.inert=true;try{const saved=await client.rpc('control_center_review_account_change',{request:row.id,expected_updated:row.updated_at,decision:decision.value,note:field.value.trim()});if(saved.error)throw saved.error;await onSaved();}catch{status.textContent=labels.reviewError;}finally{form.inert=false;}};
   }
  }
  if(!response.data?.length){const empty=document.createElement('p');empty.textContent=labels.empty;root.append(empty);}
 }catch{const error=document.createElement('p');error.setAttribute('role','status');error.textContent=labels.unavailable;root.append(error);}
}
