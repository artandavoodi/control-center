import {build} from 'esbuild';
import {mkdir,copyFile,rm,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
execFileSync(process.execPath,['scripts/sync-account.mjs'],{stdio:'inherit'});
execFileSync(process.execPath,['scripts/sync-design.mjs'],{stdio:'inherit'});
execFileSync(process.execPath,['scripts/build-registry.mjs'],{stdio:'inherit'});
execFileSync(process.execPath,['scripts/build-roles.mjs'],{stdio:'inherit'});
await build({entryPoints:['assets/js/layers/control-center/operations/main.js'],bundle:true,format:'esm',target:['safari16','chrome110'],outfile:'assets/js/layers/control-center/operations/dist.js',minify:true,define:{__CONTROL_ASSET_REVISION__:JSON.stringify(createHash('sha256').update(await readFile('assets/data/control-center/registry-index.json')).digest('hex').slice(0,16))}});
await build({entryPoints:['assets/js/layers/control-center/operations/theme.js'],bundle:true,format:'iife',target:['safari16','chrome110'],outfile:'assets/js/layers/control-center/operations/theme-init.js',minify:true});
const config=JSON.parse(await readFile('assets/data/control-center/operations.json','utf8'));
// Publish only the staff client and its explicit public dependencies, never the repository.
const files=['index.html','CNAME','assets/js/layers/control-center/operations/dist.js','assets/js/layers/control-center/operations/theme-init.js','assets/css/layers/control-center/operations.css','assets/css/layers/control-center/shared/themes.css','assets/css/layers/control-center/shared/loaders.css','assets/css/layers/control-center/shared/close-button.css','assets/data/control-center/registry-index.json',...Object.values(JSON.parse(await readFile('registry/icons/manifests/icon-manifest.json','utf8'))).map(item=>'registry/icons/public/assets/'+item.path),'assets/css/layers/control-center/00-orchestrator/00-control-center-all.css','registry/tokens/manifests/control-center.tokens.css',...Object.values(config.chrome).map(path=>'registry/icons/public/assets/'+path),...config.navigation.map(item=>'registry/icons/public/assets/'+item.icon),...config.accountMenu.map(item=>'registry/icons/public/assets/'+item.icon)];
await rm('_site',{recursive:true,force:true});
files.push('assets/css/layers/control-center/shared/toggle.css');
let shell=await readFile('index.html','utf8');
for(const file of files){
 if(file==='index.html')continue;
 let destination=file;
 if(file==='assets/js/layers/control-center/operations/dist.js'||file==='assets/js/layers/control-center/operations/theme-init.js'||file==='assets/css/layers/control-center/operations.css'||file==='assets/css/layers/control-center/shared/themes.css'||file==='assets/css/layers/control-center/shared/loaders.css'||file==='assets/css/layers/control-center/shared/close-button.css'){
  const digest=createHash('sha256').update(await readFile(file)).digest('hex').slice(0,16);
  destination=file.replace(/\.(js|css)$/,`-${digest}.$1`);
  shell=shell.replace('./'+file,'./'+destination);
 }
 await mkdir(dirname('_site/'+destination),{recursive:true});await copyFile(file,'_site/'+destination);
}
await writeFile('_site/index.html',shell);
