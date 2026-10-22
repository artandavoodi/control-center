import {updateSummary} from './update-monitor.js';
import {readView,writeView} from './view-state.js';
export function mountNotifications({root,client,config,monitor,nav,workspaces,e,icon,onNavigate}){
 const header=root.querySelector('.control-center-app-header'),button=document.createElement('button'),popover=document.createElement('div');
 button.type='button';button.className='control-center-notification-trigger';button.setAttribute('aria-label','Notifications');button.setAttribute('aria-haspopup','dialog');button.setAttribute('popovertarget','control-notifications');button.innerHTML=icon('core/system/notifications/bell.svg')+'<span data-notification-count hidden></span>';
 popover.id='control-notifications';popover.className='control-center-notifications';popover.setAttribute('popover','auto');popover.setAttribute('role','dialog');popover.setAttribute('aria-label','Notifications');header.append(button,popover);
 const queues=workspaces.some(workspace=>workspace.workspace_key==='artanrecords')?config.reviewQueues.filter(queue=>queue.table&&nav.some(item=>item.id===queue.id)):[];
 let items=[],busy=false,queueError=false;const remembered=readView('readUpdateNotices',[]),readUpdates=new Set(Array.isArray(remembered)?remembered:[]);
 function render(){
  if(!button.isConnected)return;
  const updates=(monitor?.state.jobs||[]).filter(job=>job.status!=='running').reverse(),unread=updates.filter(job=>!readUpdates.has(job.id)).length,total=items.length+unread;
  const count=button.querySelector('[data-notification-count]');count.hidden=!total;count.textContent=total>99?'99+':String(total);button.setAttribute('aria-label',total?'Notifications, '+count.textContent+' pending':'Notifications');
  popover.innerHTML='<h2>Notifications</h2>'+(queueError?'<p>Review requests could not be checked. Open the queues to retry.</p>':items.length?items.map((item,index)=>`<button type="button" data-notification="${index}"><strong>${e(item.title)}</strong><span>${e(item.label)}</span></button>`).join(''):'<p>No pending requests in your connected review queues.</p>')+(updates.length?'<h3>Recent updates</h3>'+updates.slice(0,10).map(job=>updateSummary(job,e)+`<button type="button" data-update-notice="${e(job.id)}">View update details</button>`).join(''):'');
  popover.querySelectorAll('[data-notification]').forEach(item=>item.addEventListener('click',()=>{popover.hidePopover();onNavigate(items[Number(item.dataset.notification)].panel);}));
  popover.querySelectorAll('[data-update-notice]').forEach(item=>item.addEventListener('click',()=>{writeView('updateJob',item.dataset.updateNotice);popover.hidePopover();onNavigate('updates');}));
  if(monitor){const history=document.createElement('button');history.type='button';history.textContent='Update history';history.addEventListener('click',()=>{popover.hidePopover();onNavigate('updates');});popover.append(history);}
  if(nav.some(item=>item.id==='audit')){const history=document.createElement('button');history.type='button';history.textContent='Decision history';history.addEventListener('click',()=>{popover.hidePopover();onNavigate('audit');});popover.append(history);}
 }
 async function refresh(){
  if(!button.isConnected||busy)return;busy=true;
  try{
   items=(await Promise.all(queues.map(async queue=>{const result=await client.from(queue.table).select(queue.displayField+',updated_at').eq('status','pending').order('updated_at',{ascending:false}).limit(50);if(result.error)throw Error();return (result.data||[]).map(row=>({panel:queue.id,label:queue.label,title:row[queue.displayField]||queue.label}));}))).flat();
   if(!button.isConnected)return;
   queueError=false;render();
  }catch{queueError=true;render();}
  finally{busy=false;}
 }
 popover.addEventListener('beforetoggle',event=>{if(event.newState==='open'){for(const job of monitor?.state.jobs||[])if(job.status!=='running')readUpdates.add(job.id);writeView('readUpdateNotices',[...readUpdates].slice(-200));render();refresh();}});
 monitor?.subscribe(()=>{if(!button.isConnected)return false;render();if(monitor.takeNotice()){try{popover.showPopover();}catch{/* The notification remains in history if another modal is active. */}}});
 refresh();
 const poll=()=>setTimeout(async()=>{if(!button.isConnected)return;if(document.visibilityState==='visible')await refresh();poll();},15000);poll();
}
