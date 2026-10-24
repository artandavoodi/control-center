import http from 'node:http';
import {readFile,realpath,stat} from 'node:fs/promises';
import path from 'node:path';
import {loadPreviewRegistry} from './preview-registry.mjs';
const entry=(await loadPreviewRegistry()).find(item=>item.id===process.argv[2]&&item.strategy==='static');
if(!entry)throw Error('Choose a registered static preview.');
const root=await realpath(path.resolve(entry.directory,entry.publicRoot));
const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.webp':'image/webp','.avif':'image/avif','.woff':'font/woff','.woff2':'font/woff2','.xml':'application/xml','.txt':'text/plain','.mp3':'audio/mpeg','.mp4':'video/mp4','.pdf':'application/pdf','.ico':'image/x-icon','.webmanifest':'application/manifest+json'};
http.createServer(async(req,res)=>{
 res.setHeader('Cache-Control','no-store');res.setHeader('X-Content-Type-Options','nosniff');res.setHeader('X-Artan-Preview',entry.id);
 if(!['GET','HEAD'].includes(req.method)){res.writeHead(405).end();return;}
 try{
  const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  const parts=pathname.split('/').filter(Boolean);
  if(parts.some(part=>part.startsWith('.')||['tools','scripts','node_modules','supabase','tests','test','src'].includes(part))||parts.at(-1)==='package.json'||parts.at(-1)==='package-lock.json')throw Error('Not public');
  let target=path.resolve(root,'.'+pathname);
  if((await stat(target)).isDirectory())target=path.join(target,'index.html');
  target=await realpath(target);
  if(!target.startsWith(root+path.sep)||!types[path.extname(target)])throw Error('Not public');
  res.setHeader('Content-Type',types[path.extname(target)]);res.end(req.method==='HEAD'?'':await readFile(target));
 }catch{res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'});res.end(req.method==='HEAD'?'':await readFile(path.join(root,'404.html')).catch(()=> 'Not found'));}
}).listen(entry.port,'127.0.0.1',()=>console.log('Preview ready: http://127.0.0.1:'+entry.port+'/'));
