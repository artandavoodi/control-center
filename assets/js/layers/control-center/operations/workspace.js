import {mountAccountMenu} from './account-menu.js';
export function readWorkspacePreference(key,fallback){try{return localStorage.getItem('control-center.'+key)||fallback;}catch{return fallback;}}
function remember(key,value){try{localStorage.setItem('control-center.'+key,value);}catch{/* Navigation remains usable when browser storage is unavailable. */}}
export function mountWorkspace({root,config,staff,user,client,nav,panel,e,icon,workspaces,workspace,onWorkspace,onNavigate,onSignout}){
 const active=nav.find(item=>item.id===panel);
 const collapsed=readWorkspacePreference('rail','open')==='closed';
 root.innerHTML=`<div class="control-center-app" data-rail="${collapsed?'closed':'open'}"><header class="control-center-app-header"><button type="button" data-rail-toggle aria-label="Toggle navigation" aria-expanded="${!collapsed}">${icon(config.chrome.sidebar)}</button><span class="control-center-app-title">${e(config.title)}</span><span class="control-center-app-context">${e(workspace.name)}</span></header><div class="control-center-operations"><aside id="workspace-navigation"><header><p>${e(staff.is_owner?'CEO workspace':staff.display_name||'Staff workspace')}</p><label>Workspace<select data-workspace>${workspaces.map(item=>`<option value="${e(item.id)}"${item.id===workspace.id?' selected':''}>${e(item.name)}</option>`).join('')}</select></label></header><nav aria-label="Operations">${config.workspaces.filter(group=>nav.some(item=>item.workspace===group.id)).map(group=>`<section><h2>${e(group.label)}</h2>${nav.filter(item=>item.workspace===group.id).map(item=>`<button type="button" data-panel="${e(item.id)}" aria-current="${item.id===panel?'page':'false'}">${icon(item.icon)}${e(item.label)}</button>`).join('')}</section>`).join('')}</nav><button type="button" data-signout>Sign out</button></aside><main><header><h1>${e(active.label)}</h1><p>${e(active.description||'')}</p></header><p role="status" data-operation-status>Loading...</p><div data-operation-content></div></main></div></div>`;
 root.querySelector('[data-rail-toggle]').setAttribute('aria-controls','workspace-navigation');
 const header=root.querySelector('aside > header');
 const functions=document.createElement('label');functions.textContent='Workspace';
 const select=document.createElement('select');select.setAttribute('aria-label','Workspace function');
 config.workspaces.filter(group=>nav.some(item=>item.workspace===group.id)).forEach(group=>{const option=document.createElement('option');option.value=group.id;option.textContent=group.label;option.selected=group.id===active.workspace;select.append(option);});
 functions.append(select);header.insertBefore(functions,header.querySelector('label'));
 header.querySelector('[data-workspace]').parentElement.firstChild.textContent='Brand';
 select.addEventListener('change',()=>onNavigate(nav.find(item=>item.workspace===select.value).id));
 root.querySelectorAll('nav section').forEach(section=>{section.hidden=!section.querySelector(`[data-panel="${panel}"]`);});
 root.querySelector('[data-signout]').remove();
 mountAccountMenu({root,client,user,staff,config,e,icon,onNavigate,onSignout});
 root.querySelector('[data-rail-toggle]').addEventListener('click',event=>{const shell=root.querySelector('[data-rail]'),closed=shell.dataset.rail==='open';shell.dataset.rail=closed?'closed':'open';event.currentTarget.setAttribute('aria-expanded',String(!closed));remember('rail',closed?'closed':'open');});
 root.querySelector('[data-workspace]').addEventListener('change',event=>{remember('workspace',event.target.value);onWorkspace(event.target.value);});
 root.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>onNavigate(button.dataset.panel)));
}
