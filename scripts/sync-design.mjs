import {execFileSync} from 'node:child_process';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const target='assets/css/layers/control-center/shared',sources={'themes.css':'docs/assets/css/core/02-foundation/themes.css','loaders.css':'docs/assets/css/core/03-primitives/loaders.css','close-button.css':'docs/assets/css/core/04-systems/close-button.css','close-button.js':'docs/assets/js/core/01-foundation/close-button.js'};
const destination=name=>name.endsWith('.js')?'assets/js/layers/control-center/operations/shared/'+name:target+'/'+name;
sources['toggle.css']='docs/assets/css/core/03-primitives/toggle.css';
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
if(process.argv.includes('--sync')){
 const source='../website',revision=execFileSync('git',['-C',source,'rev-parse','HEAD'],{encoding:'utf8'}).trim();
 await mkdir(target,{recursive:true});const files={};
 for(const [name,file] of Object.entries(sources)){const bytes=execFileSync('git',['-C',source,'show',revision+':'+file]);await writeFile(destination(name),bytes);files[name]={file,sha256:hash(bytes)};}
 await writeFile(target+'/manifest.json',JSON.stringify({source:'artandavoodi/website',revision,files},null,2)+'\n');
}else{const manifest=JSON.parse(await readFile(target+'/manifest.json','utf8'));for(const name of Object.keys(sources)){if(hash(await readFile(destination(name)))!==manifest.files?.[name]?.sha256)throw Error('Shared design source drift: '+name);}}
