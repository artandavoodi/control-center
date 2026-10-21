let timer;
export function finishLoading(){clearTimeout(timer);}
export function showLoading(root){
 finishLoading();
 root.innerHTML='<section class="control-center-boot" role="status" aria-label="Loading Control Center"><span class="ui-loader-circle" aria-hidden="true"></span></section>';
 timer=setTimeout(()=>{
  root.innerHTML='<section class="control-center-access"><h1>Control Center is taking longer to load</h1><p>Your session has not been removed. Check your connection and try again.</p><button type="button" data-retry-loading>Try again</button></section>';
  root.querySelector('[data-retry-loading]').addEventListener('click',()=>location.reload());
 },20000);
}
