const version=typeof __CONTROL_ASSET_REVISION__==='undefined'?'local':__CONTROL_ASSET_REVISION__;
export function assetUrl(path){return path.startsWith('/')?path+(path.includes('?')?'&':'?')+'v='+version:path;}
