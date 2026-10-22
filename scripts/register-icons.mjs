import {iconCompiler} from '../registry/icons/compiler/icon-compiler.js';
import {publicIconExporter} from '../registry/icons/exporters/public/public-icon-exporter.js';
import {runtimeIconExporter} from '../registry/icons/exporters/runtime/runtime-icon-exporter.js';
import {swiftIconExporter} from '../registry/icons/exporters/swift/swift-icon-exporter.js';
import {readFileSync} from 'node:fs';
const paths=process.argv.slice(2);
if(!paths.length)throw Error('Provide the canonical registry-relative SVG paths to register.');
for(const path of paths){if(!/^[a-zA-Z0-9/_-]+\.svg$/.test(path)||path.includes('..'))throw Error('Use a canonical registry-relative SVG path.');const svg=readFileSync('registry/icons/source/'+path,'utf8');if(!/<(?:path|circle|rect|line|polyline|polygon|ellipse|use|image|text)\b/.test(svg))throw Error('Empty SVG slot: '+path+'. Add the registered dot placeholder or your authored vector to the source before registering.');}
iconCompiler.load({cleanDuplicates:false});
publicIconExporter.exportPaths(paths);
runtimeIconExporter.export();
swiftIconExporter.export();
console.log('Registered and mirrored only the requested source icons. Existing vectors were not replaced.');
