export function agreementEditorMarkup({icon,config}){
 return `<section data-document-editor hidden><form><header class="control-center-contract-header"><h2>Contract</h2><div class="control-center-contract-actions"><button type="button" class="ui-button" data-contract-preview>${icon('core/actions/open/open.svg')}Preview contract</button><button type="button" class="ui-button" data-contract-text-toggle>${icon(config.chrome.edit)}Edit full text</button><button type="submit" class="ui-button">${icon(config.chrome.save)}Save changes</button><button type="button" class="global-close-button" data-document-cancel aria-label="Close contract"><span class="global-close-button__line global-close-button__line--first" aria-hidden="true"></span><span class="global-close-button__line global-close-button__line--second" aria-hidden="true"></span></button></div></header><label>Title<input name="title" required maxlength="200"></label><input name="unit" type="hidden"><input name="classification" type="hidden" value="confidential"><input name="tags" type="hidden"><label data-contract-text hidden>Document text<textarea name="body" rows="16" maxlength="50000"></textarea></label><p role="status"></p></form></section>`;
}

export function bindContractSections(section,icon,{onReview=()=>{},reviewLabel='Review contract'}={}){
 const groups=[...section.querySelectorAll('[data-term-group]')];
 if(!groups.length)return;
 const navigation=document.createElement('nav'),previous=document.createElement('button'),next=document.createElement('button'),review=document.createElement('button'),progress=document.createElement('p');
 navigation.className='control-center-contract-navigation';navigation.setAttribute('aria-label','Contract sections');
 previous.type=next.type='button';previous.className=next.className='ui-icon-button';previous.setAttribute('aria-label','Previous section');next.setAttribute('aria-label','Next section');previous.innerHTML=icon('core/navigation/direction/arrow-left.svg');next.innerHTML=icon('core/navigation/direction/arrow-right.svg');progress.setAttribute('aria-live','polite');navigation.append(previous,progress,next);section.append(navigation);
 review.type='button';review.className='ui-button';review.innerHTML=icon('core/actions/open/open.svg');review.append(document.createTextNode(reviewLabel));review.onclick=onReview;navigation.append(review);
 let current=0;
 const show=()=>{groups.forEach((group,index)=>group.hidden=index!==current);progress.textContent=`Section ${current+1} of ${groups.length}`;previous.disabled=current===0;next.hidden=current===groups.length-1;review.hidden=current!==groups.length-1;};
 previous.onclick=()=>{current--;show();};next.onclick=()=>{current++;show();};show();
}
