export function mountComponentPreview(node,row){
 const label=document.createElement('label');label.textContent=row.title+' preview';
 if(['text','password','select'].includes(row.preview)){
  const input=document.createElement(row.preview==='select'?'select':'input');
  if(row.preview==='select')input.innerHTML='<option>First choice</option><option>Second choice</option>';
  else {input.type=row.preview;input.autocomplete='off';input.placeholder=row.preview==='password'?'Preview only - no password is saved':'Enter sample text';}
  label.append(input);node.append(label);
 }else if(['radio','checkbox'].includes(row.preview)){
  const group=document.createElement('fieldset');const legend=document.createElement('legend');legend.textContent=row.title+' preview';group.append(legend);
  ['First choice','Second choice'].forEach((title,index)=>{const choice=document.createElement('label'),input=document.createElement('input');input.type=row.preview;input.name='preview-'+row.id;input.checked=index===0;choice.className='control-center-operation-check';choice.append(input,document.createTextNode(title));group.append(choice);});node.append(group);
 }else{
  const button=document.createElement('button');button.type='button';
  if(row.preview==='close'){button.className='global-close-button';button.setAttribute('aria-label','Preview global close button');node.append(button);window.NeuroartanCloseButtons?.initCloseButtonPrimitive(node);return;}
  if(row.preview==='toggle'){button.className='ui-toggle';button.setAttribute('role','switch');button.setAttribute('aria-checked','false');button.setAttribute('aria-label','Preview toggle switch');button.innerHTML='<span class="ui-toggle__track"><span class="ui-toggle__thumb"></span></span>';button.addEventListener('click',()=>button.setAttribute('aria-checked',String(button.getAttribute('aria-checked')!=='true')));}
  else {button.textContent='Preview action';button.addEventListener('click',()=>button.textContent='Preview only - no action submitted');}
  node.append(button);
 }
}
