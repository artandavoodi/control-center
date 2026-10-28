import settings from '../../../../data/control-center/communications.json' with {type:'json'};
import {writableUnits,unitOptions,saveRecord} from './records-common.js';

export function validateMacro(value){
 if(!value||typeof value.subject!=='string'||typeof value.body!=='string'||!value.subject.trim()||!value.body.trim()||value.subject.length>200||value.body.length>12000||/[\r\n]/.test(value.subject))throw Error('Enter a subject of up to 200 characters and a message of up to 12,000 characters.');
 for(const field of [value.subject,value.body]){
  const unknown=[...field.matchAll(/{{\s*([^{}]+?)\s*}}/g)].find(match=>!settings.tokens.includes(match[1]));
  if(unknown||/{{|}}/.test(field.replace(/{{\s*(name|artist|reference|tier|reply_email)\s*}}/g,'')))throw Error('Use only the supported template fields.');
 }
 return {subject:value.subject.trim(),body:value.body.trim()};
}
export function resolveMacros(documents=[]){
 return settings.macros.map(base=>{
  const candidates=documents.filter(row=>row.tags?.includes(settings.tag)&&row.tags.includes('macro-'+base.id)).sort((a,b)=>String(b.updated_at||'').localeCompare(String(a.updated_at||'')));
  for(const row of candidates){try{return {...base,...validateMacro(JSON.parse(row.body)),record:row};}catch{}}
  return {...base};
 });
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
 content.innerHTML=`<p>${e(settings.description)}</p><h2>${e(settings.title)}</h2><p>Saved templates are private documents for this brand, assigned to a department or office. Find them in Documents &amp; tags under #reply-macro.</p><label>Template<select data-macro-choice>${macros.map(macro=>`<option value="${e(macro.id)}">${e(macro.label)}</option>`).join('')}</select></label><form data-macro-editor><label>Assigned department or office<select name="unit" required ${writable?'':'disabled'}>${unitOptions(scope,e)}</select></label><label>Email subject<input name="subject" maxlength="200" required ${writable?'':'readonly'}></label><label>Message<textarea name="body" rows="14" maxlength="12000" required ${writable?'':'readonly'}></textarea></label><p>Available fields: ${settings.tokens.map(token=>e('{{'+token+'}}')).join(', ')}. Internal review notes are never inserted.</p>${writable?`<button type="submit">${icon('core/actions/save/save.svg')}Save template</button>`:''}<p role="status"></p></form>`;
 const choice=content.querySelector('[data-macro-choice]'),form=content.querySelector('form');
 function draw(){const macro=macros.find(item=>item.id===choice.value);form.elements.subject.value=macro.subject;form.elements.body.value=macro.body;form.elements.unit.value=macro.record?.unit_id||context.office||context.department||scope[0]?.id||'';form.querySelector('[role=status]').textContent=macro.record?'Saved template':'Default template · save to customize for this brand';}
 choice.onchange=()=>{if(form.dataset.dirty==='true'&&!window.confirm('Discard unsaved template changes?')){choice.value=form.dataset.active;return;}draw();form.dataset.dirty='false';form.dataset.active=choice.value;};
 form.oninput=()=>{form.dataset.dirty='true';};
 form.onsubmit=event=>{event.preventDefault();if(!writable)return;let value;try{value=validateMacro({subject:form.elements.subject.value,body:form.elements.body.value});}catch(error){form.querySelector('[role=status]').textContent=error.message;return;}
  const macro=macros.find(item=>item.id===choice.value);
  if(macro.record&&!scope.some(unit=>unit.id===macro.record.unit_id)){form.querySelector('[role=status]').textContent='This template belongs to another department. Ask its owner to edit it.';return;}
  saveRecord(form,()=>client.rpc('control_center_save_document',{record_id:macro.record?.id||null,brand:workspace.id,unit:form.elements.unit.value,document_title:'Artist reply · '+macro.label,document_body:JSON.stringify(value,null,2),classification_name:macro.record?.classification||'internal',labels:[...new Set([...(macro.record?.tags||[]),settings.tag,'artist-communication','macro-'+macro.id])]}),onSaved);
 };
 draw();form.dataset.active=choice.value;
}
