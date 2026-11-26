import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {PDFDocument,PDFName,PDFRawStream} from 'pdf-lib';
import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';

const bundled=await build({entryPoints:['assets/js/layers/control-center/operations/shared/agreement-pdf.js'],bundle:true,write:false,format:'esm',platform:'browser',loader:{'.ttf':'binary'}});
const {agreementPdf,agreementTitle,agreementSigningVersion}=await import('data:text/javascript;base64,'+Buffer.from(bundled.outputFiles[0].contents).toString('base64'));
test('signing positions resolve from exact-version evidence without changing the issued body',()=>{
 const title='11. Signature positions - not yet signed',body=title+'\nFOR THE LABEL\nSignature: [reserved for the authenticated label signer]\nServer-recorded signature date: [not signed]\n\nFOR THE ARTIST\nSignature: [reserved for the authenticated artist signer]\nServer-recorded signature date: [not signed]\n\nFINAL CONTROL CENTER REVIEW\nFinal confirmation: [not confirmed]';
 const version={terms_digest:'digest',terms:{kind:'artist_partnership_execution_v1',body,section_titles:[title]}};
 const row={signer_role:'label',display_name:'Synthetic Label',recorded_at:'2026-11-26T10:00:00Z',document_sha256:'digest'};
 const shown=agreementSigningVersion(version,[row]);assert.equal(version.terms.body,body);assert.equal(shown.terms.section_titles[0],'11. Signature positions');
 assert.match(shown.terms.body,/Signature: recorded for Synthetic Label/);assert.match(shown.terms.body,/Server-recorded signature date: 2026-11-26T10:00:00Z/);assert.match(shown.terms.body,/FOR THE ARTIST\nSignature: \[reserved/);
 const complete=agreementSigningVersion(version,[row,{...row,signer_role:'artist',display_name:'Synthetic Artist'}]);assert.doesNotMatch(complete.terms.body,/\[not signed\]/);assert.match(complete.terms.body,/Signature: recorded for Synthetic Artist/);
 assert.throws(()=>agreementSigningVersion(version,[{...row,document_sha256:'other'}]),/does not match/);
});
const image='iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO5W16UAAAAASUVORK5CYII=';
const digest='a'.repeat(64),record={envelope:{id:'synthetic-document',status:'archived',created_at:'2026-11-02T10:00:00Z'},version:{version_number:1,terms_digest:digest,terms:{title:'Agreement – review copy',body:Array.from({length:100},(_,i)=>`Section ${i+1}. Café: immutable terms for review.`).join('\n\n')}},signatures:[{signer_role:'artist',display_name:'Synthetic Artist',document_sha256:digest,image_sha256:createHash('sha256').update(Buffer.from(image,'base64')).digest('hex'),image_base64:image,section_initials:{1:'SA'},recorded_at:'2026-11-02T10:10:00Z'}],events:[{action:'archived',created_at:'2026-11-02T10:20:00Z'}]};
test('PDF evidence copy embeds a readable multi-page document and verified signature image',async()=>{
 const bytes=await agreementPdf({...record,logoBytes:await readFile('assets/brand/email-wordmark.png')});assert.equal(Buffer.from(bytes).subarray(0,5).toString(),'%PDF-');const pdf=await PDFDocument.load(bytes);assert.ok(pdf.getPageCount()>3);assert.equal(pdf.getTitle(),record.version.terms.title);assert.equal(pdf.getAuthor(),'Artanrecords');
 assert.ok(pdf.context.enumerateIndirectObjects().some(([,object])=>object instanceof PDFRawStream&&object.dict.get(PDFName.of('Subtype'))===PDFName.of('Image')),'The recorded signature must be embedded as a PDF image.');
 assert.ok(pdf.getPages()[0].node.Resources().lookup(PDFName.of('XObject')).keys().length>0,'The document header must contain the brand image.');
});
test('PDF export refuses mismatched document or image evidence',async()=>{
 const logoBytes=await readFile('assets/brand/email-wordmark.png');
 await assert.rejects(agreementPdf({...record,logoBytes,signatures:[{...record.signatures[0],document_sha256:'b'.repeat(64)}]}),/does not match/);
 await assert.rejects(agreementPdf({...record,logoBytes,signatures:[{...record.signatures[0],image_sha256:'b'.repeat(64)}]}),/verification failed/);
});
test('real document PDFs require the registered execution kind and retain both signature images',async()=>{
 const logoBytes=await readFile('assets/brand/email-wordmark.png'),envelope={...record.envelope,rehearsal:false},version={...record.version,terms:{...record.version.terms,kind:'artist_partnership_execution_v1'}};
 await assert.rejects(agreementPdf({...record,envelope,logoBytes}),/Unrecognized real document/);
 const bytes=await agreementPdf({...record,envelope,version,logoBytes,signatures:[record.signatures[0],{...record.signatures[0],signer_role:'label',display_name:'Synthetic Label'}]});
 const pdf=await PDFDocument.load(bytes);assert.equal(pdf.getTitle(),version.terms.title);assert.ok(pdf.getPageCount()>3);
 assert.ok(pdf.context.enumerateIndirectObjects().filter(([,object])=>object instanceof PDFRawStream&&object.dict.get(PDFName.of('Subtype'))===PDFName.of('Image')).length>=2);
});
test('draft exports contain only the working document and reject signature evidence',async()=>{
 const draft={envelope:{...record.envelope,status:'draft',rehearsal:false},version:{terms:{kind:'agreement_draft_v1',title:'Working agreement draft',body:'Only draft text. This has not been issued or signed.'}},signatures:[],events:[],logoBytes:await readFile('assets/brand/email-wordmark.png')};
 const pdf=await PDFDocument.load(await agreementPdf(draft));assert.equal(pdf.getPageCount(),1);assert.equal(pdf.getTitle(),'Working agreement draft');
 await assert.rejects(agreementPdf({...draft,signatures:record.signatures}),/cannot include signing evidence/);
});
test('private artist details export is separate from contract signing evidence',async()=>{
 const details={envelope:{id:'private-details',rehearsal:false,status:'submitted',created_at:'2026-11-23T10:00:00Z'},version:{version_number:1,terms:{kind:'artist_details_record_v1',title:'Artist details',notice:'Private artist details',body:'Legal name: Synthetic Artist\nCity: Zagreb'}},signatures:[],events:[],logoBytes:await readFile('assets/brand/email-wordmark.png')};
 const pdf=await PDFDocument.load(await agreementPdf(details));
 assert.equal(pdf.getTitle(),'Artist details');assert.equal(pdf.getPageCount(),1);
 await assert.rejects(agreementPdf({...details,signatures:record.signatures}),/cannot contain contract signatures/);
});
test('verification titles stay readable without changing stored terms and prepared images remain previews',async()=>{
 const version={...record.version,terms:{...record.version.terms,title:'Signing verification · Silver agreement',verification_source_intake:'synthetic-source'}};
 assert.equal(agreementTitle(version),'Silver agreement');assert.equal(version.terms.title,'Signing verification · Silver agreement');
 const pdf=await PDFDocument.load(await agreementPdf({...record,version,signatures:[],preparedSignature:image,logoBytes:await readFile('assets/brand/email-wordmark.png')}));
 assert.equal(pdf.getTitle(),'Silver agreement');assert.ok(pdf.context.enumerateIndirectObjects().filter(([,object])=>object instanceof PDFRawStream&&object.dict.get(PDFName.of('Subtype'))===PDFName.of('Image')).length>=2);
 assert.equal(record.signatures.length,1);
});
