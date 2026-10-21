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
export function positionAssignments(roles,rows){
 const assigned=new Map();for(const role of roles){const matches=rows.filter(row=>row.enabled&&(role.id.endsWith(':chief-executive-officer')?row.is_owner:role.unit&&row.unit_id===role.unit&&row.authority_level===(role.level==='department'?'department_manager':'office_manager')));if(matches.length===1)assigned.set(role.id,matches[0]);}return assigned;
}
export function renderRoleBlueprint(roles,e,canDraft,assignments=new Map(),currentId=''){
 function branch(role,seen=new Set()){
  if(seen.has(role.id))return '';const next=new Set([...seen,role.id]),children=roles.filter(item=>item.parent===role.id);
  const person=assignments.get(role.id);
  return `<li><article class="control-center-person"${person?` data-person-id="${e(person.account_id)}"${person.account_id===currentId?' aria-current="true"':''}`:''}>${person?`<strong>${e(person.display_name||'Staff member')}</strong><span data-tree-role>${e(role.title)}</span>`:`<strong>${e(role.title)}</strong><span>Unassigned · ${role.proposed?'Proposed':'Documented'} position</span>`}<details><summary>Role details</summary><p>${e(role.summary)}</p><p>${person?'Verified staff assignment. Reporting links in this plan remain proposed.':'No appointment implied.'}</p>${role.publicUrl&&!role.proposed?`<a href="${e(role.publicUrl)}" target="_blank" rel="noopener">Read role description</a>`:''}${canDraft?`<button type="button" data-role-draft="${e(role.id)}">Prepare vacancy draft</button>`:''}</details>${children.length?`<button type="button" data-tree-branch aria-expanded="true">${children.length} direct reports</button>`:''}</article>${children.length?`<ol>${children.map(child=>branch(child,next)).join('')}</ol>`:''}</li>`;
 }
 return `<p>Position planning is separate from staff access. Reporting lines below are a proposed planning structure; an appointment or permission is never created here.</p><p class="control-center-field-note">Read from top to bottom. Each connected branch reports to the position above it. Scroll sideways to explore; select direct reports to collapse a branch.</p><div class="control-center-tree-viewport" tabindex="0" role="region" aria-label="Position reporting chart"><ol class="control-center-org-tree">${roles.filter(role=>!role.parent).map(role=>branch(role)).join('')}</ol></div>`;
}
export function mountTreeBranches(root,{icon=()=>''}={}){
 root.querySelectorAll('[data-tree-branch]').forEach(button=>button.addEventListener('click',()=>{const children=button.closest('li').querySelector(':scope > ol');if(!children)return;children.hidden=!children.hidden;button.setAttribute('aria-expanded',String(!children.hidden));}));
 root.querySelectorAll('.control-center-tree-viewport').forEach(view=>{
  const chart=view.querySelector('.control-center-org-tree'),name=view.getAttribute('aria-label');let level=4;
  const steps=[.4,.55,.7,.85,1,1.15,1.3];
  const toolbar=document.createElement('div');toolbar.className='control-center-chart-tools';toolbar.setAttribute('role','group');toolbar.setAttribute('aria-label',name+' controls');
  toolbar.innerHTML=`<button type="button" data-zoom-out aria-label="Zoom out ${name}">${icon('core/actions/visibility/zoom-out.svg')}</button><output aria-live="polite">100%</output><button type="button" data-zoom-in aria-label="Zoom in ${name}">${icon('core/actions/visibility/zoom-in.svg')}</button><button type="button" data-zoom-reset>Reset view</button>`;view.before(toolbar);
  function locate(){const target=chart.querySelector('[aria-current=true]')||chart.querySelector('.control-center-person');if(!target)return;const rect=target.getBoundingClientRect(),frame=view.getBoundingClientRect();view.scrollLeft+=rect.left-frame.left-(view.clientWidth-rect.width)/2;view.scrollTop+=rect.top-frame.top;}
  function update(next){const center=(view.scrollLeft+view.clientWidth/2)/Math.max(1,view.scrollWidth);level=Math.max(0,Math.min(steps.length-1,next));chart.style.zoom=String(steps[level]);chart.dataset.density=steps[level]<=.7?'compact':'full';toolbar.querySelector('output').textContent=Math.round(steps[level]*100)+'%';toolbar.querySelector('[data-zoom-out]').disabled=level===0;toolbar.querySelector('[data-zoom-in]').disabled=level===steps.length-1;view.scrollLeft=center*view.scrollWidth-view.clientWidth/2;}
  const layout=document.createElement('button');layout.type='button';layout.textContent='Compact layout';layout.setAttribute('aria-label','Compact layout '+name);chart.dataset.layout=chart.querySelectorAll('.control-center-person').length>6?'compact':'diagram';layout.setAttribute('aria-pressed',String(chart.dataset.layout==='compact'));toolbar.append(layout);layout.addEventListener('click',()=>{chart.dataset.layout=chart.dataset.layout==='compact'?'diagram':'compact';layout.setAttribute('aria-pressed',String(chart.dataset.layout==='compact'));update(4);locate();});
  toolbar.querySelector('[data-zoom-out]').addEventListener('click',()=>update(level-1));toolbar.querySelector('[data-zoom-in]').addEventListener('click',()=>update(level+1));toolbar.querySelector('[data-zoom-reset]').addEventListener('click',()=>{update(4);locate();});
  const current=chart.querySelector('[aria-current=true]');if(current){const badge=document.createElement('span');badge.className='control-center-tree-you';badge.setAttribute('role','img');badge.setAttribute('aria-label','Your position');badge.title='Your position';(current.querySelector('[data-tree-role]')||current).prepend(badge);}
  requestAnimationFrame(()=>{if(view.isConnected)locate();});
 });
}
