import http from 'node:http';
import {readFile,realpath} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createUpdateService} from './tools/update-service.mjs';
import {createPreviewService} from './tools/preview-service.mjs';

const root=path.dirname(fileURLToPath(import.meta.url));
const port=Number(process.env.PORT||process.env.CONTROL_CENTER_PORT||8894);
const configuration=JSON.parse(await readFile(path.join(root,'assets/data/control-center/operations.json'),'utf8'));
const updateService=createUpdateService({enabled:process.argv.includes('--updates')&&!process.argv.includes('--preview'),config:configuration.supabase});
const previewService=createPreviewService({enabled:process.argv.includes('--previews')&&!process.argv.includes('--preview'),config:configuration.supabase});
const types=new Map([['.html','text/html; charset=utf-8'],['.css','text/css; charset=utf-8'],['.js','text/javascript; charset=utf-8'],['.json','application/json; charset=utf-8'],['.svg','image/svg+xml'],['.png','image/png'],['.jpg','image/jpeg'],['.jpeg','image/jpeg'],['.webp','image/webp'],['.woff2','font/woff2']]);
function reply(response,status,body,type='text/plain; charset=utf-8'){
 response.writeHead(status,{'Content-Type':type,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff','Referrer-Policy':'no-referrer'});response.end(body);
}
// This server serves the staff client only. All data access uses authenticated RLS/RPCs.
const server=http.createServer(async(request,response)=>{
 try{
  const apiUrl=new URL(request.url||'/','http://127.0.0.1');if(await previewService(request,response,apiUrl)||await updateService(request,response,apiUrl))return;
  if(!['GET','HEAD'].includes(request.method)){reply(response,405,'Method not allowed');return;}
  const url=new URL(request.url||'/','http://127.0.0.1');
  if(url.pathname.startsWith('/api/')){reply(response,410,'Legacy local administration is disabled. Use authenticated staff controls.');return;}
  const requested=decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname);
  if(requested.split('/').some(part=>part.startsWith('.'))||!types.has(path.extname(requested))||!(/^\/(assets|registry)\//.test(requested)||requested==='/index.html')){
   reply(response,403,'Forbidden');return;
  }
  const target=await realpath(path.resolve(root,requested.slice(1)));
  if(!target.startsWith(root+path.sep)){reply(response,403,'Forbidden');return;}
  const bytes=await readFile(target);reply(response,200,request.method==='HEAD'?'':bytes,types.get(path.extname(target)));
 }catch{reply(response,404,'Not found');}
});
server.listen(port,'127.0.0.1',()=>console.log('Control Center staff preview: http://127.0.0.1:'+port+'/'));
