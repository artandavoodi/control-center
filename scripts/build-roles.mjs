import {readdir,readFile,writeFile} from 'node:fs/promises';
if(!process.argv.includes('--sync')){
 const snapshot=JSON.parse(await readFile('assets/data/control-center/roles.json','utf8'));
 if(snapshot.roles.length!==15||new Set(snapshot.roles.map(role=>role.id)).size!==15)throw Error('Leadership snapshot is incomplete or duplicated.');
 if(snapshot.roles.some(role=>!role.source.startsWith('website/docs/assets/data/company/leadership-members/')||!role.publicUrl.startsWith('https://neuroartan.com/')))throw Error('Leadership snapshot contains an unregistered public source.');
 console.log('Verified committed public leadership snapshot. Use --sync to refresh from the local website owner.');
 process.exit(0);
}
const source='../website/docs/assets/data/company/leadership-members/';
const roles=[];
// Import only the existing public role descriptions, never private personnel records.
for(const file of (await readdir(source)).filter(file=>file.endsWith('.json')).sort()){
 const item=JSON.parse(await readFile(source+file,'utf8'));
 if(!item.role_id||!item.role_title)continue;
 roles.push({id:item.role_id,title:item.role_title,order:item.order||0,summary:item.summary||'',responsibilities:item.responsibilities||[],availability:item.member_type==='available-position'?'available-position':'defined-position',source:'website/docs/assets/data/company/leadership-members/'+file,publicUrl:'https://neuroartan.com'+item.profile_route});
}
if(roles.length!==15||new Set(roles.map(role=>role.id)).size!==roles.length)throw Error('Leadership role source is incomplete or duplicated.');
await writeFile('assets/data/control-center/roles.json',JSON.stringify({roles:roles.sort((a,b)=>a.order-b.order)},null,2)+'\n');
console.log('Built public leadership role snapshot; no staff assignments or vacancy publications changed.');
