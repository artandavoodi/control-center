import nodemailer from 'nodemailer';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import {readFile} from 'node:fs/promises';
import {homedir} from 'node:os';
import path from 'node:path';
const execute=promisify(execFile);
export const mailDirectory=path.join(homedir(),'Library/Application Support/Artan/mail');
export const keychainService='Artanrecords iCloud SMTP';
export function validateICloudSettings(value){
 if(!value||!/^\S+@\S+\.\S+$/.test(value.user||'')||/[\r\n]/.test(value.user)||!/^[-a-z0-9._+]+@artanrecords\.com$/i.test(value.from||''))throw Error('Configure the iCloud account and an Artanrecords sender.');
 return {user:value.user,from:value.from.toLowerCase(),name:'Artanrecords'};
}
export async function loadICloudSettings(){return validateICloudSettings(JSON.parse(await readFile(path.join(mailDirectory,'settings.json'),'utf8')));}
export async function iCloudTransport(settings){
 const {stdout}=await execute('/usr/bin/security',['find-generic-password','-a',settings.user,'-s',keychainService,'-w'],{timeout:15000,maxBuffer:4096});
 return nodemailer.createTransport({host:'smtp.mail.me.com',port:587,secure:false,requireTLS:true,tls:{servername:'smtp.mail.me.com',minVersion:'TLSv1.2',rejectUnauthorized:true},auth:{user:settings.user,pass:stdout.trim()},disableFileAccess:true,disableUrlAccess:true,connectionTimeout:15000,greetingTimeout:15000,socketTimeout:30000,logger:false,debug:false});
}
