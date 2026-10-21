import source from '../../../../data/control-center/roles.json' with {type:'json'};
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
export function renderRoleBlueprint(roles,e,canDraft){
 function branch(role,seen=new Set()){
  if(seen.has(role.id))return '';const next=new Set([...seen,role.id]),children=roles.filter(item=>item.parent===role.id);
  return `<li><article class="control-center-person"><strong>${e(role.title)}</strong><span>${role.proposed?'Proposed position':'Documented position'} · No appointment implied</span>${role.availability==='available-position'&&!role.proposed?'<span>Available position in leadership source</span>':''}<p>${e(role.summary)}</p>${role.publicUrl&&!role.proposed?`<a href="${e(role.publicUrl)}" target="_blank" rel="noopener">Read role description</a>`:''}${canDraft?`<button type="button" data-role-draft="${e(role.id)}">Prepare vacancy draft</button>`:''}</article>${children.length?`<ol>${children.map(child=>branch(child,next)).join('')}</ol>`:''}</li>`;
 }
 return `<p>Position planning is separate from staff access. Reporting lines below are a proposed planning structure; an appointment or permission is never created here.</p><ol class="control-center-org-tree">${roles.filter(role=>!role.parent).map(role=>branch(role)).join('')}</ol>`;
}
