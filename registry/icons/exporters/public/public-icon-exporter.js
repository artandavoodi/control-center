/** Canonical SVG propagation. Preflight every target before writing; never prune artwork. */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {iconTargets,iconRepositories} from '../../../propagation/icon-targets.js';
const sourceRoot=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../source');
const placeholder=svg=>!/<(?:path|rect|line|polygon|polyline|ellipse|use|image|text)\b/.test(svg)&&(!/<circle\b/.test(svg)||((svg.match(/<circle\b/g)||[]).length===1&&/<circle\b[^>]*\br="2"/.test(svg)));
export function assertPreservesSvgArtwork(incoming,existing,destination){if(placeholder(incoming)&&!placeholder(existing))throw Error('Icon artwork would be replaced by a placeholder: '+destination+'. Promote the artwork to its canonical source before synchronizing.');}
function list(root){if(!fs.existsSync(root))return [];return fs.readdirSync(root,{withFileTypes:true}).filter(entry=>entry.name!=='.DS_Store').flatMap(entry=>{const file=path.join(root,entry.name);if(entry.isSymbolicLink())throw Error('Icon registry symlinks are not allowed: '+file);if(/(?: copy(?: \d+)?|[- ]copy| \d+|\(\d+\))\.svg$/i.test(entry.name))throw Error('Duplicate icon requires review: '+file);return entry.isDirectory()?list(file):[file];});}
export function assertMirrorCanUpdate(incoming,existing,committed,destination){assertPreservesSvgArtwork(incoming,existing,destination);if(incoming!==existing&&!placeholder(existing)&&existing!==committed)throw Error('Edited icon mirror differs from its source: '+destination+'. Review and register the intended vector; no artwork was overwritten.');}
class PublicIconExporter{
 exportPaths(paths){
  const transfers=[];
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
  }
  for(const {source,destination} of transfers){fs.mkdirSync(path.dirname(destination),{recursive:true});fs.copyFileSync(source,destination);}
  return {registered:paths.length,targets:Object.keys(iconTargets).length};
 }
 export(){
  const paths=list(sourceRoot).filter(file=>file.endsWith('.svg')).map(file=>path.relative(sourceRoot,file).split(path.sep).join('/'));
  for(const root of Object.values(iconTargets))for(const file of list(root)){if(file.endsWith('.svg')&&!fs.existsSync(path.join(sourceRoot,path.relative(root,file))))throw Error('Mirror-only artwork requires canonical registration: '+file);}
  return this.exportPaths(paths);
 }
}
export const publicIconExporter=new PublicIconExporter();
