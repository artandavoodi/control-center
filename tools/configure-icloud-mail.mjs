import {mkdir,writeFile,chmod} from 'node:fs/promises';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {mailDirectory,keychainService,validateICloudSettings} from './icloud-mail.mjs';
if(process.platform!=='darwin')throw Error('iCloud Keychain setup must run on the trusted Mac.');
const [user,from]=process.argv.slice(2),settings=validateICloudSettings({user,from});
// The password is entered only into macOS's hidden prompt, never into arguments or files.
const saved=spawnSync('/usr/bin/security',['add-generic-password','-U','-a',settings.user,'-s',keychainService,'-w'],{stdio:'inherit'});
if(saved.status!==0)throw Error('Keychain setup was not completed. No sending account was enabled.');
await mkdir(mailDirectory,{recursive:true,mode:0o700});const file=path.join(mailDirectory,'settings.json');await writeFile(file,JSON.stringify(settings,null,2)+'\n',{mode:0o600});await chmod(file,0o600);
console.log('iCloud settings saved privately. Verify SMTP authentication before enabling Send reply.');
