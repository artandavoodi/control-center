import {readAccountCallback} from './shared/account.js';
export function passwordIssue(password,confirmation){
 if(password.length<12)return 'Use at least 12 characters.';
 if(password!==confirmation)return 'The passwords do not match.';
 return '';
}
export function createAccess({client,root,config,e,onAuthenticated,onReset}){
 const brand=()=>`<header class="control-center-access-brand"><h1>${e(config.brand.name)}</h1><p>${e(config.description)}</p></header>`;
 function signin(message='',email=''){
  root.innerHTML=`<section class="control-center-access">${brand()}<p>${e(config.auth.introduction)}</p><form data-staff-signin><label>Email<input type="email" name="email" required autocomplete="username" value="${e(email)}"></label><div data-password-step hidden><label>Password<input type="password" name="password" autocomplete="current-password"></label></div><button type="submit">Continue</button></form><button type="button" data-forgot-password>Forgot password?</button><p role="status">${e(message)}</p></section>`;
  const form=root.querySelector('form'),passwordStep=root.querySelector('[data-password-step]'),button=form.querySelector('button');let phase='email';
  root.querySelector('[data-forgot-password]').addEventListener('click',()=>recover(form.elements.email.value.trim()));
  form.addEventListener('submit',async event=>{event.preventDefault();if(phase==='email'){phase='password';passwordStep.hidden=false;form.elements.password.required=true;button.textContent='Sign in';form.elements.password.focus();return;}button.disabled=true;
   try{const result=await client.auth.signInWithPassword({email:form.elements.email.value.trim(),password:form.elements.password.value});form.elements.password.value='';if(result.error)throw Error('Sign-in failed. Check your email and password or reset your password.');await onAuthenticated();}catch(error){root.querySelector('[role=status]').textContent=error.message;button.disabled=false;}
  });
 }
 function recover(email=''){
  root.innerHTML=`<section class="control-center-access">${brand()}<h2>Reset password</h2><p>We’ll send a secure reset link if this email has an account. Your shared Store and Studio password will also change.</p><form data-password-request><label>Email<input type="email" name="email" required autocomplete="email" value="${e(email)}"></label><button type="submit">Send reset link</button></form><button type="button" data-back-signin>Back to sign in</button><p role="status"></p></section>`;
  const form=root.querySelector('form');root.querySelector('[data-back-signin]').addEventListener('click',()=>signin('',form.elements.email.value));
  form.addEventListener('submit',async event=>{event.preventDefault();const button=form.querySelector('button');button.disabled=true;
   try{const result=await client.auth.resetPasswordForEmail(form.elements.email.value.trim(),{redirectTo:location.origin+'/?flow=recovery'});if(result.error)throw Error('Recovery unavailable');root.querySelector('[role=status]').textContent='If an account matches, a reset link will arrive by email. Check your inbox and spam folder, and open it in this browser.';}catch{root.querySelector('[role=status]').textContent='The request could not be sent. Please wait a moment and try again. If this continues, contact your administrator.';button.disabled=false;}
  });
 }
 function reset(){
  root.innerHTML=`<section class="control-center-access">${brand()}<h2>Choose your password</h2><p>Use at least 12 characters. A password manager can create and save a strong password for you.</p><form data-password-reset><label>New password<input type="password" name="password" minlength="12" required autocomplete="new-password"></label><label>Confirm password<input type="password" name="confirmation" minlength="12" required autocomplete="new-password"></label><button type="submit">Save password</button></form><p role="status"></p></section>`;
  const form=root.querySelector('form');form.addEventListener('submit',async event=>{event.preventDefault();const status=root.querySelector('[role=status]'),button=form.querySelector('button'),issue=passwordIssue(form.elements.password.value,form.elements.confirmation.value);if(issue){status.textContent=issue;return;}button.disabled=true;
   try{const current=await client.auth.getUser();if(current.error||!current.data.user)throw Error('This reset session could not be verified. Request a new link.');const result=await client.auth.updateUser({password:form.elements.password.value});if(result.error)throw Error('Your password could not be changed. Request a new link or try again.');form.reset();await client.auth.signOut({scope:'local'});signin('Password updated. Sign in with your new password.');}catch(error){status.textContent=error.message;button.disabled=false;}
  });
 }
 async function consumeCallback(url){
  const callback=readAccountCallback(url),hasCallback=callback.code||callback.token||callback.error;
  if(!hasCallback)return false;
  // Remove callback material before any asynchronous network operation.
  history.replaceState(null,'','/');
  if(callback.error)throw Error('This sign-in link could not be completed. Request a new reset link.');
  if(callback.token&&callback.type!=='recovery'&&callback.type!=='invite')throw Error('Unsupported account link.');
  const result=callback.token?await client.auth.verifyOtp({token_hash:callback.token,type:callback.type}):await client.auth.exchangeCodeForSession(callback.code);
  if(result.error)throw Error('This link expired or could not be verified. Request a new reset link in this browser.');
  const verified=await client.auth.getUser();if(verified.error||!verified.data.user)throw Error('The account session could not be verified.');
  if(callback.recovery||callback.type==='invite'){onReset();reset();return true;}
  await onAuthenticated();return true;
 }
 return {signin,recover,reset,consumeCallback};
}
