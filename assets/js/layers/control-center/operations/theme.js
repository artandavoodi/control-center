const allowed=new Set(['light','dark','system']);
const media=matchMedia('(prefers-color-scheme: dark)');
export function applyTheme(mode){
 const selected=allowed.has(mode)?mode:'system';
 document.documentElement.dataset.theme=selected;
 document.documentElement.dataset.themeEffective=selected==='system'?(media.matches?'dark':'light'):selected;
 return selected;
}
export function readTheme(){try{return localStorage.getItem('control-center.appearance')||'system';}catch{return 'system';}}
export function setTheme(mode){const selected=applyTheme(mode);try{localStorage.setItem('control-center.appearance',selected);}catch{}return selected;}
applyTheme(readTheme());
media.addEventListener('change',()=>{if(document.documentElement.dataset.theme==='system')applyTheme('system');});
export function mountThemeControls(container,onChange){
 container.querySelectorAll('[name=appearance]').forEach(input=>{
  input.checked=input.value===document.documentElement.dataset.theme;
  input.addEventListener('change',()=>{if(input.checked)onChange(setTheme(input.value));});
 });
}
