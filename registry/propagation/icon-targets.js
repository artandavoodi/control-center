import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../..');
export const iconRepositories=Object.freeze({control:root,website:path.resolve(root,'../website'),artanLive:path.resolve(root,'../artan-live'),brand:path.resolve(root,'../brand'),docsPublic:path.resolve(root,'../docs-public')});
// One registered target list for synchronization, targeted export and integrity checks.
export const iconTargets=Object.freeze({
 control:path.join(root,'registry/icons/public/assets'),
 website:path.resolve(root,'../website/docs/registry/icons/public/assets'),
 artanLive:path.resolve(root,'../artan-live/docs/registry/icons/public/assets'),
 brand:path.resolve(root,'../brand/docs/registry/icons/public/assets'),
 docsPublic:path.resolve(root,'../docs-public/registry/icons/public/assets')
});
