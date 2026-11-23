import isoCountries from 'i18n-iso-countries';
import english from 'i18n-iso-countries/langs/en.json' with {type:'json'};
import labels from '../../../../data/control-center/agreements.json' with {type:'json'};
import {agreementPdf} from './shared/agreement-pdf.js';
import {printAgreementPdf} from './shared/agreement-pdf-view.js';
import {showSaveConfirmation} from './shared/toast.js';

isoCountries.registerLocale(english);
export function artistDetailsActions({host,client,row,version,icon,onSaved,canWrite}){
 const document=host.ownerDocument,copy=labels.artistActions;
 let pdfPromise;
 const pdfUrl=()=>pdfPromise||(pdfPromise=(async()=>{
  const body=Object.entries(labels.fields).filter(([key])=>Object.hasOwn(version.details,key)).map(([key,label])=>label+': '+version.details[key]).join('\n\n')+'\n\nVerified reply email: '+version.reply_email;
  const bytes=await agreementPdf({envelope:{id:version.id,status:row.status,created_at:version.confirmed_at,rehearsal:false},version:{version_number:version.version_number,terms:{kind:'artist_details_record_v1',title:copy.exportTitle+' · '+(version.details.artist_name||version.details.legal_name),notice:copy.exportNotice,body}},signatures:[],events:[]});
  const url=URL.createObjectURL(new Blob([bytes],{type:'application/pdf'}));setTimeout(()=>{URL.revokeObjectURL(url);pdfPromise=null;},600000);return url;
 })().catch(error=>{pdfPromise=null;throw error;}));
 const actions={print:()=>printAgreementPdf(pdfUrl,copy.exportTitle),export:async()=>{const link=document.createElement('a');link.href=await pdfUrl();link.download='artist-details-'+version.id+'.pdf';link.click();}};
 if(!canWrite||row.rehearsal||row.status==='closed')return actions;
 actions.edit=()=>{
  const dialog=document.createElement('dialog'),header=document.createElement('header'),title=document.createElement('h2'),close=document.createElement('button'),form=document.createElement('form'),status=document.createElement('p');dialog.className='control-center-reply-dialog';dialog.setAttribute('aria-label',copy.editorTitle);header.className='control-center-dialog-header';title.textContent=copy.editorTitle;close.type='button';close.className='global-close-button';close.setAttribute('aria-label','Close artist details editor');form.className='control-center-issue-form';status.setAttribute('role','status');header.append(title,close);dialog.append(header,form);host.append(dialog);window.NeuroartanCloseButtons?.initCloseButtonPrimitive(dialog);
  const company=version.details.recipient_type==='company';
  for(const [key,label]of Object.entries(labels.fields)){
   if(!company&&['company_name','registration_number','signatory_name','signatory_capacity'].includes(key))continue;
   if(key==='username'||key==='recipient_type')continue;
   const field=document.createElement('label'),input=document.createElement(key==='country_code'?'select':'input');field.textContent=label;input.name=key;input.className='ui-field';input.setAttribute('aria-label',label);
   if(key==='country_code'){for(const [code,name]of Object.entries(isoCountries.getNames('en',{select:'official'})).sort((a,b)=>a[1].localeCompare(b[1]))){const option=document.createElement('option');option.value=code;option.textContent=String.fromCodePoint(...[...code].map(letter=>127397+letter.charCodeAt(0)))+' '+name;input.append(option);}}
   else{input.type=key==='date_of_birth'?'date':key==='phone'?'tel':'text';input.maxLength=300;if(key==='date_of_birth')input.max=new Date().toISOString().slice(0,10);}
   input.value=version.details[key]||'';input.required=['legal_name','artist_name','address_line1','city','postal_code','country_code',...(company?['company_name','registration_number','signatory_name','signatory_capacity']:[])].includes(key);field.append(input);form.append(field);
  }
  const reasonLabel=document.createElement('label'),reason=document.createElement('textarea'),save=document.createElement('button');reasonLabel.textContent=copy.reason;reason.name='reason';reason.rows=3;reason.required=true;reason.minLength=10;reason.maxLength=2000;reasonLabel.append(reason);save.type='submit';save.className='control-center-success-action';save.innerHTML=icon('core/actions/save/save.svg');save.append(document.createTextNode(copy.save));form.append(reasonLabel,save,status);
  close.onclick=()=>dialog.close();dialog.addEventListener('close',()=>dialog.remove());form.onsubmit=async event=>{event.preventDefault();if(!form.reportValidity())return;form.inert=true;status.textContent='';try{const payload={...version.details};for(const field of form.elements)if(field.name&&field.name!=='reason')payload[field.name]=field.value.trim();const saved=await client.rpc('control_center_correct_agreement_details',{request:row.id,expected_version:version.id,payload,reason:reason.value.trim(),confirmed:true});if(saved.error||!saved.data)throw Error(saved.error?.message||copy.failed);dialog.close();await onSaved();showSaveConfirmation(copy.saved);}catch(error){status.textContent=error.message||copy.failed;form.inert=false;}};
  dialog.showModal();form.querySelector('input,select')?.focus();
 };
 return actions;
}
