import source from '../../../../data/control-center/roles.json' with {type:'json'};
import controls from '../../../../data/control-center/chart-controls.json' with {type:'json'};
const departments={
 'chief-brand-aesthetic-officer':'Brand','chief-communications-officer':'Communication',
 'chief-risk-ethics-officer':'Governance','general-counsel':'Governance','corporate-secretary':'Governance',
 'chief-technology-officer':'Infrastructure','chief-science-research-officer':'Knowledge & Research',
 'chief-cognitive-systems-officer':'Knowledge & Research'
};
const common=new Set(['chief-executive-officer','chief-operating-officer','chief-financial-officer','chief-brand-aesthetic-officer','chief-communications-officer','chief-technology-officer','general-counsel']);
export function roleBlueprint(workspace,units){
 const brand=workspace.workspace_key,neuro=brand==='neuroartan';
 const executives=source.roles.filter(role=>neuro||common.has(role.id)||brand==='artanrecords'&&['chief-records-sonic-architecture-officer','chief-publishing-officer'].includes(role.id)).map(role=>({...role,id:brand+':'+role.id,parent:role.id==='chief-executive-officer'?null:brand+':chief-executive-officer',level:'executive',department:departments[role.id]||'Operations',proposed:!neuro,unit:null}));
 const children=units.filter(unit=>unit.active&&unit.parent_id===workspace.id&&unit.kind==='department');
 for(const department of children){
  const owner=executives.find(role=>role.department===department.name&&!role.id.endsWith(':chief-executive-officer'))||executives.find(role=>role.id.endsWith(':chief-operating-officer'));
  const id=brand+':department:'+department.id;
  executives.push({id,title:department.name+' department head',parent:owner?.id||brand+':chief-executive-officer',level:'department',department:department.name,unit:department.id,proposed:true,summary:'Lead the '+department.name+' department and coordinate its offices.'});
  for(const office of units.filter(unit=>unit.active&&unit.kind==='office'&&unit.parent_id===department.id))executives.push({id:brand+':office:'+office.id,title:office.name+' office manager',parent:id,level:'office',department:department.name,office:office.name,unit:office.id,proposed:true,summary:'Manage the '+office.name+' office within '+department.name+'.'});
 }
 return executives;
}
export function positionAssignments(roles,rows){
 const assigned=new Map();for(const role of roles){const matches=rows.filter(row=>row.enabled&&(role.id.endsWith(':chief-executive-officer')?row.is_owner:role.unit&&row.unit_id===role.unit&&row.authority_level===(role.level==='department'?'department_manager':'office_manager')));if(matches.length===1)assigned.set(role.id,matches[0]);}return assigned;
}
export function mergeStaffPositions(roles,rows){
 const result=roles.map(role=>({...role})),assignments=positionAssignments(result,rows),byAccount=new Map([...assignments].map(([id,person])=>[person.account_id,id]));
 for(const person of rows.filter(person=>person.enabled&&!byAccount.has(person.account_id))){const id='staff:'+person.account_id;byAccount.set(person.account_id,id);assignments.set(id,person);result.push({id,title:person.authority_level.replaceAll('_',' '),parent:null,level:'staff',unit:person.unit_id,summary:'Assigned staff position. Permissions remain managed separately.',proposed:false});}
 for(const [id,person] of assignments){const role=result.find(role=>role.id===id);if(person.manager_id&&byAccount.has(person.manager_id)&&byAccount.get(person.manager_id)!==id)role.parent=byAccount.get(person.manager_id);}
 return {roles:result,assignments};
}
export function renderRoleBlueprint(roles,e,canDraft,assignments=new Map(),currentId=''){
 const cards=roles.map(role=>{
  const person=assignments.get(role.id),count=roles.filter(item=>item.parent===role.id).length;
  return `<li data-position-id="${e(role.id)}" data-position-parent="${e(role.parent||'')}" data-position-department="${e(role.department||'Other')}"><article class="control-center-person" data-assigned="${Boolean(person)}"${person?` data-person-id="${e(person.account_id)}"${person.account_id===currentId?' aria-current="true"':''}`:''}><button type="button" class="control-center-person-open" data-role-open aria-haspopup="dialog" aria-label="${e('Open '+role.title)}"><strong>${person?e(person.display_name||'Staff member'):''}</strong><span data-tree-role>${e(role.title)}</span><span class="control-center-position-state"><i aria-hidden="true"></i>${person?'Assigned':'Unassigned'}</span></button><template data-role-details><h2>${e(role.title)}</h2>${person?`<p>${e(person.display_name||'Staff member')}</p>`:''}<p>${e(role.summary)}</p><p>${person?'Verified staff assignment. Reporting links remain proposed.':'Unassigned position. No appointment implied.'}</p><p>${count} direct ${count===1?'report':'reports'}</p>${role.publicUrl&&!role.proposed?`<a href="${e(role.publicUrl)}" target="_blank" rel="noopener">Read role description</a>`:''}${canDraft&&!person?`<button type="button" data-role-draft="${e(role.id)}">Prepare vacancy draft</button>`:''}</template>${count?`<button type="button" data-team-open aria-label="${e('View team: '+role.title)}">${count} direct ${count===1?'report':'reports'}</button>`:'<span class="control-center-position-reports">No direct reports</span>'}</article></li>`;
 }).join('');
 return `<p class="control-center-field-note">Proposed reporting plan.</p><section class="control-center-team-explorer" aria-label="Team explorer"><div data-team-toolbar></div><nav data-team-breadcrumbs aria-label="Reporting path"></nav><p data-team-summary role="status"></p><ul class="control-center-team-cards">${cards}</ul></section>`;
}
export function mountTreeBranches(root,{icon=()=>'',onDraft=()=>{}}={}){
 const dialog=document.createElement('dialog');dialog.className='control-center-position-dialog';dialog.setAttribute('aria-label','Position details');dialog.innerHTML='<section><header><button type="button" class="global-close-button" aria-label="Close position details"></button></header><div data-position-content></div></section>';root.append(dialog);
 window.NeuroartanCloseButtons?.initCloseButtonPrimitive(dialog);
 let opener;
 dialog.querySelector('button').onclick=()=>dialog.close();dialog.addEventListener('close',()=>opener?.focus());
 root.querySelectorAll('[data-role-open]').forEach(button=>button.addEventListener('click',()=>{opener=button;const target=dialog.querySelector('[data-position-content]');target.replaceChildren(button.closest('article').querySelector('template').content.cloneNode(true));target.querySelector('[data-role-draft]')?.addEventListener('click',event=>{dialog.close();onDraft(event.currentTarget.dataset.roleDraft);});dialog.showModal();}));
 root.querySelectorAll('.control-center-team-explorer').forEach(view=>{
  const list=view.querySelector('ul'),cards=[...list.children],toolbar=view.querySelector('[data-team-toolbar]'),breadcrumbs=view.querySelector('[data-team-breadcrumbs]'),summary=view.querySelector('[data-team-summary]');
  let mode='team',selected=cards.find(card=>!card.dataset.positionParent)?.dataset.positionId||'';
  const name=card=>card.querySelector('[data-tree-role]').textContent;
  const teams=document.createElement('button'),departments=document.createElement('button'),find=document.createElement('button'),filter=document.createElement('select'),filterLabel=document.createElement('label');
  toolbar.className='control-center-team-tools';toolbar.setAttribute('role','group');toolbar.setAttribute('aria-label','Organization views');
  teams.type=departments.type=find.type='button';teams.innerHTML=icon(controls.compact)+'Team explorer';departments.innerHTML=icon(controls.diagram)+'Departments';find.innerHTML=icon(controls.findMe)+'Find me';
  filterLabel.textContent='Department';filterLabel.append(filter);
  for(const value of [...new Set(cards.map(card=>card.dataset.positionDepartment))].sort()){const option=document.createElement('option');option.value=option.textContent=value;filter.append(option);}
  toolbar.append(teams,departments,find,filterLabel);
  const current=cards.find(card=>card.querySelector('[aria-current=true]'));find.hidden=!current;
  function draw(focus=false){
   teams.setAttribute('aria-pressed',String(mode==='team'));departments.setAttribute('aria-pressed',String(mode==='department'));filterLabel.hidden=mode!=='department';breadcrumbs.replaceChildren();breadcrumbs.hidden=mode!=='team';
   const manager=cards.find(card=>card.dataset.positionId===selected);
   const visible=mode==='team'?cards.filter(card=>card===manager||card.dataset.positionParent===selected):cards.filter(card=>card.dataset.positionDepartment===filter.value);
   cards.forEach(card=>{card.hidden=!visible.includes(card);delete card.dataset.teamManager;});
   if(mode==='team'&&manager){
    manager.dataset.teamManager='true';list.prepend(manager);
    const path=[],seen=new Set();let item=manager;
    while(item&&!seen.has(item)){seen.add(item);path.unshift(item);item=cards.find(card=>card.dataset.positionId===item.dataset.positionParent);}
    path.forEach((card,index)=>{const button=document.createElement('button');button.type='button';button.textContent=name(card);if(index===path.length-1)button.setAttribute('aria-current','page');button.onclick=()=>{selected=card.dataset.positionId;draw(true);};breadcrumbs.append(button);});
    summary.textContent=(visible.length-1)+' direct '+(visible.length===2?'report':'reports');
   }else summary.textContent=visible.length+' positions';
   if(focus)(manager?.querySelector('[data-role-open]')||visible[0]?.querySelector('[data-role-open]'))?.focus();
  }
  teams.onclick=()=>{mode='team';draw();};departments.onclick=()=>{mode='department';draw();};filter.onchange=()=>draw();
  find.onclick=()=>{mode='team';selected=current.dataset.positionId;draw(true);};
  view.querySelectorAll('[data-team-open]').forEach(button=>button.onclick=()=>{mode='team';selected=button.closest('[data-position-id]').dataset.positionId;draw(true);});
  if(current){const badge=document.createElement('span');badge.className='control-center-tree-you';badge.setAttribute('role','img');badge.setAttribute('aria-label','Your position');badge.title='Your position';current.querySelector('[data-tree-role]').prepend(badge);}
  draw();
 });
}
