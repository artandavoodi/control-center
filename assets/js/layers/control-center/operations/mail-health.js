import {useMacConnection} from './mac-connection.js';
import settings from '../../../../data/control-center/mail.json' with {type:'json'};

export function mountMailHealth({mount,client,staff,e,icon}){
 if(!staff.is_owner)return;
 mount.innerHTML=`<h2>Communication health</h2><button type="button">${icon(settings.icons.refresh)}Check service</button><p role="status"></p><div data-mail-health></div>`;
 const button=mount.querySelector('button'),status=mount.querySelector('[role=status]'),content=mount.querySelector('[data-mail-health]');
 button.onclick=async()=>{
  button.disabled=true;status.textContent='Checking…';
  try{
   const origin=await useMacConnection(client,{interactive:true}),{data,error}=await client.auth.getSession();if(error||!data.session)throw Error('Sign in again to check communication health.');
   const response=await fetch(origin+'/api/mail/health',{headers:{Authorization:'Bearer '+data.session.access_token,'X-Control-Center-Action':'mail'},credentials:'omit',signal:AbortSignal.timeout(30000)});
   if(!response.ok||!response.headers.get('content-type')?.includes('application/json'))throw Error('The private communication service is unavailable.');
   const health=await response.json();
   content.innerHTML=`<p>Sender: ${e(health.sender.name)} &lt;${e(health.sender.address)}&gt;</p><h3>Email authentication</h3><dl>${['spf','dkim','dmarc','bimi'].map(key=>`<dt>${key.toUpperCase()}</dt><dd>${e(health.domain[key])}</dd>`).join('')}</dl><p>${e(health.domain.notice)}</p><h3>Automatic delivery</h3><p>${health.worker.online?'Worker online':'Worker offline or not reporting'} · ${e(health.worker.status)}${health.worker.pendingReceipts===null?'':` · ${e(health.worker.pendingReceipts)} receipts awaiting synchronization`}</p><p>Delivery still depends on your Mac being online. Uncertain sends require review, not automatic resending.</p><h3>Recent sending receipts</h3><p>Up to 100 receipts on this Mac. Accepted means accepted by iCloud, not delivered. This is not an incoming-email inbox.</p>${health.receipts.length?`<ol>${health.receipts.map(row=>`<li>${e(row.kind==='reply'?'Reply':'Acknowledgment')} · ${e(row.status)} · ${e(new Date(row.date).toLocaleString())}<br>Submission ${e(row.reference)}</li>`).join('')}</ol>`:'<p>No sending receipts recorded on this Mac.</p>'}`;
   status.textContent='Checked';
  }catch(error){status.textContent=error.message||'Communication health is unavailable.';content.replaceChildren();}
  finally{button.disabled=false;}
 };
}
