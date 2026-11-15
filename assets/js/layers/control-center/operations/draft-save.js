export async function flushDraftSaves(root){
 const requests=[];for(const form of root.querySelectorAll('[data-draft-save]'))form.dispatchEvent(new CustomEvent('control-center:before-leave',{detail:{waitUntil:request=>requests.push(request)}}));
 return (await Promise.all(requests)).every(result=>result===true);
}
export function discardDraftSaves(root){for(const form of root.querySelectorAll('[data-draft-save]'))form.dispatchEvent(new Event('control-center:discard-draft'));}
export function bindDraftSave({form,snapshot,save,isActive,onSaved}){
 const status=form.querySelector('[role=status]');let timer,inFlight=null,revision=0,savedRevision=0;
 const dirty=()=>revision!==savedRevision;
 const warn=event=>{if(isActive()&&(dirty()||inFlight)){event.preventDefault();event.returnValue='';}};
 async function flush(){
  clearTimeout(timer);
  if(inFlight){if(!await inFlight)return false;if(dirty())return flush();return true;}
  if(!dirty())return true;
  if(!form.checkValidity()){status.textContent='Complete the required draft fields before saving.';return false;}
  const version=revision,payload=snapshot();status.textContent='Saving draft…';
  inFlight=(async()=>{try{await save(payload);savedRevision=version;onSaved();status.textContent=dirty()?'Unsaved changes.':'Draft saved to your account.';return true;}catch(error){status.textContent=(error.message||'Draft could not be saved.')+' Your changes remain here; retry Save changes before leaving.';return false;}})();
  const succeeded=await inFlight;inFlight=null;if(succeeded&&dirty())return flush();if(succeeded)window.removeEventListener('beforeunload',warn);return succeeded;
 }
 const changed=()=>{if(!isActive())return;++revision;window.addEventListener('beforeunload',warn);status.textContent='Unsaved changes.';clearTimeout(timer);timer=setTimeout(()=>{if(form.isConnected)flush();else window.removeEventListener('beforeunload',warn);},600);};
 form.addEventListener('input',event=>{if(event.target.type!=='file')changed();});form.addEventListener('change',event=>{if(event.target.type!=='file')changed();});
 form.dataset.draftSave='';form.addEventListener('control-center:before-leave',event=>event.detail.waitUntil(flush()));
 form.addEventListener('control-center:discard-draft',()=>{clearTimeout(timer);revision=savedRevision;window.removeEventListener('beforeunload',warn);});
 return {flush,changed,reset(){clearTimeout(timer);revision=savedRevision=0;window.removeEventListener('beforeunload',warn);},get dirty(){return dirty();}};
}
