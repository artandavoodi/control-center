import {readFile,access} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import path from 'node:path';
const root=new URL('../',import.meta.url);
export async function collectIconUsage(icons){
 const config=JSON.parse(await readFile(new URL('assets/data/control-center/icon-usage.json',root),'utf8'));
 let complete=true;for(const brand of config.brands){try{await access(new URL(brand.repository+'/.git',root));}catch{complete=false;}}
 if(!complete){
  const snapshot=JSON.parse(await readFile(new URL('assets/data/control-center/registry-index.json',root),'utf8'));
  const previous=new Map(snapshot.icons.map(icon=>[icon.id,icon]));
  for(const icon of icons){const old=previous.get(icon.id);if(old?.sha256!==icon.sha256)throw Error('Usage snapshot needs a canonical local rebuild: '+icon.id);icon.brands=old.brands||[];icon.usage=old.usage||[];}
  console.log('Verified committed icon-usage snapshot; other brand repositories are not available in this checkout.');
  return config.brands.map(({id,label})=>({id,label}));
 }
 const hashes=new Map();for(const icon of icons){const matches=hashes.get(icon.sha256)||[];matches.push(icon);hashes.set(icon.sha256,matches);icon.brands=[];icon.usage=[];}
 for(const brand of config.brands){
  const repository=new URL(brand.repository+'/',root),directory=decodeURIComponent(repository.pathname);
  const files=execFileSync('git',['ls-files','-z'],{cwd:directory,encoding:'utf8',maxBuffer:16*1024*1024}).split('\0').filter(file=>brand.roots.some(prefix=>file.startsWith(prefix+'/'))&&!/(?:^|\/)(?:registry|node_modules|dist|neuroartan)(?:\/|$)|registry-index\.json$|icon-manifest\.json$/.test(file));
  const sources=[];const aliases=new Map();
  for(const file of files){
   if(!/\.(?:svg|json|js|mjs|css|html)$/.test(file))continue;
   let bytes;try{bytes=await readFile(path.join(directory,file));}catch{throw Error('Registered brand source unavailable: '+brand.id+'/'+file);}
   if(file.endsWith('.svg')){const matches=hashes.get(createHash('sha256').update(bytes).digest('hex'));if(matches?.length===1&&matches[0].hasArtwork){const list=aliases.get(matches[0].id)||[];list.push(file.replace(/^docs\//,''));aliases.set(matches[0].id,list);}continue;}
   sources.push({file,text:bytes.toString()});
  }
  for(const icon of icons){
   const names=[icon.path,...(aliases.get(icon.id)||[])];
   const evidence=sources.filter(source=>names.some(name=>source.text.includes(name))).slice(0,3).map(source=>source.file);
   if(evidence.length){if(!icon.brands.includes(brand.id))icon.brands.push(brand.id);icon.usage.push({brand:brand.id,evidence});if(brand.parent&&!icon.brands.includes(brand.parent))icon.brands.push(brand.parent);}
  }
 }
 return config.brands.map(({id,label})=>({id,label}));
}
