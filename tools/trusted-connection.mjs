export function validateTrustedConnection(request,{remoteOrigin='',action}){
 const host=request.headers.host||'',origin=request.headers.origin;
 const local=/^127\.0\.0\.1:\d+$/.test(host),remote=remoteOrigin&&host===new URL(remoteOrigin).host;
 if(!local&&!remote)throw Error('Unrecognized Mac service address.');
 if(origin&&origin!==('http://'+host)&&!(remoteOrigin&&origin==='https://control.artan.live')&&origin!==remoteOrigin)throw Error('Unrecognized Control Center origin.');
 if(!origin&&request.headers['sec-fetch-site']!=='same-origin')throw Error('A trusted browser origin is required.');
 if(request.method!=='OPTIONS'&&request.headers['x-control-center-action']!==action)throw Error('Invalid Mac service action.');
 return origin;
}
export function allowTrustedCors(response,origin){
 if(origin){response.setHeader('Access-Control-Allow-Origin',origin);response.setHeader('Vary','Origin');}
 response.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS');
 response.setHeader('Access-Control-Allow-Headers','Authorization, X-Control-Center-Action, Content-Type, Idempotency-Key');
}
