import registry from '../../../../data/control-center/development.json';
const cache=new Map();
export function uniqueCommits(rows){return [...new Map(rows.map(row=>[row.repository+':'+row.sha,row])).values()].sort((a,b)=>b.date.localeCompare(a.date));}
export async function mountDevelopment({content,workspace,e,isCurrent}){
 const repositories=registry.repositories.filter(repo=>repo.workspace==='all'||repo.workspace===workspace.workspace_key);
 content.innerHTML=`<p>${e(registry.description)}</p><p class="control-center-field-note">This read-only feed covers pushed commits on each repository’s default branch. Private repositories require a staff-authorized connector and are never made public here. Uncommitted work is not a recorded change.</p><label>Repository<select data-development-repository><option value="">All registered repositories</option>${repositories.map(repo=>`<option>${e(repo.name)}</option>`).join('')}</select></label><div data-development-entries aria-live="polite"></div><button type="button" data-development-more>Load more changes</button>`;
 const output=content.querySelector('[data-development-entries]'),select=content.querySelector('select'),more=content.querySelector('button');let page=1,revision=0,entries=[];
 async function load(append=false){const turn=++revision;more.disabled=true;output.setAttribute('aria-busy','true');if(!append)output.innerHTML='<p>Loading development history…</p>';
  const results=await Promise.all(repositories.filter(repo=>!select.value||repo.name===select.value).map(async repo=>{try{
   const key=repo.name+':'+page,cached=cache.get(key);if(cached&&Date.now()-cached.time<registry.refreshSeconds*1000)return cached.result;
   const response=await fetch(`https://api.github.com/repos/${registry.owner}/${repo.name}/commits?per_page=10&page=${page}`,{credentials:'omit',headers:{Accept:'application/vnd.github+json'}});
   if(!response.ok)return {repository:repo.name,error:response.status===404?'Private or unavailable — connector required.':response.status===403||response.status===429?'GitHub rate limit reached. Try again later.':'History unavailable. Try again later.'};
   const commits=await response.json(),result={rows:commits.map(commit=>({repository:repo.name,sha:commit.sha,title:String(commit.commit.message).split('\n')[0],date:commit.commit.committer.date}))};cache.set(key,{time:Date.now(),result});return result;
  }catch{return {repository:repo.name,error:'Network unavailable. Try again later.'};}}));
  if(!isCurrent()||turn!==revision)return;
  if(!append)entries=[];output.replaceChildren();
  const rows=uniqueCommits(results.flatMap(result=>result.rows||[]));
  entries=uniqueCommits([...entries,...rows]);
  results.filter(result=>result.error).forEach(result=>{const notice=document.createElement('p');notice.textContent=result.repository+': '+result.error;output.append(notice);});
  entries.forEach(row=>{if(!/^[a-f0-9]{40}$/.test(row.sha))return;const article=document.createElement('article');article.className='control-center-review';article.dataset.commit=row.repository+':'+row.sha;article.innerHTML=`<h3>${e(row.title)}</h3><p>${e(row.repository)} · <time datetime="${e(row.date)}">${e(new Date(row.date).toLocaleString())}</time></p><a href="https://github.com/${registry.owner}/${row.repository}/commit/${row.sha}" target="_blank" rel="noopener">View change ${e(row.sha.slice(0,7))}</a>`;output.append(article);});
  if(!rows.length&&!results.some(result=>result.error))output.insertAdjacentHTML('beforeend','<p>No more committed changes.</p>');
  more.disabled=!rows.length;output.removeAttribute('aria-busy');
 }
 select.addEventListener('change',()=>{page=1;load();});more.addEventListener('click',()=>{page++;load(true);});await load();
}
