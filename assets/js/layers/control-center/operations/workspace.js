import {mountAccountMenu} from './account-menu.js';
import {mountContextPicker} from './context.js';
import {mountSearch} from './search.js';
import './shared/close-button.js';
import {assetUrl} from './assets.js';
export function readWorkspacePreference(key,fallback){try{return localStorage.getItem('control-center.'+key)||fallback;}catch{return fallback;}}
export function rememberWorkspace(key,value){try{localStorage.setItem('control-center.'+key,value);}catch{/* Navigation remains usable when browser storage is unavailable. */}}
export function mountWorkspace({root,config,staff,user,client,nav,pickerNav=nav,panel,e,icon,workspaces,workspace,context,units,onContext,onNavigate,onSignout}){
 if(context.function==='design')workspace={...workspace,name:'All brands'};
 const active=nav.find(item=>item.id===panel);
 const collapsed=readWorkspacePreference('rail','open')==='closed';
 const scope=context.function==='design'?'All brands - shared design sources':[workspace.name,...[context.department,context.office].map(id=>units.find(unit=>unit.id===id)?.name)].filter(Boolean).join(' / ');
 const group=config.workspaces.find(item=>item.id===context.function);
 const brand=context.function==='design'?null:config.services.find(service=>service.workspace===workspace.workspace_key);
 root.innerHTML=`<div class="control-center-app" data-rail="${collapsed?'closed':'open'}"><header class="control-center-app-header"><button type="button" data-rail-toggle aria-label="Toggle navigation" aria-expanded="${!collapsed}">${icon(config.chrome.sidebar)}</button>${brand?`<img class="control-center-header-wordmark" src="${e(assetUrl(brand.logo))}" alt="${e(workspace.name)}">`:`<span class="control-center-header-brand">${e(workspace.name)}</span>`}<span class="control-center-app-title">${e(config.title)}</span><button type="button" data-search-open aria-label="Search workspace" aria-haspopup="dialog">${icon(config.chrome.search)}</button></header><div class="control-center-operations"><aside id="workspace-navigation"><header><button type="button" data-context-open aria-label="Choose workspace" title="Choose workspace" aria-haspopup="dialog">${icon(config.chrome.workspace)}<span class="control-center-rail-label"><strong>${e(group?.label||'Operations')}</strong><span>${e(scope)}</span></span>${icon(config.chrome.chevron)}</button></header><nav aria-label="Operations">${config.workspaces.filter(group=>group.id===context.function).map(group=>`<section><h2>${e(group.label)}</h2>${nav.filter(item=>item.workspace===group.id).map(item=>`<button type="button" data-panel="${e(item.id)}" aria-label="${e(item.label)}" title="${e(item.label)}" aria-current="${item.id===panel?'page':'false'}">${icon(item.icon)}<span class="control-center-rail-label">${e(item.label)}</span></button>`).join('')}</section>`).join('')}</nav></aside><main><header><h1>${e(active.label)}</h1><p>${e(active.description||'')}</p></header><p role="status" data-operation-status>Loading...</p><div data-operation-content></div></main></div><dialog data-context-dialog aria-label="Choose workspace"></dialog><dialog data-search-dialog aria-label="Search your workspace"></dialog></div>`;
 root.querySelector('[data-rail-toggle]').setAttribute('aria-controls','workspace-navigation');
 mountContextPicker({root,config,nav:pickerNav,workspaces,workspace,context,units,e,icon,onApply:onContext});
 mountSearch({root,config,client,staff,nav,workspace,context,units,e,icon,onNavigate});
 mountAccountMenu({root,client,user,staff,config,e,icon,onNavigate,onSignout});
 window.NeuroartanCloseButtons.initCloseButtonPrimitive(root);
 root.querySelector('[data-rail-toggle]').addEventListener('click',event=>{const shell=root.querySelector('[data-rail]'),closed=shell.dataset.rail==='open';shell.dataset.rail=closed?'closed':'open';event.currentTarget.setAttribute('aria-expanded',String(!closed));rememberWorkspace('rail',closed?'closed':'open');});
 root.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>onNavigate(button.dataset.panel)));
}
