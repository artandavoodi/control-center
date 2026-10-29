import {randomBytes,timingSafeEqual} from 'node:crypto';
import {spawnSync,execFileSync} from 'node:child_process';
import {mkdtemp,writeFile,rm,mkdir} from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {mailDirectory} from './icloud-mail.mjs';
import {workerKeychainService} from './acknowledgment-worker.mjs';
// This provisions a dedicated queue credential, never a database service-role key.
const root=process.argv[2],project='hahtbepdrjkjluhespbs',account='artanrecords-acknowledgments';
if(process.platform!=='darwin'||!root||!path.isAbsolute(root))throw Error('Provide the verified shared backend root on the trusted Mac.');
const secret=randomBytes(32).toString('hex'),temporary=await mkdtemp(path.join(tmpdir(),'artan-ack-'));
try{
 const stored=spawnSync('/usr/bin/security',['-i'],{input:`add-generic-password -U -a ${account} -s "${workerKeychainService}" -w ${secret}\n`,encoding:'utf8'});
 if(stored.status!==0)throw Error('Private worker Keychain setup failed.');
 const checked=execFileSync('/usr/bin/security',['find-generic-password','-a',account,'-s',workerKeychainService,'-w'],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 if(checked.length!==secret.length||!timingSafeEqual(Buffer.from(checked),Buffer.from(secret)))throw Error('Private worker credential verification failed.');
 const file=path.join(temporary,'worker.env');await writeFile(file,'ARTANRECORDS_ACKNOWLEDGMENT_WORKER_SECRET='+secret+'\n',{mode:0o600});
 const provisioned=spawnSync('supabase',['secrets','set','--project-ref',project,'--env-file',file],{cwd:root,stdio:'pipe'});
 if(provisioned.status!==0)throw Error('The private backend worker connection was not provisioned.');
 await mkdir(mailDirectory,{recursive:true,mode:0o700});
 await writeFile(path.join(mailDirectory,'worker.json'),JSON.stringify({account,endpoint:`https://${project}.supabase.co/functions/v1/enquiry-acknowledgments`}),{mode:0o600});
 console.log('Dedicated acknowledgment connection provisioned privately. No mail sent.');
}finally{await rm(temporary,{recursive:true,force:true});}
