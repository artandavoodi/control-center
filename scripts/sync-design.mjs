import {execFileSync} from 'node:child_process';
import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const target='assets/css/layers/control-center/shared',sources={'themes.css':'docs/assets/css/core/02-foundation/themes.css','loaders.css':'docs/assets/css/core/03-primitives/loaders.css','close-button.css':'docs/assets/css/core/04-systems/close-button.css','close-button.js':'docs/assets/js/core/01-foundation/close-button.js'};
const destination=name=>name.endsWith('.js')?'assets/js/layers/control-center/operations/shared/'+name:target+'/'+name;
sources['profile-media-editor.js']='docs/assets/js/layers/website/ui/profile-media-editor.js';
sources['profile-media-editor.html.js']='docs/assets/fragments/layers/website/profile/private/media/profile-media-editor.html';
sources['profile-media-editor.css']='docs/assets/css/layers/website/ui/profile-media-editor.css';
sources['profile-media-action.css']='docs/assets/css/core/03-primitives/profile-media-action.css';
sources['icons.css']='docs/assets/css/core/03-primitives/icons.css';
sources['slider.css']='docs/assets/css/core/03-primitives/slider.css';
sources['buttons.css']='docs/assets/css/core/03-primitives/buttons.css';
sources['utilities.css']='docs/assets/css/core/02-foundation/utilities.css';
sources['toast.js']='docs/assets/js/core/02-systems/toast.js';
sources['toast.css']='docs/assets/css/core/04-systems/toast.css';
sources['notification-feed.js']='docs/assets/js/core/02-systems/notification-feed.js';
sources['magnetic-navigation.js']='docs/assets/js/core/02-systems/magnetic-navigation.js';
sources['notifications.css']='docs/assets/css/core/04-systems/notifications.css';
sources['toggle.css']='docs/assets/css/core/03-primitives/toggle.css';
const hash=bytes=>createHash('sha256').update(bytes).digest('hex');
if(process.argv.includes('--sync')){
 const source='../website',revision=execFileSync('git',['-C',source,'rev-parse','HEAD'],{encoding:'utf8'}).trim();
 await mkdir(target,{recursive:true});const files={};
 for(const [name,file] of Object.entries(sources)){const original=execFileSync('git',['-C',source,'show',revision+':'+file]);const bytes=name.endsWith('.html.js')?Buffer.from('export default '+JSON.stringify(original.toString())+';\n'):original;await writeFile(destination(name),bytes);files[name]={file,sha256:hash(bytes)};}
 await writeFile(target+'/manifest.json',JSON.stringify({source:'artandavoodi/website',revision,files},null,2)+'\n');
}else{const manifest=JSON.parse(await readFile(target+'/manifest.json','utf8'));for(const name of Object.keys(sources)){if(hash(await readFile(destination(name)))!==manifest.files?.[name]?.sha256)throw Error('Shared design source drift: '+name);}}
