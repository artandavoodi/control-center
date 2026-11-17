// Workflow owners supply evidence and persistence; this component never grants approval.
export function renderReviewChecklist(root,{steps,icon=()=>'',onError=()=>{}}){
 const ids=new Set();
 for(const step of steps){if(!step.id||ids.has(step.id)||!['pending','complete','blocked'].includes(step.state))throw Error('Review steps require unique IDs and a valid state.');ids.add(step.id);}
 root.classList.add('control-center-review-checklist');root.replaceChildren();
 for(const step of steps){
  const item=document.createElement('li'),label=document.createElement('label'),check=document.createElement('input'),text=document.createElement('span');
  item.dataset.reviewStep=step.id;item.dataset.state=step.state;label.className='control-center-operation-check';check.type='checkbox';check.checked=step.state==='complete';check.disabled=!step.onConfirm||step.state==='blocked';text.textContent=step.label;label.append(check,text);item.append(label);
  if(step.onConfirm){let confirmed=check.checked;check.onchange=async()=>{const requested=check.checked;check.disabled=true;item.setAttribute('aria-busy','true');try{if(await step.onConfirm(requested)!==true)throw Error('The confirmation was not saved.');confirmed=requested;item.dataset.state=confirmed?'complete':'pending';}catch(error){onError(error,step.id);}finally{check.checked=confirmed;check.disabled=step.state==='blocked';item.removeAttribute('aria-busy');}};}
  if(step.action){const button=document.createElement('button');button.type='button';button.className='ui-button';if(step.icon)button.innerHTML=icon(step.icon);button.append(document.createTextNode(step.action.label));button.onclick=async()=>{button.disabled=true;try{await step.action.run();}catch(error){onError(error,step.id);}finally{button.disabled=false;}};item.append(button);}
  root.append(item);
 }
}
