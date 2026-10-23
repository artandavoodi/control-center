import {mountAccountMenu} from './account-menu.js';
import {mountContextPicker} from './context.js';
import {mountSearch} from './search.js';
import {mountNotifications} from './notifications.js';
import {mountUpdateProgress} from './update-monitor.js';
import './shared/close-button.js';
import {assetUrl} from './assets.js';
export function readWorkspacePreference(key,fallback){try{return localStorage.getItem('control-center.'+key)||fallback;}catch{return fallback;}}
export function rememberWorkspace(key,value){try{localStorage.setItem('control-center.'+key,value);}catch{/* Navigation remains usable when browser storage is unavailable. */}}
export function mountWorkspace({root,config,staff,user,client,updateMonitor,nav,pickerNav=nav,panel,e,icon,workspaces,workspace,context,units,onContext,onNavigate,onSignout}){
 if(context.allBrands)workspace={...workspace,name:'All brands'};
 const active=nav.find(item=>item.id===panel);
 const collapsed=readWorkspacePreference('rail','open')==='closed';
 const scope=context.allBrands?'All brands':[workspace.name,...[context.department,context.office].map(id=>units.find(unit=>unit.id===id)?.name)].filter(Boolean).join(' / ');
 const group=config.workspaces.find(item=>item.id===context.function);
 const brand=context.allBrands?null:config.services.find(service=>service.workspace===workspace.workspace_key);
 root.innerHTML=`<div class="control-center-app" data-rail="${collapsed?'closed':'open'}"><header class="control-center-app-header"><button type="button" data-rail-toggle aria-label="Toggle navigation" aria-expanded="${!collapsed}">${icon(config.chrome.sidebar)}</button>${brand?`<img class="control-center-header-wordmark" src="${e(assetUrl(brand.logo))}" alt="${e(workspace.name)}">`:`<span class="control-center-header-brand">${e(workspace.name)}</span>`}<span class="control-center-app-title">${e(config.title)}</span><button type="button" data-search-open aria-label="Search workspace" aria-haspopup="dialog">${icon(config.chrome.search)}</button></header><div class="control-center-operations"><aside id="workspace-navigation"><header><button type="button" data-context-open aria-label="Choose workspace" title="Choose workspace" aria-haspopup="dialog">${icon(config.chrome.workspace)}<span class="control-center-rail-label"><strong>${e(group?.label||'Operations')}</strong><span>${e(scope)}</span></span>${icon(config.chrome.chevron)}</button></header><nav aria-label="Operations">${config.workspaces.filter(group=>group.id===context.function).map(group=>`<section><h2>${e(group.label)}</h2>${nav.filter(item=>item.workspace===group.id).map(item=>`<button type="button" data-panel="${e(item.id)}" aria-label="${e(item.label)}" title="${e(item.label)}" aria-current="${item.id===panel?'page':'false'}">${icon(item.icon)}<span class="control-center-rail-label">${e(item.label)}</span></button>`).join('')}</section>`).join('')}</nav></aside><main><header><h1>${e(active.label)}</h1><p>${e(active.description||'')}</p></header><p role="status" data-operation-status>Loading...</p><div data-operation-content></div></main></div><dialog data-context-dialog aria-label="Choose workspace"></dialog><dialog data-search-dialog aria-label="Search your workspace"></dialog></div>`;
 root.querySelector('[data-rail-toggle]').setAttribute('aria-controls','workspace-navigation');
 const railToggle=root.querySelector('[data-rail-toggle]');
 const syncRailIcon=()=>{railToggle.innerHTML=icon('core/navigation/panel/panel-left-'+(root.querySelector('[data-rail]').dataset.rail==='closed'?'deactivated':'activated')+'.svg');};
 syncRailIcon();
 const shell=root.querySelector('.control-center-app'),operations=root.querySelector('.control-center-operations'),rail=root.querySelector('aside');
 const tokenLength=name=>{const measure=document.createElement('span');measure.style.cssText='position:absolute;visibility:hidden;pointer-events:none;height:0;width:var('+name+')';root.append(measure);const width=measure.getBoundingClientRect().width;measure.remove();return width;};
 const widthKey='rail-width',maximum=tokenLength('--control-width-auth-max'),minimum=tokenLength('--layout-home-platform-primary-rail-width'),step=tokenLength('--spacing-md');
 const compact=tokenLength('--control-height-md')+2*tokenLength('--spacing-lg');
 const closeAt=minimum-step*2,openAt=minimum-step;
 const setRail=closed=>{shell.dataset.rail=closed?'closed':'open';railToggle.setAttribute('aria-expanded',String(!closed));rememberWorkspace('rail',shell.dataset.rail);syncRailIcon();};
 const savedWidth=Number(readWorkspacePreference(widthKey,String(maximum)));
 if(Number.isFinite(savedWidth))shell.style.setProperty('--control-rail-width',Math.max(minimum,Math.min(maximum,savedWidth))+'px');
 const resize=document.createElement('div');resize.className='control-center-rail-resize';resize.tabIndex=0;resize.setAttribute('role','separator');resize.setAttribute('aria-label','Resize navigation');resize.setAttribute('aria-orientation','vertical');resize.setAttribute('aria-valuemin',String(minimum));resize.setAttribute('aria-valuemax',String(maximum));rail.after(resize);
 const setWidth=width=>{width=Math.round(Math.max(minimum,Math.min(maximum,width)));shell.style.setProperty('--control-rail-width',width+'px');shell.style.setProperty('--control-workspace-chevron-opacity',String(Math.max(0,Math.min(1,(width-minimum)/(step*4)))));resize.setAttribute('aria-valuenow',String(width));rememberWorkspace(widthKey,String(width));};
 setWidth(Number.isFinite(savedWidth)?savedWidth:maximum);
 resize.setAttribute('aria-valuenow',String(Math.max(minimum,Math.min(maximum,savedWidth))));
 const dragWidth=width=>{const closed=width<(shell.dataset.rail==='closed'?openAt:closeAt);setRail(closed);if(closed)resize.setAttribute('aria-valuenow',String(compact));else setWidth(width);};
 resize.setAttribute('aria-valuemin',String(compact));
 resize.addEventListener('pointerdown',event=>{if(!matchMedia('(min-width:1025px) and (pointer:fine)').matches)return;event.preventDefault();resize.setPointerCapture(event.pointerId);const start=event.clientX,width=rail.getBoundingClientRect().width;const move=next=>dragWidth(width+next.clientX-start);const finish=()=>{resize.removeEventListener('pointermove',move);resize.removeEventListener('pointerup',finish);resize.removeEventListener('pointercancel',finish);};resize.addEventListener('pointermove',move);resize.addEventListener('pointerup',finish);resize.addEventListener('pointercancel',finish);});
 resize.addEventListener('keydown',event=>{let width=rail.getBoundingClientRect().width;if(event.key==='ArrowLeft')width=shell.dataset.rail==='open'&&width<=minimum?compact:width-step;else if(event.key==='ArrowRight')width=shell.dataset.rail==='closed'?minimum:width+step;else if(event.key==='Home')width=compact;else if(event.key==='End')width=maximum;else return;event.preventDefault();dragWidth(width);});
 mountContextPicker({root,config,nav:pickerNav,workspaces,workspace,context,units,e,icon,onApply:onContext});
 mountSearch({root,config,client,staff,nav,workspace,context,units,e,icon,onNavigate});
 mountUpdateProgress({root,monitor:updateMonitor,onNavigate});
 mountNotifications({root,client,config,monitor:updateMonitor,nav:pickerNav,workspaces,e,icon,onNavigate});
 mountAccountMenu({root,client,user,staff,config,e,icon,onNavigate,onSignout});
 window.NeuroartanCloseButtons.initCloseButtonPrimitive(root);
 railToggle.addEventListener('click',()=>{setRail(shell.dataset.rail==='open');resize.setAttribute('aria-valuenow',String(rail.getBoundingClientRect().width));});
 root.querySelectorAll('[data-panel]').forEach(button=>button.addEventListener('click',()=>onNavigate(button.dataset.panel)));
}
