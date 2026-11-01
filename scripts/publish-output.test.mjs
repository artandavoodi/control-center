import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm,readFile,writeFile,stat,utimes,symlink} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {publishOutput} from './publish-output.mjs';
test('publication preserves unchanged files and its directory while pruning non-allowlisted output',async()=>{
 const root=await mkdtemp(join(tmpdir(),'artan-publication-'));
 try{const first=publishOutput(root);await first.write('assets/app.js','public');await first.prune();const directory=(await stat(root)).ino,file=join(root,'assets/app.js');await utimes(file,1,1);await writeFile(join(root,'private.txt'),'must not publish');const next=publishOutput(root);await next.write('assets/app.js','public');await next.prune();assert.equal((await stat(root)).ino,directory);assert.equal((await stat(file)).mtimeMs,1000);await assert.rejects(readFile(join(root,'private.txt')));assert.equal(await readFile(file,'utf8'),'public');}finally{await rm(root,{recursive:true,force:true});}
});
test('publication refuses traversal and symbolic-link destinations',async()=>{
 const root=await mkdtemp(join(tmpdir(),'artan-publication-')),outside=await mkdtemp(join(tmpdir(),'artan-outside-'));
 try{const output=publishOutput(root);await assert.rejects(output.write('../escape','bad'));await writeFile(join(outside,'value'),'preserved');await symlink(outside,join(root,'linked'));await assert.rejects(output.write('linked/value','bad'));assert.equal(await readFile(join(outside,'value'),'utf8'),'preserved');}finally{await rm(root,{recursive:true,force:true});await rm(outside,{recursive:true,force:true});}
});
