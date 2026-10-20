import {execFileSync} from 'node:child_process';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const target='assets/js/layers/control-center/operations/shared';
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
if(process.argv.includes('--sync')){
 const source='../artanrecords-studio',revision=execFileSync('git',['-C',source,'rev-parse','HEAD'],{encoding:'utf8'}).trim();
 const bytes=execFileSync('git',['-C',source,'show',revision+':app/account.js']);
 await mkdir(target,{recursive:true});await writeFile(target+'/account.js',bytes);await writeFile(target+'/manifest.json',JSON.stringify({source:'artandavoodi/artanrecords-studio',revision,file:'app/account.js',sha256:hash(bytes)},null,2)+'\n');
}else{const manifest=JSON.parse(await readFile(target+'/manifest.json','utf8'));if(hash(await readFile(target+'/account.js'))!==manifest.sha256)throw Error('Shared account primitive drift');}
