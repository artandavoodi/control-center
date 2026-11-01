import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile,writeFile,stat,utimes,symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {publishOutput} from './publish-output.mjs';
import {copyRegisteredSvg} from '../registry/icons/exporters/public/public-icon-exporter.js';
test('icon synchronization skips identical vectors and still transfers changed artwork',async()=>{
 const root=await mkdtemp(join(tmpdir(),'artan-icon-copy-'));
 try{const source=join(root,'source.svg'),target=join(root,'target.svg');await writeFile(source,'first');assert.equal(copyRegisteredSvg(source,target),true);await utimes(target,1,1);assert.equal(copyRegisteredSvg(source,target),false);assert.equal((await stat(target)).mtimeMs,1000);await writeFile(source,'second');assert.equal(copyRegisteredSvg(source,target),true);assert.equal(await readFile(target,'utf8'),'second');}finally{await rm(root,{recursive:true,force:true});}
});
test('publication preserves unchanged files and its directory while pruning non-allowlisted output',async()=>{
 const root=await mkdtemp(join(tmpdir(),'artan-publication-'));
 try{const first=publishOutput(root);await first.write('assets/app.js','public');await first.prune();const directory=(await stat(root)).ino,file=join(root,'assets/app.js');await utimes(file,1,1);await writeFile(join(root,'private.txt'),'must not publish');const next=publishOutput(root);await next.write('assets/app.js','public');await next.prune();assert.equal((await stat(root)).ino,directory);assert.equal((await stat(file)).mtimeMs,1000);await assert.rejects(readFile(join(root,'private.txt')));assert.equal(await readFile(file,'utf8'),'public');}finally{await rm(root,{recursive:true,force:true});}
});
test('publication refuses traversal and symbolic-link destinations',async()=>{
 const root=await mkdtemp(join(tmpdir(),'artan-publication-')),outside=await mkdtemp(join(tmpdir(),'artan-outside-'));
 try{const output=publishOutput(root);await assert.rejects(output.write('../escape','bad'));await writeFile(join(outside,'value'),'preserved');await symlink(outside,join(root,'linked'));await assert.rejects(output.write('linked/value','bad'));assert.equal(await readFile(join(outside,'value'),'utf8'),'preserved');}finally{await rm(root,{recursive:true,force:true});await rm(outside,{recursive:true,force:true});}
});
