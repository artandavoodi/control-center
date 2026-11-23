import {test,expect} from '@playwright/test';
import {build} from 'esbuild';

const bundle=await build({entryPoints:['assets/js/layers/control-center/operations/artist-enquiries.js'],bundle:true,write:false,format:'esm'});

test('public enquiry fields suppress exact duplicates without losing distinct values or profile links',async({page})=>{
 await page.route('**/__artist-enquiries.js',route=>route.fulfill({contentType:'application/javascript',body:bundle.outputFiles[0].text}));
 await page.goto('/');
 await page.evaluate(async()=>{
  const {mountArtistEnquiries}=await import('/__artist-enquiries.js');
  const enquiry=(id,payload,profiles)=>({id,artist_name:'Artist '+id,reply_email:'artist@example.test',created_at:'2026-11-01T12:00:00Z',status:'new',payload,profiles});
  const rows=[
   enquiry('duplicate',{artist:'Same artist',listening:'https://example.test/track'},[{provider:'spotify',name:'Same artist',url:'https://example.test/track'}]),
   enquiry('distinct',{artist:'Submitted artist',listening:'https://example.test/submitted'},[{provider:'apple',name:'Different artist',url:'https://example.test/profile'}]),
   enquiry('profile-only',{},[{provider:'spotify',name:'Only artist',url:'https://example.test/only'}]),
   enquiry('multiple',{artist:'Shared name',listening:'https://example.test/shared'},[{provider:'spotify',name:'Shared name',url:'https://example.test/shared'},{provider:'apple',name:'Shared name',url:'https://example.test/shared'},{provider:'spotify',name:'Other name',url:'https://example.test/other'}]),
   enquiry('exact-only',{artist:'Artist',listening:'https://example.test/path'},[{provider:'spotify',name:'artist',url:'https://example.test/path/'}])
  ];
  window.enquiryRows=rows;window.enquirySnapshot=JSON.stringify(rows);
  document.body.innerHTML='<main data-enquiry-fixture></main>';
  await mountArtistEnquiries({content:document.querySelector('main'),client:{from:()=>({select:()=>({order:()=>({limit:async()=>({data:rows})})})})},staff:{permissions:[]},workspace:{workspace_key:'artanrecords'},e:value=>String(value??'').replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char])),icon:()=>'<img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7">',isCurrent:()=>true});
 });
 const record=id=>page.locator('[data-enquiry="'+id+'"]');
 const values=(id,key)=>record(id).locator('[data-field="'+key+'"] :is(input,.control-center-document-body)').evaluateAll(nodes=>nodes.map(node=>node.value??node.textContent));
 for(const [id,artists,links]of [
  ['duplicate',['Same artist'],['https://example.test/track']],
  ['distinct',['Submitted artist','Different artist'],['https://example.test/submitted','https://example.test/profile']],
  ['profile-only',['Only artist'],['https://example.test/only']],
  ['multiple',['Shared name','Other name'],['https://example.test/shared','https://example.test/other']],
  ['exact-only',['Artist','artist'],['https://example.test/path','https://example.test/path/']]
 ]){
  expect(await values(id,'artist')).toEqual(artists);
  expect(await values(id,'listening')).toEqual(links);
 }
 await expect(record('duplicate').getByRole('link',{name:'Open Spotify profile',exact:true})).toHaveAttribute('href','https://example.test/track');
 await expect(record('distinct').getByRole('link',{name:'Open Apple Music profile',exact:true})).toHaveAttribute('href','https://example.test/profile');
 const profileLinks=record('multiple').locator('.control-center-enquiry-profile a');
 await expect(profileLinks).toHaveCount(3);
 expect(await profileLinks.evaluateAll(nodes=>nodes.map(node=>({text:node.textContent,href:node.getAttribute('href')})))).toEqual([
  {text:'Open Spotify profile',href:'https://example.test/shared'},
  {text:'Open Apple Music profile',href:'https://example.test/shared'},
  {text:'Open Spotify profile',href:'https://example.test/other'}
 ]);
 expect(await page.evaluate(()=>JSON.stringify(window.enquiryRows)===window.enquirySnapshot)).toBe(true);
});
