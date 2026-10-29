import {chromium} from '@playwright/test';
import {readFile,mkdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const source=process.argv[2];
if(!source||!path.isAbsolute(source))throw Error('Provide the verified canonical black wordmark SVG.');
const svg=await readFile(source,'utf8');
if(!/<svg\b/.test(svg)||/<script\b|<foreignObject\b|(?:href|src)\s*=\s*["']https?:/i.test(svg))throw Error('Use the standalone canonical vector.');
const destination=fileURLToPath(new URL('../assets/brand/email-wordmark.png',import.meta.url));
await mkdir(path.dirname(destination),{recursive:true});
const browser=await chromium.launch();
try{const page=await browser.newPage({viewport:{width:1440,height:240},deviceScaleFactor:1});await page.setContent(`<style>html,body{margin:0;background:transparent}svg{display:block;width:1440px;height:auto}</style>${svg}`);await page.locator('svg').screenshot({path:destination,omitBackground:true});}finally{await browser.close();}
console.log('Exported the canonical wordmark for email clients.');
