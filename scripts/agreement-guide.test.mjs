import test from 'node:test';
import assert from 'node:assert/strict';
import {agreementSections} from '../assets/js/layers/control-center/operations/shared/agreement-guide.js';
test('guided reading follows the exact fixed section order and retains the introduction',()=>{
 const result=agreementSections('Review copy\n\n1. Parties\nFirst clause.\n\n2. Rights\nSecond clause.',['1. Parties','2. Rights']);assert.equal(result.introduction,'Review copy\n\n');assert.deepEqual(result.sections,[{title:'1. Parties',text:'First clause.\n\n'},{title:'2. Rights',text:'Second clause.'}]);
});
test('guided reading permits a single unstructured document but rejects missing multi-section content',()=>{
 assert.equal(agreementSections('Complete fixed document.',['Complete document']).sections[0].text,'Complete fixed document.');assert.throws(()=>agreementSections('1. Parties\nClause',['1. Parties','2. Missing']));assert.throws(()=>agreementSections('Text',[]));
});
