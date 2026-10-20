import {defineConfig,devices} from '@playwright/test';
import {fileURLToPath} from 'node:url';
export default defineConfig({testDir:'.',testMatch:'*.spec.mjs',workers:2,webServer:{command:'node server.mjs',cwd:fileURLToPath(new URL('../../',import.meta.url)),url:'http://127.0.0.1:8894',reuseExistingServer:!process.env.CI},use:{baseURL:'http://127.0.0.1:8894'},projects:[{name:'desktop',use:{...devices['Desktop Chrome']}},{name:'mobile',use:{...devices['iPhone 13']}}]});
