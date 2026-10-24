export function descendants(units,id){
 const selected=new Set(id?[id]:[]);let size=-1;
 while(size!==selected.size){size=selected.size;units.forEach(unit=>{if(selected.has(unit.parent_id))selected.add(unit.id);});}
 return selected;
}
export function normalizeContext(value,units,workspace){
 const department=units.find(unit=>unit.id===value.department&&unit.kind==='department'&&unit.parent_id===workspace.id&&unit.active);
 const office=units.find(unit=>unit.id===value.office&&unit.kind==='office'&&unit.parent_id===department?.id&&unit.active);
 return {function:value.function||'operations',...(['design','local-development'].includes(value.function)&&value.allBrands===true?{allBrands:true}:{}),department:department?.id||'',office:office?.id||''};
}
export function mountContextPicker({root,config,nav,workspaces,workspace,context,units,e,icon,onApply}){
 const dialog=root.querySelector('[data-context-dialog]');
 const functions=config.workspaces.filter(group=>nav.some(item=>item.workspace===group.id));
 dialog.innerHTML=`<form method="dialog" class="control-center-context-form"><header><h2 id="context-title">Choose workspace</h2><button type="button" class="global-close-button" data-context-close aria-label="Close workspace picker"></button></header><label>Workspace<select name="function">${functions.map(group=>`<option value="${e(group.id)}">${e(group.label)}</option>`).join('')}</select></label><label>Brand<select name="brand">${workspaces.map(item=>`<option value="${e(item.id)}">${e(item.name)}</option>`).join('')}</select></label><label>Department<select name="department"></select></label><label>Office<select name="office"></select></label><p class="control-center-field-note">Leave department or office unselected to view everything available at that level. Your permissions remain unchanged.</p><button type="submit">${icon(config.chrome.open)}Open workspace</button></form>`;
 const form=dialog.querySelector('form');
 const globalOption=document.createElement('option');globalOption.value='all';globalOption.textContent='All brands';form.elements.brand.prepend(globalOption);
 function globalScope(){const global=['design','local-development'].includes(form.elements.function.value);globalOption.disabled=!global;if(!global&&form.elements.brand.value==='all')form.elements.brand.value=workspace.id;}
 form.elements.function.addEventListener('change',()=>{globalScope();brand();});
 function options(select,rows,label,value){select.innerHTML=`<option value="">${label}</option>`+rows.map(item=>`<option value="${e(item.id)}">${e(item.name)}</option>`).join('');select.value=rows.some(item=>item.id===value)?value:'';}
 function departments(value='',office=''){options(form.elements.department,units.filter(unit=>unit.kind==='department'&&unit.parent_id===form.elements.brand.value&&unit.active),'All departments',value);offices(office);}
 function offices(value=''){options(form.elements.office,units.filter(unit=>unit.kind==='office'&&unit.parent_id===form.elements.department.value&&unit.active),'All offices',value);form.elements.office.disabled=!form.elements.department.value;}
 function brand(){const review=form.elements.function.querySelector('[value=reviews]');if(review){review.disabled=workspaces.find(item=>item.id===form.elements.brand.value)?.workspace_key!=='artanrecords';if(review.disabled&&form.elements.function.value==='reviews')form.elements.function.value='operations';}departments();}
 const trigger=root.querySelector('[data-context-open]');
 trigger.addEventListener('click',()=>{form.elements.function.value=context.function;globalScope();form.elements.brand.value=context.allBrands?'all':workspace.id;brand();departments(context.department,context.office);dialog.showModal();form.elements.function.focus();});
 form.elements.brand.addEventListener('change',brand);
 form.elements.department.addEventListener('change',()=>offices());
 dialog.querySelector('[data-context-close]').addEventListener('click',()=>dialog.close());
 dialog.addEventListener('close',()=>trigger.focus());
 form.addEventListener('submit',event=>{event.preventDefault();dialog.close();const allBrands=form.elements.brand.value==='all'&&['design','local-development'].includes(form.elements.function.value);onApply({workspace:allBrands?workspace.id:form.elements.brand.value,allBrands,function:form.elements.function.value,department:allBrands?'':form.elements.department.value,office:allBrands?'':form.elements.office.value});});
}
