import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {assertPreservesSvgArtwork} from '../registry/icons/exporters/public/public-icon-exporter.js';
const manifest=JSON.parse(await readFile('registry/icons/manifests/icon-manifest.json','utf8'));
const tokens=JSON.parse(await readFile('registry/tokens/manifests/runtime-tokens.json','utf8'));
const icons=[];
for(const item of Object.values(manifest)){
 const source='registry/icons/source/'+item.path,mirror='registry/icons/public/assets/'+item.path;
 const svg=await readFile(source,'utf8'),existing=await readFile(mirror,'utf8');
 assertPreservesSvgArtwork(svg,existing,mirror);
 if(svg!==existing)throw Error('Canonical icon and deployment mirror differ: '+item.id+'. Review the source before building.');
 const nonCircle=/<(?:path|rect|line|polygon|polyline|ellipse|use|image|text)\b/.test(svg),circles=svg.match(/<circle\b/g)||[],dot=circles.length===1&&/<circle\b[^>]*\br="2"/.test(svg);
 icons.push({id:item.id,path:item.path,publicPath:'/registry/icons/public/assets/'+item.path,source,hasArtwork:nonCircle||(circles.length>0&&!dot),sha256:createHash('sha256').update(svg).digest('hex')});
}
// Public registry metadata only; never expose compiler-local absolute source paths.
await writeFile('assets/data/control-center/registry-index.json',JSON.stringify({tokens:Object.entries(tokens).map(([id,value])=>({id,value,source:'registry/tokens/manifests/runtime-tokens.json'})),icons},null,2)+'\n');
console.log('Built sanitized token and icon registry index. No source artwork was modified.');
