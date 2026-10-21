let active=null;
export function readUsage(id){try{const value=JSON.parse(localStorage.getItem('control-center.usage.'+id)||'{}');return {enabled:value.enabled===true,days:value.days&&typeof value.days==='object'?value.days:{}};}catch{return {enabled:false,days:{}};}}
export function writeUsage(id,value){try{localStorage.setItem('control-center.usage.'+id,JSON.stringify(value));return true;}catch{return false;}}
export function startUsage(id){
 if(active?.id===id)return;
 active?.stop();let last=Date.now(),interaction=last;
 const touch=()=>{interaction=Date.now();};
 function sample(){const now=Date.now(),elapsed=Math.max(0,Math.min(now-last,30000));last=now;const usage=readUsage(id);if(!usage.enabled||document.hidden||!document.hasFocus()||now-interaction>300000)return;const date=new Date().toLocaleDateString('en-CA');usage.days[date]=(Number(usage.days[date])||0)+elapsed;const keys=Object.keys(usage.days).sort();keys.slice(0,Math.max(0,keys.length-30)).forEach(key=>delete usage.days[key]);writeUsage(id,usage);}
 const visibility=()=>{last=Date.now();};document.addEventListener('visibilitychange',visibility);
 const timer=setInterval(sample,15000);
 ['pointerdown','keydown','wheel'].forEach(name=>window.addEventListener(name,touch,{passive:true}));
 window.addEventListener('pagehide',sample);
 active={id,stop(){clearInterval(timer);['pointerdown','keydown','wheel'].forEach(name=>window.removeEventListener(name,touch));window.removeEventListener('pagehide',sample);document.removeEventListener('visibilitychange',visibility);}};
}
export function stopUsage(){active?.stop();active=null;}
