import {mkdir,readFile,writeFile,readdir,rm,lstat} from 'node:fs/promises';
import {resolve,relative,dirname,sep} from 'node:path';

export async function writeIfChanged(file,value){
 const bytes=Buffer.from(value);
 try{if((await readFile(file)).equals(bytes))return;}catch(error){if(error.code!=='ENOENT')throw error;}
 await writeFile(file,bytes);
}

// Reconcile the explicit publish allowlist without replacing an iCloud directory.
export function publishOutput(directory){
 const root=resolve(directory),files=new Set();
 async function write(file,value){
  const destination=resolve(root,file),name=relative(root,destination);
  if(!name||name.startsWith('..')||resolve(destination)===root)throw Error('Invalid publish output path');
  await mkdir(root,{recursive:true});
  if((await lstat(root)).isSymbolicLink())throw Error('Publish output cannot be a symlink');
  let parent=root;
  for(const part of relative(root,dirname(destination)).split(sep).filter(Boolean)){parent=resolve(parent,part);await mkdir(parent,{recursive:true});if((await lstat(parent)).isSymbolicLink())throw Error('Publish output cannot traverse a symlink');}
  try{if((await lstat(destination)).isSymbolicLink())throw Error('Publish output cannot replace a symlink');}catch(error){if(error.code!=='ENOENT')throw error;}
  files.add(name);await writeIfChanged(destination,value);
 }
 async function prune(directory=root){
  const entries=await readdir(directory,{withFileTypes:true}).catch(error=>{if(error.code==='ENOENT')return [];throw error;});
  for(const entry of entries){const file=resolve(directory,entry.name);if(entry.isDirectory())await prune(file);else if(!files.has(relative(root,file)))await rm(file,{force:true});}
 }
 return {write,prune};
}
