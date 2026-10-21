export function updateAccountPhoto(root,url){
 const image=root.querySelector('[data-account-photo]');if(!image)return;
 image.onload=()=>{if(image.isConnected){image.hidden=false;root.querySelector('[data-account-fallback]').hidden=true;}};
 image.src=url;
}
export function mountAccountMenu({root,client,user,staff,config,e,icon,onNavigate,onSignout}){
 const footer=document.createElement('footer');footer.className='control-center-account-dock';
 footer.innerHTML=`<button class="control-center-account-trigger" type="button" aria-label="Account menu" aria-haspopup="menu" aria-expanded="false" popovertarget="control-account-menu"><span data-account-fallback>${icon('core/identity/profile/profile.svg')}</span><img data-account-photo alt="" hidden></button><div id="control-account-menu" class="control-center-account-popover" popover="auto"><header><strong>${e(staff.display_name||user.email)}</strong><span>${e(user.email)}</span></header><div role="menu" aria-label="Account">${config.accountMenu.map(item=>`<button type="button" role="menuitem" tabindex="-1" data-account-action="${e(item.id)}">${icon(item.icon)}${e(item.label)}</button>`).join('')}</div></div>`;
 root.querySelector('.control-center-app').append(footer);
 const trigger=footer.querySelector('[popovertarget]'),popover=footer.querySelector('[popover]'),items=[...footer.querySelectorAll('[role=menuitem]')];
 let returnFocus=false;
 popover.addEventListener('toggle',event=>{const open=event.newState==='open';trigger.setAttribute('aria-expanded',String(open));if(open)items[0]?.focus();else if(returnFocus){returnFocus=false;trigger.focus();}});
 popover.addEventListener('keydown',event=>{
  const index=items.indexOf(document.activeElement);let next;
  if(event.key==='ArrowDown')next=(index+1)%items.length;
  if(event.key==='ArrowUp')next=(index-1+items.length)%items.length;
  if(event.key==='Home')next=0;if(event.key==='End')next=items.length-1;
  if(next!==undefined){event.preventDefault();items[next].focus();}
  if(event.key==='Escape'){returnFocus=true;popover.hidePopover();}
 });
 items.forEach(item=>item.addEventListener('click',()=>{popover.hidePopover();if(item.dataset.accountAction==='signout')onSignout();else onNavigate(item.dataset.accountAction);}));
 client.storage.from('control-center-photos').createSignedUrl(user.id+'/photo',300).then(photo=>{
  if(!footer.isConnected)return;
  if(photo.data?.signedUrl)updateAccountPhoto(root,photo.data.signedUrl);
  else {const avatar=user.user_metadata?.avatar_url;if(typeof avatar==='string'&&/^https:\/\/[^/]+\.googleusercontent\.com\//.test(avatar))updateAccountPhoto(root,avatar);}
 }).catch(()=>{});
}
