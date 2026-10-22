export function mountNotifications({root,client,config,nav,workspaces,e,icon,onNavigate}){
 const header=root.querySelector('.control-center-app-header'),button=document.createElement('button'),popover=document.createElement('div');
 button.type='button';button.className='control-center-notification-trigger';button.setAttribute('aria-label','Notifications');button.setAttribute('aria-haspopup','dialog');button.setAttribute('popovertarget','control-notifications');button.innerHTML=icon('core/system/notifications/bell.svg')+'<span data-notification-count hidden></span>';
 popover.id='control-notifications';popover.className='control-center-notifications';popover.setAttribute('popover','auto');popover.setAttribute('role','dialog');popover.setAttribute('aria-label','Notifications');header.append(button,popover);
 const queues=workspaces.some(workspace=>workspace.workspace_key==='artanrecords')?config.reviewQueues.filter(queue=>queue.table&&nav.some(item=>item.id===queue.id)):[];
 let items=[],busy=false;
 async function refresh(){
  if(!button.isConnected||busy)return;busy=true;
  try{
   items=(await Promise.all(queues.map(async queue=>{const result=await client.from(queue.table).select(queue.displayField+',updated_at').eq('status','pending').order('updated_at',{ascending:false}).limit(50);if(result.error)throw Error();return (result.data||[]).map(row=>({panel:queue.id,label:queue.label,title:row[queue.displayField]||queue.label}));}))).flat();
   if(!button.isConnected)return;
   const count=button.querySelector('[data-notification-count]');count.hidden=!items.length;count.textContent=items.length===100?'100+':String(items.length);button.setAttribute('aria-label',items.length?'Notifications, '+count.textContent+' pending':'Notifications');
   popover.innerHTML='<h2>Notifications</h2>'+(items.length?items.map((item,index)=>`<button type="button" data-notification="${index}"><strong>${e(item.title)}</strong><span>${e(item.label)}</span></button>`).join(''):'<p>No pending requests in your connected review queues.</p>')+'<p>Only connected queues you may access are shown. Other brand verification services are not connected.</p>';
   popover.querySelectorAll('[data-notification]').forEach(item=>item.addEventListener('click',()=>{popover.hidePopover();onNavigate(items[Number(item.dataset.notification)].panel);}));
   if(nav.some(item=>item.id==='audit')){const history=document.createElement('button');history.type='button';history.textContent='Decision history';history.addEventListener('click',()=>{popover.hidePopover();onNavigate('audit');});popover.append(history);}
  }catch{if(button.isConnected)popover.innerHTML='<h2>Notifications</h2><p>Requests could not be checked. Open the review queues to retry.</p>';}
  finally{busy=false;}
 }
 popover.addEventListener('beforetoggle',event=>{if(event.newState==='open')refresh();});
 refresh();
 const poll=()=>setTimeout(async()=>{if(!button.isConnected)return;if(document.visibilityState==='visible')await refresh();poll();},15000);poll();
}
