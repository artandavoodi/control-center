import {defineConfig,devices} from '@playwright/test';
import {fileURLToPath} from 'node:url';
const artifact=process.env.CONTROL_TEST_ARTIFACT==='1',port=artifact?'8895':'8894',origin='http://127.0.0.1:'+port;
export default defineConfig({testDir:'.',testMatch:'*.spec.mjs',workers:2,webServer:{command:'node server.mjs'+(artifact?' --artifact --preview':''),env:{PORT:port},cwd:fileURLToPath(new URL('../../',import.meta.url)),url:origin,reuseExistingServer:!process.env.CI&&!artifact},use:{baseURL:origin},projects:[{name:'desktop',use:{...devices['Desktop Chrome']}},{name:'desktop-safari',use:{...devices['Desktop Safari']}},{name:'tablet',use:{...devices['iPad Mini']}},{name:'mobile',use:{...devices['iPhone 13']}}]});
