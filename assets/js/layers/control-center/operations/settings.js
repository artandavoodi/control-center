import {mountThemeControls} from './theme.js';
import {mountProfile} from './profile.js';
import {readView,writeView} from './view-state.js';
export function mountSettings(context){
 const {content,onTheme,onReset,user,e}=context;
 content.innerHTML='<section class="control-center-profile"><nav class="control-center-settings-tabs" aria-label="Personal settings"><button type="button" data-setting="appearance" aria-pressed="true">Appearance</button><button type="button" data-setting="details" aria-pressed="false">Personal details</button><button type="button" data-setting="security" aria-pressed="false">Security</button></nav><div data-setting-content></div></section>';
 const pane=content.querySelector('[data-setting-content]');let revision=0;
 function show(category){
  writeView('settings',category);
  const turn=++revision;
  content.querySelectorAll('[data-setting]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.setting===category)));
  if(category==='appearance'){
   pane.innerHTML='<h2>Appearance</h2><p>Choose how Control Center looks. Your preference is saved in this browser and your account.</p><fieldset class="control-center-appearance"><legend>Color mode</legend><label><input type="radio" name="appearance" value="system">System</label><label><input type="radio" name="appearance" value="light">Light</label><label><input type="radio" name="appearance" value="dark">Dark</label><p role="status" data-appearance-status></p></fieldset>';
   mountThemeControls(pane,onTheme);
  }else if(category==='security'){
   pane.innerHTML=`<h2>Password and sign-in</h2><p>${e(user.email)}</p><p>${e(user.email_confirmed_at?'Email verified':'Email verification required')}</p><p>Request a secure email link to choose a new password. The password is shared with Artan Store and Artanrecords Studio; your assigned permissions stay unchanged.</p><button type="button" data-reset-password>Send password reset link</button>`;
   pane.querySelector('button').addEventListener('click',onReset);
  }else{
   pane.innerHTML='<p role="status">Loading personal details...</p>';
   mountProfile({...context,content:pane,isCurrent:()=>context.isCurrent()&&turn===revision}).catch(()=>{if(turn===revision)pane.textContent='Your personal details could not be loaded. Please try again.';});
  }
 }
 content.querySelectorAll('[data-setting]').forEach(button=>button.addEventListener('click',()=>show(button.dataset.setting)));const saved=readView('settings','appearance');show(['appearance','details','security'].includes(saved)?saved:'appearance');
}
