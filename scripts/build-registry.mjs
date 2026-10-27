import {readFile,writeFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {assertPreservesSvgArtwork} from '../registry/icons/exporters/public/public-icon-exporter.js';
import {collectIconUsage,collectTokenUsage} from './icon-usage.mjs';
const manifest=JSON.parse(await readFile('registry/icons/manifests/icon-manifest.json','utf8'));
const tokens=JSON.parse(await readFile('registry/tokens/manifests/runtime-tokens.json','utf8'));
const components=JSON.parse(await readFile('assets/data/control-center/components.json','utf8')).map(row=>({...row,tokens:Object.keys(tokens).filter(id=>new RegExp(row.tokenPattern).test(id))}));
const icons=[];
for(const item of Object.values(manifest)){
 const source='registry/icons/source/'+item.path,mirror='registry/icons/public/assets/'+item.path;
 const svg=await readFile(source,'utf8'),existing=await readFile(mirror,'utf8');
 assertPreservesSvgArtwork(svg,existing,mirror);
 if(svg!==existing)throw Error('Canonical icon and deployment mirror differ: '+item.id+'. Review the source before building.');
 const nonCircle=/<(?:path|rect|line|polygon|polyline|ellipse|use|image|text)\b/.test(svg),circles=svg.match(/<circle\b/g)||[],dot=circles.length===1&&/<circle\b[^>]*\br="2"/.test(svg);
 const tags=[...new Set(item.id.split(/[\/-]/).concat(/plus|add|create/.test(item.id)?['add','plus','create']:[]))];
 icons.push({id:item.id,path:item.path,publicPath:'/registry/icons/public/assets/'+item.path,source,tags,category:item.id.split('/').slice(0,2).join('/'),hasArtwork:! /data-artwork-status=["']pending["']/.test(svg)&&(nonCircle||(circles.length>0&&!dot)),sha256:createHash('sha256').update(svg).digest('hex')});
}
// Public registry metadata only; never expose compiler-local absolute source paths.
const brands=await collectIconUsage(icons);
const category=id=>/color|surface|background/.test(id)?'color':/font|type-|typography|line-height|letter-spacing/.test(id)?'typography':/motion|duration|ease|hover|transition|animation/.test(id)?'motion':/spacing|size|width|height|radius/.test(id)?'dimensions':'other';
const motions=[{id:'close-control',description:'Close control: X at rest, minus on fine-pointer hover. Uses the canonical shared primitive and reduced-motion rules.',source:'../website/docs/assets/css/core/04-systems/close-button.css',category:'interaction',tags:['close','hover','X','minus','interaction']}];
motions.push({id:'ui-loader-circle-breathe',description:'Theme-aware breathing loader. Uses the shared loader keyframes, duration and easing.',source:'../website/docs/assets/css/core/03-primitives/loaders.css',category:'loading',tags:['loading','breathing','dot','animation']},{id:'control-center-account-enter',description:'Account-menu entrance. Uses the existing platform keyframes and fast duration; disabled with reduced motion.',source:'assets/css/layers/control-center/operations.css',category:'entrance',tags:['account','popover','entrance','animation']});
const tokenRows=Object.entries(tokens).map(([id,value])=>({id,value,category:category(id),tags:id.split('-'),source:'registry/tokens/manifests/runtime-tokens.json'}));
await collectTokenUsage(tokenRows);
for(const row of components)row.brands=[...new Set(row.tokens.flatMap(id=>tokenRows.find(token=>token.id===id)?.brands||[]))];
for(const row of motions)row.brands=[...new Set(tokenRows.filter(token=>token.id.includes(row.id==='close-control'?'close':row.id==='ui-loader-circle-breathe'?'loader':'account')).flatMap(token=>token.brands||[]))];
await writeFile('assets/data/control-center/registry-index.json',JSON.stringify({brands,tokens:tokenRows,icons,motions,components},null,2)+'\n');
console.log('Built sanitized token and icon registry index. No source artwork was modified.');
