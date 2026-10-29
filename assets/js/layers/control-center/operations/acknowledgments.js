import settings from '../../../../data/control-center/mail.json' with {type:'json'};
export async function mountAcknowledgments({mount,client,staff,e,icon}){
 const {data,error}=await client.rpc('artan_acknowledgment_summary');
 if(error||!data||typeof data.enabled!=='boolean'){mount.textContent='Automatic acknowledgment status is unavailable. Template editing remains available.';return;}
 const online=data.last_poll_at&&Date.now()-Date.parse(data.last_poll_at)<90000;
 mount.innerHTML=`<h2>Automatic acknowledgment</h2><p>${data.enabled?(online?'Running':'Enabled · waiting for your Mac'):'Paused'} · from ${e(settings.sender)}</p><p>${e(data.queued)} queued · ${e(data.accepted)} accepted by iCloud · ${e(data.held)} need review</p><p>One receipt per new application. Queued emails wait while your Mac is offline. SMTP acceptance does not confirm inbox delivery.</p><div class="control-center-action-row">${staff.is_owner?`<button type="button" data-ack-toggle>${icon(data.enabled?settings.icons.pause:settings.icons.enable)}${data.enabled?'Pause automatic replies':'Enable automatic replies'}</button>`:''}<button type="button" data-ack-refresh>${icon(settings.icons.refresh)}Refresh status</button></div><p role="status"></p>`;
 mount.querySelector('[data-ack-refresh]').addEventListener('click',()=>mountAcknowledgments({mount,client,staff,e,icon}));
 mount.querySelector('[data-ack-toggle]')?.addEventListener('click',async event=>{
  if(!window.confirm(data.enabled?'Pause automatic acknowledgment emails? Queued applications will wait.':'Enable one acknowledgment email for each queued and newly received application? Your Mac must be online.'))return;
  event.currentTarget.disabled=true;const result=await client.rpc('artan_set_acknowledgments',{active:!data.enabled});
  if(result.error){mount.querySelector('[role=status]').textContent='The setting was not changed.';event.currentTarget.disabled=false;return;}
  await mountAcknowledgments({mount,client,staff,e,icon});
 });
}
