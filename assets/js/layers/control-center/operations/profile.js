import editorMarkup from './shared/profile-media-editor.html.js';
import {registerProfileMediaEditorTarget,openProfileMediaEditor} from './shared/profile-media-editor.js';
import {updateAccountPhoto} from './account-menu.js';
export async function mountProfile({content,client,user,staff,e,icon,onReset,isCurrent}){
 const response=await client.from('control_center_profiles').select('first_name,last_name,phone,location,date_of_birth').eq('account_id',user.id).maybeSingle();
 if(response.error)throw Error('Your profile could not be loaded. Please try again.');
 if(!isCurrent())return;
 const profile=response.data||{};
 content.innerHTML=`<section class="control-center-profile"><div class="control-center-profile-photo"><span data-photo-fallback>${icon('core/identity/profile/profile.svg')}</span><img data-profile-photo alt="Your profile photo" hidden><button type="button" class="control-center-photo-action" data-edit-photo>${icon('core/media/camera/camera.svg')}Change photo</button><input type="file" accept="image/jpeg,image/png,image/webp" data-photo-input hidden></div><form data-personal-profile><div class="control-center-field-pair"><label>First name<input name="first_name" autocomplete="given-name" maxlength="100" required value="${e(profile.first_name||user.user_metadata?.given_name||'')}"></label><label>Last name<input name="last_name" autocomplete="family-name" maxlength="100" required value="${e(profile.last_name||user.user_metadata?.family_name||'')}"></label></div><label>Email<input type="email" value="${e(user.email)}" readonly autocomplete="email"></label><label>Phone number<input name="phone" type="tel" autocomplete="tel" placeholder="+1 202 555 0123" value="${e(profile.phone||'')}"></label><p class="control-center-field-note">Saved contact number. This does not verify your phone.</p><label>Location<input name="location" autocomplete="address-level2" maxlength="200" value="${e(profile.location||'')}"></label><details><summary>Additional personal information</summary><label>Date of birth<input name="date_of_birth" type="date" autocomplete="bday" max="${new Date().toISOString().slice(0,10)}" value="${e(profile.date_of_birth||'')}"></label><p>Optional. Visible only to your account, not in the staff directory.</p></details><button type="submit">Save profile</button><p role="status" data-profile-status></p></form><section class="control-center-review"><h3>Assigned responsibilities</h3><dl><dt>Level</dt><dd>${e(staff.is_owner?'CEO / Owner':staff.authority_level?.replaceAll('_',' ')||'Staff')}</dd><dt>Department</dt><dd>${e(staff.department||'Not assigned')}</dd><dt>Office</dt><dd>${e(staff.office||'Not assigned')}</dd></dl><p>Assignments and access are managed by your authorized manager.</p></section><section class="control-center-review"><h3>Account security</h3><p>${e(user.email_confirmed_at?'Email verified':'Email verification required')}</p><p>Your password is shared with Artan Store and Artanrecords Studio. Resetting it does not change your staff permissions.</p><button type="button" data-profile-reset>Send password reset link</button></section></section>`;
 const status=content.querySelector('[data-profile-status]');
 const editor=document.createElement('div');editor.innerHTML=editorMarkup;content.closest('.control-center-app').append(editor.firstElementChild);
 registerProfileMediaEditorTarget('control-center',{
  getCurrentImageUrl:()=>content.querySelector('[data-profile-photo]')?.getAttribute('src')||'',
  async save({file}){
   if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>2097152)throw Error('Choose an image up to 2 MB.');
   const identity=await client.auth.getUser();if(!isCurrent())return;if(identity.error||identity.data.user?.id!==user.id)throw Error('Your account changed.');
   const uploaded=await client.storage.from('control-center-photos').upload(user.id+'/photo',file,{upsert:true,contentType:file.type});if(!isCurrent())return;if(uploaded.error)throw Error('Upload failed');
   const signed=await client.storage.from('control-center-photos').createSignedUrl(user.id+'/photo',300);if(!isCurrent())return;if(signed.error)throw Error('Photo preview failed');
   showPhoto(signed.data.signedUrl);status.textContent='Photo updated.';
   updateAccountPhoto(content.closest('[data-control-center-root]'),signed.data.signedUrl);
  }
 });
 const showPhoto=url=>{if(!isCurrent())return;const image=content.querySelector('[data-profile-photo]');image.onload=()=>{image.hidden=false;content.querySelector('[data-photo-fallback]').hidden=true;};image.src=url;};
 client.storage.from('control-center-photos').createSignedUrl(user.id+'/photo',300).then(photo=>{
  if(photo.data?.signedUrl)showPhoto(photo.data.signedUrl);
  else {const avatar=user.user_metadata?.avatar_url;if(typeof avatar==='string'&&/^https:\/\/[^/]+\.googleusercontent\.com\//.test(avatar))showPhoto(avatar);}
 }).catch(()=>{});
 if(!isCurrent())return;
 content.querySelector('[data-profile-reset]').addEventListener('click',onReset);
 content.querySelector('[data-photo-input]').addEventListener('change',async event=>{
  const input=event.target,file=input.files?.[0];if(!file)return;
  if(!['image/jpeg','image/png','image/webp'].includes(file.type)||file.size>2097152){status.textContent='Choose a JPEG, PNG or WebP image up to 2 MB. Your photo is private to your account.';input.value='';return;}
  openProfileMediaEditor({target:'control-center',kind:'avatar',file});input.value='';
 });
 content.querySelector('[data-edit-photo]').addEventListener('click',()=>openProfileMediaEditor({target:'control-center',kind:'avatar'}));
 content.querySelector('form').addEventListener('submit',async event=>{
  event.preventDefault();const form=event.currentTarget,button=form.querySelector('button[type=submit]');
  const values=Object.fromEntries(new FormData(form));values.phone=values.phone.replace(/[\s()-]/g,'');
  if(values.phone&&!/^\+[1-9]\d{6,14}$/.test(values.phone)){status.textContent='Enter a phone number with its country code, such as +1 202 555 0123.';return;}
  button.disabled=true;status.textContent='Saving…';
  try{const saved=await client.from('control_center_profiles').upsert({...values,date_of_birth:values.date_of_birth||null,account_id:user.id,updated_at:new Date().toISOString()});if(saved.error)throw Error();status.textContent='Profile saved.';}catch{status.textContent='Your profile was not saved. Please try again.';}finally{button.disabled=false;}
 });
}
