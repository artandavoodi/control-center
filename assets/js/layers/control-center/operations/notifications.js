import {renderNotificationFeed} from './shared/notification-feed.js';
import labels from '../../../../data/control-center/update-actions.json' with {type:'json'};
import {readView,writeView} from './view-state.js';
export function mountNotifications({root,client,config,monitor,nav,workspaces,e,icon,onNavigate}){
 const header=root.querySelector('.control-center-app-header'),button=document.createElement('button'),popover=document.createElement('div'),feed=document.createElement('div');
 button.type='button';button.className='control-center-notification-trigger';button.setAttribute('aria-label','Notifications');button.setAttribute('aria-haspopup','dialog');button.setAttribute('popovertarget','control-notifications');button.innerHTML=icon('core/system/notifications/bell.svg')+'<span class="system-notification-badge" data-notification-count hidden></span>';
 popover.id='control-notifications';popover.className='control-center-notifications';popover.setAttribute('popover','auto');popover.setAttribute('role','dialog');popover.setAttribute('aria-label','Notifications');
 const heading=document.createElement('h2');heading.textContent='Notifications';popover.append(heading,feed);header.append(button,popover);
 const queues=workspaces.some(workspace=>workspace.workspace_key==='artanrecords')?config.reviewQueues.filter(queue=>queue.table&&nav.some(item=>item.id===queue.id)):[];
 const readReviews=new Set(readView('readReviewNotices',[])),reviewHistory=new Map(readView('reviewNoticeHistory',[]).map(item=>[item.id,item]));
 let pending=[],busy=false,history=false,queueError=false;
 function render(){
  if(!button.isConnected)return;
  const updates=(monitor?.state.jobs||[]).filter(job=>job.status!=='running').reverse().map(job=>({
   id:job.id,kind:'update',title:job.status==='succeeded'?labels.results[job.method]||'Update completed':labels.results[job.status]||labels.results.failed,
   message:job.title+' · '+(job.status==='succeeded'&&job.method==='publish'?labels.results.hosting:job.result?.message?.replaceAll('GitHub publication','publication').replaceAll('GitHub','publishing service')||'Open details to review this update.'),
   status:job.status,createdAt:job.finishedAt||job.startedAt,read:Boolean(job.readAt),openLabel:'View update details'
  }));
  const reviews=[...reviewHistory.values()].filter(item=>readReviews.has(item.id)||pending.some(row=>row.id===item.id)).map(item=>({...item,read:readReviews.has(item.id)}));
  const items=[...reviews,...updates].sort((a,b)=>(b.createdAt||'').localeCompare(a.createdAt||''));
  const total=items.filter(item=>!item.read).length,count=button.querySelector('[data-notification-count]');count.hidden=!total;count.textContent=total>99?'99+':String(total);button.setAttribute('aria-label',total?'Notifications, '+count.textContent+' pending':'Notifications');
  renderNotificationFeed(feed,{items,history,onHistory:value=>{history=value;render();},onRead:async item=>{
   if(item.kind==='update')await monitor.markRead(item.id);
   else{readReviews.add(item.id);writeView('readReviewNotices',[...readReviews].slice(-200));render();}
  },onOpen:item=>{popover.hidePopover();if(item.kind==='update'){writeView('updateJob',item.id);onNavigate('updates');}else onNavigate(item.panel);}});
  if(queueError){const error=document.createElement('p');error.setAttribute('role','status');error.textContent='Review requests could not be checked. Open the queues to retry.';feed.append(error);}
 }
 async function refresh(){
  if(!button.isConnected||busy)return;busy=true;
  try{
   pending=(await Promise.all(queues.map(async queue=>{const result=await client.from(queue.table).select(queue.displayField+',updated_at').eq('status','pending').order('updated_at',{ascending:false}).limit(50);if(result.error)throw Error();return (result.data||[]).map(row=>({id:queue.id+':'+row[queue.displayField]+':'+row.updated_at,kind:'review',panel:queue.id,title:row[queue.displayField]||queue.label,message:queue.label,status:'pending',createdAt:row.updated_at,openLabel:'View review queue'}));}))).flat();
   if(!button.isConnected)return;
   for(const item of pending)reviewHistory.set(item.id,item);while(reviewHistory.size>200)reviewHistory.delete(reviewHistory.keys().next().value);writeView('reviewNoticeHistory',[...reviewHistory.values()]);queueError=false;render();
  }catch{queueError=true;render();}finally{busy=false;}
 }
 popover.addEventListener('beforetoggle',event=>{if(event.newState==='open')refresh();});
 monitor?.subscribe(()=>{if(!button.isConnected)return false;while(monitor.takeNotice()){}render();});
 render();refresh();
 const poll=()=>setTimeout(async()=>{if(!button.isConnected)return;if(document.visibilityState==='visible')await refresh();poll();},15000);poll();
}
