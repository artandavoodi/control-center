import {readFile,writeFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
const target='assets/data/control-center/partnership-defaults.json',digest=value=>createHash('sha256').update(value).digest('hex');
if(process.argv.includes('--sync')){
 const source='../artanrecords',file='docs/assets/data/partnerships.json',revision=execFileSync('git',['-C',source,'rev-parse','HEAD'],{encoding:'utf8'}).trim();
 const bytes=execFileSync('git',['-C',source,'show',revision+':'+file]),data=JSON.parse(bytes);
 const snapshot={source:'artandavoodi/artanrecords',revision,file,sourceSha256:digest(bytes),commercialTermsVersion:data.commercialTermsVersion,items:data.items.map(({id,name,artistShare,labelShare})=>({id,name,artistShare,labelShare}))};
 await writeFile(target,JSON.stringify(snapshot,null,2)+'\n');
}
const data=JSON.parse(await readFile(target,'utf8'));
if(!/^[a-f0-9]{40}$/.test(data.revision)||data.items.map(item=>item.id).join(',')!=='silver,gold,platinum'||!Number.isInteger(data.commercialTermsVersion)||data.items.some(item=>![item.artistShare,item.labelShare].every(value=>Number.isInteger(value)&&value>=0&&value<=100)||item.artistShare+item.labelShare!==100))throw Error('Invalid canonical partnership defaults');
