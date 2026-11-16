import {agreementPdf} from './shared/agreement-pdf.js';
import printStyles from '../../../../css/layers/control-center/shared/agreement-print.css';

export async function exportDraftPdf(record){
 const now=new Date().toISOString();
 const bytes=await agreementPdf({envelope:{id:record.id,status:'draft',created_at:now,updated_at:now,rehearsal:false},version:{terms:{kind:'agreement_draft_v1',title:record.title,body:record.body}},signatures:[],events:[]});
 const url=URL.createObjectURL(new Blob([bytes],{type:'application/pdf'})),link=document.createElement('a');
 link.href=url;link.download=(record.title.replace(/[^a-z0-9._-]+/gi,'-').slice(0,120)||'agreement')+'-draft.pdf';link.click();setTimeout(()=>URL.revokeObjectURL(url),60000);
}

export async function printDraft(snapshot){
 const view=window.open('','_blank');if(!view)throw Error('Allow the print window in your browser, then try again.');view.opener=null;
 try{
  const record=await snapshot();if(!record)throw Error('Save the draft before printing.');
  const page=view.document;page.title=record.title;
  const css=page.createElement('style');css.textContent=printStyles;page.head.append(css);
  const logo=page.createElement('img');logo.src=new URL('/assets/brand/email-wordmark.png',location.origin).href;logo.alt='Artanrecords';
  const title=page.createElement('h1'),notice=page.createElement('p'),text=page.createElement('article');title.textContent=record.title;notice.textContent='DRAFT - NOT ISSUED OR SIGNED';text.textContent=record.body;page.body.replaceChildren(logo,title,notice,text);
  await logo.decode();view.focus();view.print();
 }catch(error){view.close();throw error;}
}
