import settings from '../../../../data/control-center/mail.json' with {type:'json'};
import {useMacConnection} from './mac-connection.js';
export function bindICloudReplies({dialog,row,client,staff,e,icon}){
 const mount=dialog.querySelector('[data-icloud-reply]');
 mount.innerHTML=`<label>From<select data-icloud-from disabled><option>${e(settings.sender)} · setup required</option></select></label><div class="control-center-action-row"><button type="button" data-icloud-verify>${icon(settings.icons.connect)}${e(settings.setupLabel)}</button><button type="button" class="control-center-primary-action" data-icloud-send disabled>${icon(settings.icons.send)}${e(settings.sendLabel)}</button></div><p role="status" data-icloud-status>iCloud sends through your private Mac connection. No Google sender is used.</p>`;
 const from=mount.querySelector('select'),verify=mount.querySelector('[data-icloud-verify]'),send=mount.querySelector('[data-icloud-send]'),status=mount.querySelector('[data-icloud-status]'),subject=dialog.querySelector('[name=subject]'),body=dialog.querySelector('[name=body]');
 let verified=false,locked=false,busy=false,connecting=false,requestId=crypto.randomUUID();
 const connectionImage=verify.querySelector('img'),connectionIcon=document.createElement('span'),connectionLabel=document.createElement('span');
 connectionIcon.className='control-center-operation-icon ui-icon-mask';connectionIcon.setAttribute('aria-hidden','true');
 connectionIcon.style.maskImage=`url("${connectionImage.src}")`;connectionIcon.style.webkitMaskImage=connectionIcon.style.maskImage;
 verify.replaceChildren(connectionIcon,connectionLabel);
 const connectionState=checking=>{verify.dataset.connection=verified?'connected':'disconnected';verify.setAttribute('aria-busy',String(checking));connectionLabel.textContent=checking?settings.checkingLabel:verified?settings.connectedLabel:settings.setupLabel;};
 connectionState(false);status.hidden=true;
 const update=()=>{send.disabled=!verified||locked||busy||!subject.value.trim()||!body.value.trim();};
 async function request(action,{interactive=false,payload}={}){
  const base=await useMacConnection(client,{interactive}),{data,error}=await client.auth.getSession();if(error||!data.session)throw Error('Sign in again before connecting iCloud.');
  const response=await fetch(base+'/api/mail/'+action,{method:payload||action==='verify'?'POST':'GET',headers:{Authorization:'Bearer '+data.session.access_token,'X-Control-Center-Action':'mail',...(payload?{'Content-Type':'application/json'}:{})},body:payload?JSON.stringify(payload):undefined,credentials:'omit',signal:AbortSignal.timeout(60000)});
  if(!response.headers.get('content-type')?.includes('application/json'))throw Error('Enable the iCloud service on your private Mac after account setup.');
  const result=await response.json();return {response,result};
 }
 if(!staff.is_owner){verify.disabled=true;status.hidden=false;status.textContent='The owner must connect the iCloud sending account. You can still copy this draft.';}
 const connect=async(interactive=false)=>{if(locked||busy||connecting||!staff.is_owner)return;connecting=true;verified=false;update();verify.disabled=true;connectionState(true);status.hidden=true;status.textContent='';try{const capability=await request('capabilities',{interactive});if(!capability.response.ok)throw Error(capability.result.error||'iCloud setup is not complete.');const sender=capability.result.senders?.find(item=>item.address===settings.sender);if(!sender)throw Error('The approved Artanrecords sender is not configured.');const checked=await request('verify',{interactive});if(!checked.response.ok||checked.result.verified!==true)throw Error(checked.result.error||'iCloud could not authenticate.');from.innerHTML=`<option value="${e(sender.address)}">${e(sender.address)}</option>`;verified=true;}catch(error){verified=false;from.innerHTML=`<option>${e(settings.sender)} · setup required</option>`;status.hidden=false;status.textContent=error.message||'The private iCloud connection is unavailable.';}finally{connecting=false;verify.disabled=false;connectionState(false);update();}};
 verify.onclick=()=>connect(true);
 dialog.addEventListener('input',update);dialog.addEventListener('change',update);
 send.onclick=async()=>{
  if(send.disabled||locked||busy)return;if(!window.confirm('Send this reply?\nFrom: Artanrecords <'+settings.sender+'>\nTo: '+row.reply_email+'\nSubject: '+subject.value+'\n\nOnly the message shown in this draft will be sent. This cannot be recalled.'))return;
  busy=true;update();verify.disabled=true;status.hidden=false;status.textContent='Sending through iCloud…';
  try{const {response,result}=await request('send',{payload:{enquiry:row.id,requestId,from:settings.sender,subject:subject.value,body:body.value}});
   if(result.status==='accepted'){locked=true;status.textContent='Accepted by iCloud for sending. Delivery is not yet confirmed. Reference: '+requestId;}
   else if(result.status==='uncertain'){locked=true;status.textContent='Sending is uncertain. Do not resend until this reference is checked: '+requestId;}
   else{requestId=crypto.randomUUID();status.textContent=result.error||(response.ok?'No sending receipt was returned.':'The reply was not sent.');}
  }catch{locked=true;status.textContent='The result could not be confirmed. Do not resend until this reference is checked: '+requestId;}
  finally{busy=false;verify.disabled=locked;subject.readOnly=locked;body.readOnly=locked;update();}
 };
 return ()=>connect(false);
}
