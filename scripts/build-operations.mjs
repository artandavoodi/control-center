import {build} from 'esbuild';
import {mkdir,copyFile,rm,readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {dirname,posix} from 'node:path';
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
files.push('assets/css/layers/control-center/shared/toggle.css','assets/css/layers/control-center/shared/toast.css','assets/css/layers/control-center/shared/profile-media-action.css','assets/brand/email-wordmark.png');
files.push(...['profile-media-editor.css','icons.css','slider.css','buttons.css','utilities.css'].map(name=>'assets/css/layers/control-center/shared/'+name));
// An allowlisted stylesheet owns its local imports; publish the complete dependency tree.
for(let index=0;index<files.length;index++){
 const file=files[index];if(!file.endsWith('.css'))continue;
 const css=await readFile(file,'utf8');
 for(const match of css.matchAll(/@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g)){
  if(/^(?:https?:|\/\/|data:)/i.test(match[1]))continue;
  const dependency=posix.normalize(posix.join(posix.dirname(file),match[1]));
  if(!/^(assets|registry)\/.+\.css$/.test(dependency))throw Error('Unregistered stylesheet dependency: '+dependency);
  if(!files.includes(dependency))files.push(dependency);
 }
}
let shell=await readFile('index.html','utf8');
const stylesheetAssets=new Map();
async function stylesheet(file,ancestors=[]){
 if(ancestors.includes(file))throw Error('Circular stylesheet import: '+file);
 if(stylesheetAssets.has(file))return stylesheetAssets.get(file);
 let css=await readFile(file,'utf8');
 for(const match of css.matchAll(/@import\s+(?:url\(\s*)?["']([^"']+)["']\s*\)?\s*;/g)){
  if(/^(?:https?:|\/\/|data:)/i.test(match[1]))continue;
  const dependency=posix.normalize(posix.join(posix.dirname(file),match[1])),child=await stylesheet(dependency,[...ancestors,file]);
  const relative=posix.relative(posix.dirname(file),child.destination);
  css=css.replace(match[0],`@import url('${relative.startsWith('.')?relative:'./'+relative}');`);
 }
 const digest=createHash('sha256').update(css).digest('hex').slice(0,16),asset={destination:file.replace(/\.css$/,`-${digest}.css`),css};
 stylesheetAssets.set(file,asset);return asset;
}
for(const file of files){
 if(file==='index.html')continue;
 if(file.endsWith('.css')){
  const asset=await stylesheet(file);shell=shell.replace('./'+file,'./'+asset.destination);
  await mkdir(dirname('_site/'+asset.destination),{recursive:true});await writeFile('_site/'+asset.destination,asset.css);continue;
 }
 let destination=file;
 if(file==='assets/js/layers/control-center/operations/dist.js'||file==='assets/js/layers/control-center/operations/theme-init.js'){
  const digest=createHash('sha256').update(await readFile(file)).digest('hex').slice(0,16);
  destination=file.replace(/\.(js|css)$/,`-${digest}.$1`);
  shell=shell.replace('./'+file,'./'+destination);
 }
 await mkdir(dirname('_site/'+destination),{recursive:true});await copyFile(file,'_site/'+destination);
}
await writeFile('_site/index.html',shell);
