/** Canonical SVG propagation. Preflight every target before writing; never prune artwork. */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import aliases from '../../../propagation/icon-aliases.json' with {type:'json'};
import {iconTargets,iconRepositories} from '../../../propagation/icon-targets.js';
const sourceRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../source');
const controlRoot=path.resolve(sourceRoot,'../../..');
const digest=bytes=>createHash('sha256').update(bytes).digest('hex');
function registeredAliases(){
 const account=JSON.parse(fs.readFileSync(path.resolve(controlRoot,'../artanrecords-studio/content/account.json'),'utf8'));
 return [...aliases,...Object.entries({placeholder:account.placeholderIcon,...account.icons}).map(([name,source])=>({repository:'artanrecords-studio',file:'app/icons/'+name+'.svg',source}))];
}
export function verifyAliasExports(){
 const consumers=registeredAliases();
 for(const alias of consumers){
  const destination=path.resolve(controlRoot,'..',alias.repository,alias.file);
  if(!fs.readFileSync(path.join(sourceRoot,alias.source)).equals(fs.readFileSync(destination)))throw Error('Registered icon consumer is stale: '+alias.repository+'/'+alias.file);
 }
 return consumers.length;
}
const placeholder=svg=>/data-artwork-status=["']pending["']/.test(svg)||(!/<(?:path|rect|line|polygon|polyline|ellipse|use|image|text)\b/.test(svg)&&(!/<circle\b/.test(svg)||((svg.match(/<circle\b/g)||[]).length===1&&/<circle\b[^>]*\br="2"/.test(svg))));
export function assertPreservesSvgArtwork(incoming,existing,destination){if(placeholder(incoming)&&!placeholder(existing))throw Error('Icon artwork would be replaced by a placeholder: '+destination+'. Promote the artwork to its canonical source before synchronizing.');}
function list(root){if(!fs.existsSync(root))return [];return fs.readdirSync(root,{withFileTypes:true}).filter(entry=>entry.name!=='.DS_Store').flatMap(entry=>{const file=path.join(root,entry.name);if(entry.isSymbolicLink())throw Error('Icon registry symlinks are not allowed: '+file);if(/(?: copy(?: \d+)?|[- ]copy| \d+|\(\d+\))\.svg$/i.test(entry.name))throw Error('Duplicate icon requires review: '+file);return entry.isDirectory()?list(file):[file];});}
export function assertMirrorCanUpdate(incoming,existing,committed,destination){assertPreservesSvgArtwork(incoming,existing,destination);if(incoming!==existing&&!placeholder(existing)&&existing!==committed)throw Error('Edited icon mirror differs from its source: '+destination+'. Review and register the intended vector; no artwork was overwritten.');}
class PublicIconExporter{
 exportPaths(paths){
  const transfers=[];
  const consumers=registeredAliases();
  for(const relative of [...new Set(paths)]){
   if(!/^[a-z0-9/_-]+\.svg$/i.test(relative)||relative.includes('..'))throw Error('Invalid registered SVG path');
   const source=path.join(sourceRoot,relative),incoming=fs.readFileSync(source,'utf8');
   for(const [name,root] of Object.entries(iconTargets)){
    const repository=iconRepositories[name];if(!fs.existsSync(path.join(repository,'.git')))throw Error('Registered target repository is unavailable: '+name);
    const destination=path.join(root,relative);
    if(fs.existsSync(destination)){
     const existing=fs.readFileSync(destination,'utf8');let committed=null;
     if(incoming!==existing&&!placeholder(existing)){const old=spawnSync('git',['show','HEAD:'+path.relative(repository,destination).split(path.sep).join('/')],{cwd:repository,encoding:'utf8',timeout:15000,maxBuffer:8*1024*1024});if(old.status===0)committed=old.stdout;}
     assertMirrorCanUpdate(incoming,existing,committed,destination);
    }
    transfers.push({source,destination});
   }
   for(const alias of consumers.filter(alias=>alias.source===relative)){
    const repository=path.resolve(controlRoot,'..',alias.repository),destination=path.join(repository,alias.file);
    if(!fs.existsSync(path.join(repository,'.git')))throw Error('Registered icon consumer is unavailable: '+alias.repository);
    const existing=fs.readFileSync(destination,'utf8');
    const old=spawnSync('git',['show','HEAD:'+alias.file],{cwd:repository,encoding:'utf8',timeout:15000,maxBuffer:8*1024*1024});
    assertMirrorCanUpdate(incoming,existing,old.status===0?old.stdout:null,destination);
    transfers.push({source,destination,alias});
   }
  }
  const manifests=new Map();
  for(const transfer of transfers.filter(transfer=>transfer.alias)){
   const {alias}=transfer,repository=path.resolve(controlRoot,'..',alias.repository);
   const file=path.join(repository,alias.repository==='artanrecords-studio'?'app/icon-manifest.json':alias.repository==='artan-store'?'web/shared/manifest.json':alias.repository==='artandavoodi'?'planning/style-baseline.json':'planning/source-manifest.json');
   if(!manifests.has(file))manifests.set(file,JSON.parse(fs.readFileSync(file,'utf8')));
   const manifest=manifests.get(file),sha256=digest(fs.readFileSync(transfer.source));
   if(Array.isArray(manifest.files)){
    const record=manifest.files.find(record=>record.file===alias.file);if(record){record.sha256=sha256;record.sourceRepository='artandavoodi/control-center';record.sourceFile='registry/icons/source/'+alias.source;delete record.sourceCommit;}
   }else{
    const key=alias.repository==='artanrecords-studio'?path.basename(alias.file,'.svg'):alias.file.replace(/^web\/shared\//,'');
    if(Object.hasOwn(manifest.files,key))manifest.files[key]=sha256;
    if(alias.repository==='artanrecords-studio')manifest.available[key]=!placeholder(fs.readFileSync(transfer.source,'utf8'));
   }
  }
  for(const {source,destination} of transfers){fs.mkdirSync(path.dirname(destination),{recursive:true});fs.copyFileSync(source,destination);if(digest(fs.readFileSync(source))!==digest(fs.readFileSync(destination)))throw Error('Icon transfer verification failed: '+destination);}
  for(const [file,manifest] of manifests)fs.writeFileSync(file,JSON.stringify(manifest,null,2)+'\n');
  return {registered:paths.length,targets:Object.keys(iconTargets).length,aliases:transfers.filter(transfer=>transfer.alias).length};
 }
 export(){
  const paths=list(sourceRoot).filter(file=>file.endsWith('.svg')).map(file=>path.relative(sourceRoot,file).split(path.sep).join('/'));
  for(const root of Object.values(iconTargets))for(const file of list(root)){if(file.endsWith('.svg')&&!fs.existsSync(path.join(sourceRoot,path.relative(root,file))))throw Error('Mirror-only artwork requires canonical registration: '+file);}
  return this.exportPaths(paths);
 }
}
export const publicIconExporter=new PublicIconExporter();
