import test from 'node:test';
import assert from 'node:assert/strict';
import {build} from 'esbuild';
import {PDFDocument,PDFName,PDFRawStream} from 'pdf-lib';
import {createHash} from 'node:crypto';
import {readFile} from 'node:fs/promises';

const bundled=await build({entryPoints:['assets/js/layers/control-center/operations/shared/agreement-pdf.js'],bundle:true,write:false,format:'esm',platform:'browser',loader:{'.ttf':'binary'}});
const {agreementPdf}=await import('data:text/javascript;base64,'+Buffer.from(bundled.outputFiles[0].contents).toString('base64'));
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
