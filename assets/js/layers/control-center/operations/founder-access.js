import labels from '../../../../data/control-center/founder-access.json' with {type:'json'};

export function mountFounderAccess({root,client,isCurrent,workspaceId,accountId,icon=()=>''}){
 if(!accountId)return;
 const open=document.createElement('button');open.type='button';open.className='ui-button';open.innerHTML=icon('core/identity/account/account.svg');open.append(document.createTextNode(labels.open));root.append(open);
 open.onclick=async()=>{
  const dialog=document.createElement('dialog');dialog.className='agreement-focus';dialog.setAttribute('aria-label',labels.title);
  const header=document.createElement('header'),title=document.createElement('h2'),close=document.createElement('button'),body=document.createElement('section'),status=document.createElement('p');
  header.className='control-center-dialog-header';title.textContent=labels.title;close.type='button';close.className='global-close-button';close.setAttribute('aria-label',labels.close);header.append(title,close);body.className='control-center-issue-form';body.dataset.envelopeContent='';status.setAttribute('role','status');status.innerHTML='<span class="ui-loader-circle" aria-label="Loading access"></span>';body.append(status);dialog.append(header,body);root.append(dialog);
  window.NeuroartanCloseButtons?.initCloseButtonPrimitive(dialog);close.onclick=()=>dialog.close();dialog.addEventListener('close',()=>{dialog.remove();open.focus();},{once:true});dialog.showModal();
  const current=()=>isCurrent()&&dialog.isConnected&&dialog.open;
  try{
   const response=await client.rpc('control_center_founder_access_status',{artist:accountId,brand:workspaceId});
   if(!current())return;if(response.error||response.data?.account_id!==accountId||!response.data.email)throw Error();
   const access=response.data,notice=document.createElement('p'),emailLabel=document.createElement('label'),email=document.createElement('input');notice.textContent=labels.notice;emailLabel.textContent=labels.email;email.type='email';email.readOnly=true;email.value=access.email;emailLabel.append(email);body.prepend(notice,emailLabel);status.textContent=access.active?labels.active:labels.inactive;
   if(access.active){
    const expiry=document.createElement('p');expiry.textContent=labels.expires+': '+new Date(access.ends_at).toLocaleDateString();body.append(expiry);
    const revoke=document.createElement('button');revoke.type='button';revoke.className='ui-button';revoke.innerHTML=icon('core/actions/delete/delete.svg');revoke.append(document.createTextNode(labels.revoke));body.append(revoke);
    revoke.onclick=async()=>{if(!window.confirm(labels.revokeConfirm))return;revoke.disabled=true;try{const result=await client.rpc('control_center_revoke_founder_access',{artist:accountId,brand:workspaceId,confirmed:true});if(result.error||result.data?.active!==false)throw Error();if(current()){status.textContent=labels.revoked;revoke.remove();}}catch{if(current()){status.textContent=labels.failed;revoke.disabled=false;}}};
   }else{
    const form=document.createElement('form');form.className='control-center-issue-form';
    const planLabel=document.createElement('label'),plan=document.createElement('select'),expiryLabel=document.createElement('label'),expiry=document.createElement('input'),reasonLabel=document.createElement('label'),reason=document.createElement('textarea');planLabel.textContent=labels.plan;plan.name='plan';for(const item of labels.plans){const option=document.createElement('option');option.value=item.id;option.textContent=item.label;plan.append(option);}plan.value='studio-pro';planLabel.append(plan);
    expiryLabel.textContent=labels.expires;expiry.type='date';expiry.name='expires';expiry.required=true;const tomorrow=new Date(Date.now()+86400000),limit=new Date(Date.now()+365*86400000);expiry.min=tomorrow.toISOString().slice(0,10);expiry.max=expiry.value=limit.toISOString().slice(0,10);expiryLabel.append(expiry);
    reasonLabel.textContent=labels.reason;reason.name='reason';reason.required=true;reason.minLength=10;reason.maxLength=2000;reason.rows=3;reason.value=labels.defaultReason;reasonLabel.append(reason);
    const confirmation=document.createElement('label'),check=document.createElement('input'),text=document.createElement('span'),submit=document.createElement('button');confirmation.className='control-center-operation-check';check.type='checkbox';check.required=true;text.textContent=labels.confirm;confirmation.append(check,text);submit.type='submit';submit.className='control-center-success-action';submit.innerHTML=icon('core/actions/save/save.svg');submit.append(document.createTextNode(labels.activate));form.append(planLabel,expiryLabel,reasonLabel,confirmation,submit);body.append(form);
    form.onsubmit=async event=>{event.preventDefault();if(!form.reportValidity()||!check.checked)return;form.inert=true;try{const result=await client.rpc('control_center_grant_founder_access',{artist:accountId,brand:workspaceId,expected_email:access.email,access_plan:plan.value,expires_at:expiry.value+'T23:59:59Z',note:reason.value.trim(),confirmed:true});if(result.error||result.data?.account_id!==accountId||result.data.active!==true)throw Error();if(current()){status.textContent=labels.success;form.remove();}}catch{if(current()){status.textContent=labels.failed;form.inert=false;}}};
   }
   const link=document.createElement('a');link.className='ui-button';link.textContent=labels.studio;link.href=['localhost','127.0.0.1'].includes(location.hostname)?labels.localStudioUrl:labels.studioUrl;link.target='_blank';link.rel='noopener';body.append(link);
  }catch{if(current())status.textContent=labels.unavailable;}
 };
}
