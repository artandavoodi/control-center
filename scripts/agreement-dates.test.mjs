import test from 'node:test';
import assert from 'node:assert/strict';
import {agreementDuration,agreementDateSummary,calendarDate,datedAgreementTemplate} from '../assets/js/layers/control-center/operations/agreement-dates.js';

test('agreement dates calculate calendar months and years rather than fixed day approximations',()=>{
 assert.equal(agreementDuration('2026-01-15','2026-06-15'),'5 months');
 assert.equal(agreementDuration('2026-01-15','2026-07-15'),'6 months');
 assert.equal(agreementDuration('2026-01-15','2027-01-15'),'1 year');
 assert.equal(agreementDuration('2026-01-31','2026-02-28'),'1 month');
 assert.equal(agreementDuration('2024-02-29','2025-02-28'),'1 year');
 assert.equal(agreementDuration('2026-03-28','2026-03-30'),'2 days');
 assert.equal(agreementDuration('2026-01-15','2027-07-17'),'1 year, 6 months, 2 days');
 assert.equal(agreementDuration('0001-01-01','0002-01-01'),'1 year');
});
test('invalid and reversed dates never produce contract duration text',()=>{
 assert.equal(calendarDate('2026-02-29'),null);
 for(const dates of [['','2027-01-01'],['2026-01-02','2026-01-01'],['2026-01-01','2026-01-01']])assert.equal(agreementDateSummary(...dates),null);
});
test('date clauses are incorporated once without rewriting unrelated terms',()=>{
 const body='Effective date: [effective date - required]. Term: [term - required].';
 const dated=datedAgreementTemplate(body);
 assert.equal(datedAgreementTemplate(dated),dated);
 assert.match(dated,/expires on \[expiry date - required\]/);
 assert.match(dated,/Total duration: \[duration - required\]/);
 assert.match(dated,/Term: \[term - required\]/);
 assert.equal(agreementDateSummary('2026-01-15','2027-01-15'),'Effective from 15 January 2026; expires on 15 January 2027. Total duration: 1 year.');
});
