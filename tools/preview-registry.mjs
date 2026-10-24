import {readFile,realpath} from 'node:fs/promises';
import {homedir} from 'node:os';
import path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
const execute=promisify(execFile);
const prompts=path.join(homedir(),'Documents/Neuroartan/I/04 - Infrastructure/06 - Platform Infrastructure/01 - Standards & Governance/04 - Prompts');
export const previewRegistryFile=path.join(prompts,'04 - Local Development/runtime/previews.json');
export async function loadPreviewRegistry(file=previewRegistryFile){
 const registry=JSON.parse(await readFile(file,'utf8'));
 const layers=JSON.parse(await readFile(path.join(prompts,'02 - Update/runtime/layers.json'),'utf8')).layers;
 return Promise.all(registry.repositories.map(async entry=>{
  const layer=layers.find(item=>item.id===entry.layer);
  const item={...entry,domains:entry.domains||layer?.domains||[],directory:layer?path.join(homedir(),layer.path):null,publicRoot:layer?.publicRoot};
  if(!entry.strategy)return item;
  if(!layer||!Number.isInteger(entry.port)||entry.port<1024||entry.port>65535)throw Error('Invalid preview registration.');
  item.directory=await realpath(item.directory);
  const {stdout}=await execute('git',['remote','get-url','origin'],{cwd:item.directory,timeout:5000});
  const remote=stdout.trim().replace(/\.git$/,'').replace(/^git@github.com:/,'https://github.com/');
  if(remote!=='https://github.com/artandavoodi/'+entry.repository)throw Error('Repository identity does not match its registered checkout.');
  return item;
 }));
}
export function publicPreviewEntry({directory,publicRoot,...entry}){return entry;}
