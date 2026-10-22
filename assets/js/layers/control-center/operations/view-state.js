let account='';
export function setViewAccount(id){account=/^[a-zA-Z0-9-]+$/.test(id)?id:'';}
export function readView(key,fallback){try{return account?JSON.parse(sessionStorage.getItem('control-center.view.'+account+'.'+key))??fallback:fallback;}catch{return fallback;}}
export function writeView(key,value){if(!account)return;try{sessionStorage.setItem('control-center.view.'+account+'.'+key,JSON.stringify(value));}catch{/* Navigation stays usable without browser storage. */}}
