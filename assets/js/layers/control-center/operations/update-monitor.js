import labels from '../../../../data/control-center/update-actions.json' with {type:'json'};
export function createUpdateMonitor({client}){
 let state={documents:[],layers:[],jobs:[],unconfiguredDomains:[]},stopped=false,timer,loading,initialized=false,writeVersion=0;
 const listeners=new Set(),notices=[];
 const emit=()=>{for(const listener of listeners)if(listener(state)===false)listeners.delete(listener);};
 async function request(path,options={}){
  const session=await client.auth.getSession();if(!session.data.session)throw Error('Sign in again before running an update.');
  const response=await fetch('/api/updates/'+path,{...options,headers:{Authorization:'Bearer '+session.data.session.access_token,'X-Control-Center-Action':'updates',...options.headers},credentials:'omit',cache:'no-store'});
  let result;try{result=await response.json();}catch{throw Error('The trusted local update service is unavailable. Start the local server with --updates; live hosting cannot run local prompts.');}
  if(!response.ok)throw Error(result.error||'The update request was rejected.');return result;
 }
 function merge(next){
  const before=new Map(state.jobs.map(job=>[job.id,job]));
  if(initialized)for(const job of next.jobs)if(job.status!=='running'&&(!before.has(job.id)||before.get(job.id).status==='running'))notices.push(job);
  initialized=true;state={...next,error:''};emit();
 }
 async function refresh(){
  if(stopped)return state;if(loading)return loading;
  clearTimeout(timer);
  loading=(async()=>{const version=writeVersion;try{const data=await request('catalogue');if(!stopped&&version===writeVersion)merge(data);}catch(error){if(!stopped){state={...state,error:error.message};emit();}}finally{loading=null;if(!stopped)timer=setTimeout(refresh,state.jobs.some(job=>job.status==='running')?1500:15000);}return state;})();return loading;
 }
 return {
  get state(){return state;},refresh,
  subscribe(listener){listeners.add(listener);listener(state);return ()=>listeners.delete(listener);},
  takeNotice(){return notices.shift();},
  async markRead(id){const job=await request('jobs/'+encodeURIComponent(id)+'/read',{method:'POST'});writeVersion++;state={...state,jobs:state.jobs.map(item=>item.id===job.id?job:item)};emit();},
  async start(document,method){const job=await request('jobs',{method:'POST',headers:{'Content-Type':'application/json','Idempotency-Key':crypto.randomUUID()},body:JSON.stringify({document,method,...(method==='publish'?{confirmation:'PUBLISH REVIEWED CHANGES'}:{})})});writeVersion++;state={...state,jobs:[...state.jobs.filter(item=>item.id!==job.id),job]};if(job.status!=='running')notices.push(job);emit();await refresh();return state.jobs.find(item=>item.id===job.id)||job;},
  stop(){stopped=true;clearTimeout(timer);listeners.clear();notices.length=0;}
 };
}
export function updateSummary(job,e){
 const result=job.result||{},title=labels.results[job.status==='succeeded'?job.method:job.status]||labels.results.failed;
 const message=job.status==='succeeded'&&job.method==='publish'?labels.results.hosting:(result.message||'').replaceAll('GitHub publication','publication').replaceAll('GitHub','publishing service');
 const date=job.finishedAt||job.startedAt;
 return `<article class="control-center-update-summary"><strong>${e(title)}</strong><span>${e(result.scope||job.title)}</span>${date?`<time datetime="${e(date)}">${e(new Intl.DateTimeFormat(undefined,{dateStyle:'medium',timeStyle:'short'}).format(new Date(date)))}</time>`:''}${message?`<p>${e(message)}</p>`:''}${result.problem?`<p>${e(result.problem)}</p>`:''}${result.published?.length?`<ul>${result.published.map(layer=>`<li>${e(layer.label)} · Submitted for publication</li>`).join('')}</ul>`:''}${result.steps?.length?`<details><summary>Checks by layer</summary><ul>${result.steps.map(step=>`<li>${e(step.label)} · ${e(step.status==='passed'?'Checks passed':step.status==='failed'?'Checks failed':'Check not confirmed')}</li>`).join('')}</ul></details>`:''}${job.historyWarning?`<p>${e(job.historyWarning)}</p>`:''}</article>`;
}
export function mountUpdateProgress({root,monitor,onNavigate}){
 if(!monitor)return;
 const progress=document.createElement('button');progress.type='button';progress.className='control-center-update-progress';progress.hidden=true;progress.setAttribute('aria-label',labels.results.running);progress.setAttribute('title',labels.results.running);progress.addEventListener('click',()=>onNavigate('updates'));
 root.querySelector('[data-search-open]').before(progress);
 monitor.subscribe(state=>{
  if(!progress.isConnected)return false;
  const running=state.jobs.find(job=>job.status==='running');
  if(running){
   progress.hidden=false;
   const ratio=running.progress?.total?Math.min(95,Math.floor(running.progress.completed/running.progress.total*100)):0;
   progress.style.setProperty('--update-progress',ratio+'%');
   const previous=state.jobs.filter(job=>job.document===running.document&&job.method===running.method&&job.status==='succeeded'&&job.finishedAt).map(job=>new Date(job.finishedAt)-new Date(job.startedAt)).filter(value=>value>0).sort((a,b)=>a-b);
   const estimate=previous.length?' · Previous runs: about '+Math.ceil(previous[Math.floor(previous.length/2)]/60000)+' min':' · Duration not estimated yet';
   const label=state.error?labels.results.connection:(running.progress?.phase||'Preparing update')+' · '+ratio+'%'+estimate;progress.setAttribute('aria-label',label);progress.title=label;
  }else progress.hidden=true;
 });
}
