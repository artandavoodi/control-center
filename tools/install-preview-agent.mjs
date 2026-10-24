import {mkdir,writeFile,chmod} from 'node:fs/promises';
import {homedir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
import {privatePreviewOrigin} from '../assets/js/layers/control-center/operations/previews.js';
if(process.platform!=='darwin')throw Error('This service installer is for the trusted Mac only.');
const origin=privatePreviewOrigin(process.argv[2]);
if(!origin)throw Error('Provide the Mac private HTTPS origin.');
const root=fileURLToPath(new URL('../',import.meta.url)),label='live.artan.control-center',logs=path.join(homedir(),'Library/Logs/Artan');
const destination=path.join(homedir(),'Library/LaunchAgents',label+'.plist');
const xml=value=>String(value).replace(/[<>&"']/g,char=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&apos;'}[char]));
const plist=`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
<key>Label</key><string>${label}</string>
<key>ProgramArguments</key><array><string>${xml(process.execPath)}</string><string>${xml(path.join(root,'server.mjs'))}</string><string>--updates</string><string>--previews</string></array>
<key>WorkingDirectory</key><string>${xml(root)}</string>
<key>EnvironmentVariables</key><dict><key>CONTROL_PREVIEW_PRIVATE_ORIGIN</key><string>${xml(origin)}</string><key>PATH</key><string>/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin</string></dict>
<key>RunAtLoad</key><true/><key>KeepAlive</key><true/>
<key>ThrottleInterval</key><integer>15</integer>
<key>StandardOutPath</key><string>${xml(path.join(logs,'control-center.log'))}</string>
<key>StandardErrorPath</key><string>${xml(path.join(logs,'control-center-error.log'))}</string>
</dict></plist>\n`;
await mkdir(path.dirname(destination),{recursive:true});await mkdir(logs,{recursive:true,mode:0o700});
await writeFile(destination,plist,{mode:0o600});await chmod(destination,0o600);
execFileSync('plutil',['-lint',destination],{stdio:'inherit'});
execFileSync('launchctl',['bootstrap','gui/'+process.getuid(),destination],{stdio:'inherit'});
console.log('Control Center is registered for this Mac login. Keep the Mac awake for remote access.');
