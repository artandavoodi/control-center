import copy from '../../../../data/control-center/studio-access-email.json' with {type:'json'};
import {createAgreementEmailDialog} from './agreement-issuance.js';
import {bindICloudReplies} from './icloud-replies.js';
export async function prepareStudioAccessEmail({root,client,staff,envelope,e,icon}){
 const {dialog,status,mail}=createAgreementEmailDialog({root,title:copy.title,closeLabel:'Close Studio access email',e});
 const prepare=document.createElement('button');prepare.type='button';prepare.className='ui-button control-center-success-action';prepare.innerHTML=icon('core/actions/reset/reset.svg')+e(copy.prepare);status.textContent=copy.notice;status.after(prepare);
 prepare.onclick=async()=>{prepare.disabled=true;status.innerHTML='<span class="ui-loader-circle" aria-label="Preparing access email"></span>';try{
  const result=await client.functions.invoke('studio-access-email',{body:{envelope:envelope.id}});if(result.error||!result.data?.code)throw Error();const data=result.data;
  mail.querySelector('[name=recipient]').value=data.recipient_email;mail.querySelector('[name=subject]').value=copy.subject;mail.querySelector('[name=body]').value=copy.body.replace('{username}',data.username).replace('{code}',data.code).replace('{url}',data.setup_url);mail.hidden=false;prepare.hidden=true;status.textContent=copy.ready;
  const connect=bindICloudReplies({dialog:mail,row:{id:data.enquiry,reply_email:data.recipient_email},client,staff,e,icon});mail.addEventListener('icloud:accepted',()=>{status.textContent=copy.sent;});connect();
 }catch{status.textContent=copy.failed;prepare.disabled=false;}};
 try{const result=await client.rpc('control_center_studio_access_progress',{envelope:envelope.id});if(!result.error&&result.data){const progress=document.createElement('p'),data=result.data;progress.textContent=data.setup_completed_at?copy.setupComplete+' · '+new Date(data.setup_completed_at).toLocaleString():copy.setupPending+(data.code_requested_at?' · '+copy.codeRequested+': '+new Date(data.code_requested_at).toLocaleString():'');status.before(progress);}}catch{}
}
