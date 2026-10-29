import settings from '../../../../data/control-center/communications.json' with {type:'json'};
import {writableUnits,unitOptions,saveRecord} from './records-common.js';
import {brandedEmail} from './email-template.js';
import {mountAcknowledgments} from './acknowledgments.js';
import {mountMailHealth} from './mail-health.js';

export function validateMacro(value){
 if(!value||typeof value.subject!=='string'||typeof value.body!=='string'||!value.subject.trim()||!value.body.trim()||value.subject.length>200||value.body.length>12000||/[\r\n]/.test(value.subject))throw Error('Enter a subject of up to 200 characters and a message of up to 12,000 characters.');
 for(const field of [value.subject,value.body]){
  const unknown=[...field.matchAll(/{{\s*([^{}]+?)\s*}}/g)].find(match=>!settings.tokens.includes(match[1]));
  if(unknown||/{{|}}/.test(field.replace(/{{\s*(name|artist|reference|tier|reply_email)\s*}}/g,'')))throw Error('Use only the supported template fields.');
 }
 return {subject:value.subject.trim(),body:value.body.trim()};
}
export function resolveMacros(documents=[]){
 const custom=[...new Set(documents.flatMap(row=>row.tags||[]).filter(tag=>/^macro-custom-[a-z0-9-]{1,80}$/.test(tag)))].map(tag=>({id:tag.slice(6),label:'Custom template'}));
 return [...settings.macros,...custom].map(base=>{
  const candidates=documents.filter(row=>row.tags?.includes(settings.tag)&&row.tags.includes('macro-'+base.id)).sort((a,b)=>String(b.updated_at||'').localeCompare(String(a.updated_at||'')));
  for(const row of candidates){try{return {...base,label:String(row.title||base.label).replace(/^Artist reply · /,''),...validateMacro(JSON.parse(row.body)),record:row};}catch{}}
  return base.id.startsWith('custom-')?null:{...base};
 }).filter(Boolean);
}
export function composeReply(macro,row,tier){
 const values={name:row.payload?.name||row.artist_name||'there',artist:row.artist_name||row.payload?.artist||'',reference:row.id||'',tier:String(tier||'').replace(/^./,value=>value.toUpperCase()),reply_email:row.reply_email||row.payload?.email||''};
 const replace=value=>value.replace(/{{\s*(name|artist|reference|tier|reply_email)\s*}}/g,(_,key)=>String(values[key]));
 return {subject:replace(macro.subject).replace(/[\r\n]/g,' '),body:replace(macro.body),recipient:values.reply_email};
}
export async function loadMacros(client,workspace){
 const response=await client.from('control_center_documents').select('id,unit_id,title,body,classification,tags,updated_at').eq('workspace_id',workspace.id).contains('tags',[settings.tag]).order('updated_at',{ascending:false}).limit(200);
 if(response.error)throw Error('Saved reply templates could not be loaded.');
 return resolveMacros(response.data||[]);
}
export async function mountCommunications({content,client,staff,workspace,context,units,e,icon,isCurrent,onSaved}){
 if(workspace.workspace_key!=='artanrecords'){content.textContent='Choose Artanrecords to manage artist reply templates.';return;}
 const macros=await loadMacros(client,workspace);if(!isCurrent())return;
 const writable=staff.permissions.includes('documents.write'),scope=writableUnits(units,workspace,staff);
 content.innerHTML=`<p>${e(settings.description)}</p><h2>${e(settings.title)}</h2><p>Saved templates are private documents for this brand, assigned to a department or office. Find them in Documents &amp; tags under #reply-macro.</p>${writable?`<button type="button" data-new-macro>${icon('core/actions/create/plus.svg')}New template</button>`:''}<label>Template<select data-macro-choice>${macros.map(macro=>`<option value="${e(macro.id)}">${e(macro.label)}</option>`).join('')}</select></label><form data-macro-editor><label>Template name<input name="title" required maxlength="120" ${writable?'':'readonly'}></label><label>Assigned department or office<select name="unit" required ${writable?'':'disabled'}>${unitOptions(scope,e)}</select></label><label>Email subject<input name="subject" maxlength="200" required ${writable?'':'readonly'}></label><label>Message<textarea name="body" rows="14" maxlength="12000" required ${writable?'':'readonly'}></textarea></label><p>Available fields: ${settings.tokens.map(token=>e('{{'+token+'}}')).join(', ')}. Internal review notes are never inserted.</p>${writable?`<button type="submit">${icon('core/actions/save/save.svg')}Save template</button>`:''}<p role="status"></p></form>`;
 const choice=content.querySelector('[data-macro-choice]'),form=content.querySelector('form');
 const preview=document.createElement('section');preview.className='control-center-email-preview';preview.innerHTML='<h2>Email preview</h2><p data-email-preview-notice></p><iframe title="Branded email preview" sandbox="" referrerpolicy="no-referrer"></iframe>';content.append(preview);
 function showPreview(){const draft=composeReply({subject:form.elements.subject.value,body:form.elements.body.value},{artist_name:'Example artist',payload:{name:'Artist'},id:'EXAMPLE-REFERENCE'},'');preview.querySelector('iframe').srcdoc=brandedEmail(draft,{logo:new URL('assets/brand/email-wordmark.png',document.baseURI).href});preview.querySelector('[data-email-preview-notice]').textContent=choice.value==='received'?'Acknowledgment template. Automatic delivery is controlled separately below. Saving this template does not send a test email.':'Preview with example details. Saving this template does not send an email.';}
 function draw(){const macro=macros.find(item=>item.id===choice.value);form.elements.title.value=macro.label;form.elements.subject.value=macro.subject;form.elements.body.value=macro.body;form.elements.unit.value=macro.record?.unit_id||context.office||context.department||scope[0]?.id||'';form.querySelector('[role=status]').textContent=macro.record?'Saved template':'Default template · save to customize for this brand';}
 choice.onchange=()=>{if(form.dataset.dirty==='true'&&!window.confirm('Discard unsaved template changes?')){choice.value=form.dataset.active;return;}draw();showPreview();form.dataset.dirty='false';form.dataset.active=choice.value;};
 form.oninput=()=>{form.dataset.dirty='true';showPreview();};
 content.querySelector('[data-new-macro]')?.addEventListener('click',()=>{if(form.dataset.dirty==='true'&&!window.confirm('Discard unsaved template changes?'))return;const macro={id:'custom-'+crypto.randomUUID(),label:'New template',subject:'',body:''};macros.push(macro);const option=document.createElement('option');option.value=macro.id;option.textContent=macro.label;choice.append(option);choice.value=macro.id;draw();form.dataset.active=macro.id;form.dataset.dirty='false';form.elements.title.focus();});
 form.onsubmit=event=>{event.preventDefault();if(!writable)return;let value;try{value=validateMacro({subject:form.elements.subject.value,body:form.elements.body.value});}catch(error){form.querySelector('[role=status]').textContent=error.message;return;}
  const macro=macros.find(item=>item.id===choice.value);if(!form.elements.title.value.trim()){form.querySelector('[role=status]').textContent='Enter a template name.';return;}
  if(macro.record&&!scope.some(unit=>unit.id===macro.record.unit_id)){form.querySelector('[role=status]').textContent='This template belongs to another department. Ask its owner to edit it.';return;}
  saveRecord(form,()=>client.rpc('control_center_save_document',{record_id:macro.record?.id||null,brand:workspace.id,unit:form.elements.unit.value,document_title:'Artist reply · '+form.elements.title.value.trim(),document_body:JSON.stringify(value,null,2),classification_name:macro.record?.classification||'internal',labels:[...new Set([...(macro.record?.tags||[]),settings.tag,'artist-communication','macro-'+macro.id])]}),onSaved);
 };
 draw();showPreview();form.dataset.active=choice.value;
 const automation=document.createElement('section');automation.className='control-center-email-preview';content.append(automation);mountAcknowledgments({mount:automation,client,staff,e,icon}).catch(()=>{automation.textContent='Automatic acknowledgment status is unavailable.';});
 const health=document.createElement('section');health.className='control-center-email-preview';content.append(health);mountMailHealth({mount:health,client,staff,e,icon});
}
