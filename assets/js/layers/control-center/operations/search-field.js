export function bindSearchField(field,{clearLabel='Clear search',onClear}={}){
 const input=field.querySelector('input');
 let clear=field.querySelector('.global-close-button');
 if(!clear){clear=document.createElement('button');field.append(clear);}
 clear.type='button';clear.className='global-close-button';clear.setAttribute('aria-label',clearLabel);
 window.NeuroartanCloseButtons.normalizeCloseButtonPrimitive(clear);
 const update=()=>{clear.hidden=!input.value;};
 input.addEventListener('input',update);
 clear.onclick=()=>{input.value='';if(onClear)onClear();else input.dispatchEvent(new Event('input',{bubbles:true}));update();input.focus();};
 update();return {update};
}
