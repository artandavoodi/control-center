const legacyKey='control-center.preview-private-origin';
export function privatePreviewOrigin(value){
 if(!value)return '';
 const url=new URL(value);
 if(url.protocol!=='https:'||!/^[a-z0-9-]+\.[a-z0-9-]+\.ts\.net$/.test(url.hostname)||url.username||url.password||url.pathname!=='/'||url.search||url.hash)throw Error('Use your private Tailscale HTTPS address, without a path.');
 return url.origin;
}
export const isLocalMac=()=>['127.0.0.1','localhost'].includes(location.hostname);
async function identity(client){const {data,error}=await client.auth.getSession();if(error||!data.session)throw Error('Sign in again to verify your account.');return data.session.user.id;}
export async function savedMacConnection(client){
 const id=await identity(client),response=await client.from('control_center_profiles').select('private_mac_origin').eq('account_id',id).maybeSingle();
 if(response.error)throw Error('Your saved Mac connection could not be loaded. Account connection settings may need activation.');
 return privatePreviewOrigin(response.data?.private_mac_origin||'');
}
function browserKey(id,origin){return 'control-center.mac-consent:'+id+':'+origin;}
function hasConsent(id,origin){try{return localStorage.getItem(browserKey(id,origin))==='yes'||sessionStorage.getItem(browserKey(id,origin))==='yes';}catch{return false;}}
export function requestBrowserConsent(){return new Promise(resolve=>{
 const mount=document.querySelector('.control-center-operations [data-operation-content]'),trigger=document.activeElement;
 if(!mount){resolve(null);return;}
 const dialog=document.createElement('dialog');dialog.className='control-center-context-dialog';dialog.setAttribute('aria-label','Use your private Mac connection');
 dialog.innerHTML='<form class="control-center-context-form"><header><h2>Use your private Mac connection?</h2><button type="button" class="global-close-button" aria-label="Close connection confirmation"></button></header><p>Only continue on a browser you control. This lets Control Center contact your saved Mac after sign-in. It does not verify this device or replace owner permissions and private-network access.</p><label class="control-center-confirm-choice"><input name="remember" type="checkbox">Remember this browser</label><div class="control-center-organization-actions"><button type="button" data-cancel>Not now</button><button type="submit">Continue</button></div></form>';
 const finish=value=>{dialog.close();dialog.remove();if(trigger?.isConnected)trigger.focus();resolve(value);};
 dialog.querySelector('.global-close-button').addEventListener('click',()=>finish(null));dialog.querySelector('[data-cancel]').addEventListener('click',()=>finish(null));dialog.addEventListener('cancel',event=>{event.preventDefault();finish(null);});
 dialog.querySelector('form').addEventListener('submit',event=>{event.preventDefault();finish({remember:dialog.querySelector('input').checked});});
 mount.append(dialog);dialog.showModal();
});}
export async function useMacConnection(client,{interactive=false,origin}={}){
 if(isLocalMac())return '';
 const id=await identity(client),base=privatePreviewOrigin(origin===undefined?await savedMacConnection(client):origin);
 if(!base)throw Error('Save your private Mac connection in Local Development first.');
 if(!hasConsent(id,base)){
  if(!interactive)throw Error('Confirm this browser in Local Development before using the saved Mac connection.');
  const consent=await requestBrowserConsent();if(!consent)throw Error('The Mac connection was not enabled in this browser.');
  try{(consent.remember?localStorage:sessionStorage).setItem(browserKey(id,base),'yes');}catch{throw Error('Browser storage is unavailable. The Mac connection was not remembered.');}
 }
 return base;
}
export async function saveMacConnection(client,value){
 const origin=privatePreviewOrigin(value),id=await identity(client);if(!origin)throw Error('Enter your private Mac address.');
 await useMacConnection(client,{interactive:true,origin});
 const result=await client.from('control_center_profiles').upsert({account_id:id,private_mac_origin:origin,updated_at:new Date().toISOString()});
 if(result.error)throw Error('The connection was not saved to your account. Please try again.');
 try{localStorage.removeItem(legacyKey);}catch{/* Account preference remains authoritative. */}
 return origin;
}
export async function forgetMacBrowser(client){
 const id=await identity(client),prefix='control-center.mac-consent:'+id+':';
 try{for(const storage of [localStorage,sessionStorage])for(let index=storage.length-1;index>=0;index--){const key=storage.key(index);if(key?.startsWith(prefix))storage.removeItem(key);}}
 catch{throw Error('This browser preference could not be removed.');}
}
