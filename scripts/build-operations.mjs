import {build} from 'esbuild';
import {mkdir,copyFile,rm,readFile} from 'node:fs/promises';
import {dirname} from 'node:path';
await build({entryPoints:['assets/js/layers/control-center/operations/main.js'],bundle:true,format:'esm',target:['safari16','chrome110'],outfile:'assets/js/layers/control-center/operations/dist.js',minify:true});
const config=JSON.parse(await readFile('assets/data/control-center/operations.json','utf8'));
// Publish only the staff client and its explicit public dependencies, never the repository.
const files=['index.html','CNAME','assets/js/layers/control-center/operations/dist.js','assets/css/layers/control-center/operations.css','assets/css/layers/control-center/00-orchestrator/00-control-center-all.css','registry/tokens/manifests/control-center.tokens.css',...config.navigation.map(item=>'registry/icons/public/assets/'+item.icon)];
await rm('_site',{recursive:true,force:true});
for(const file of files){await mkdir(dirname('_site/'+file),{recursive:true});await copyFile(file,'_site/'+file);}
