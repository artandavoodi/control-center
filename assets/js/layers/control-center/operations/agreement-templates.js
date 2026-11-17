import defaults from '../../../../data/control-center/partnership-defaults.json' with {type:'json'};
import template from '../../../../data/control-center/agreement-template.json' with {type:'json'};
export const partnershipDrafts=defaults.items;
export const proposedTermsNotice=template.proposalDefaults.notice;
export const agreementEditorSections=template.editorGroups.map(group=>group.title);
export function labelReviewContent(record){
 return JSON.stringify({artist:record.artist_account_id||null,intake:record.artist_intake_version_id||null,fields:['label legal name','label details','label signatory','label capacity'].map(key=>[key,record.draft_state?.fields?.[key]||''])});
}
export function proposedAgreementTerms(tier){
 const item=defaults.items.find(item=>item.id===tier);if(!item)return {};
 return Object.fromEntries(Object.entries({...template.proposalDefaults.common,...template.proposalDefaults.tiers[tier]}).map(([key,value])=>[key,'PROPOSED FOR REVIEW: '+value.replaceAll('{{studio_plan}}',item.includedStudioPlan)]));
}
export const requiredAgreementFields=body=>[...new Set([...String(body).matchAll(/\[([a-z ]+) - required\]/g)].map(match=>match[1]))];
export function unresolvedAgreementTerms(record){
 const fields=record?.draft_state?.fields||{};
 return [...new Set([...requiredAgreementFields(record?.body),...Object.entries(fields).filter(([key,value])=>key!=='legal review'&&/PROPOSED FOR (REVIEW|CONFIRMATION)|PENDING[^\n]*NO APPROVAL/i.test(value)).map(([key])=>key)])];
}
export function confirmProposedAgreementTerms(fields){
 if(Object.values(fields).some(value=>!String(value).trim()))throw Error('Complete the missing contract fields before confirming the terms.');
 return Object.fromEntries(Object.entries(fields).map(([key,value])=>[key,key==='legal review'?value:value.replace(/^PROPOSED FOR (REVIEW|CONFIRMATION):\s*/i,'')]));
}
export const agreementFieldSection=key=>template.editorGroups.find(group=>group.fields.includes(key))?.title||template.sections.find(section=>section.text.includes('{{'+key.replaceAll(' ','_')+'}}'))?.title||'Other required terms';
export const isPartnershipTemplate=row=>partnershipDrafts.some(item=>row.tags.includes('partnership-'+item.id)&&row.body===createPartnershipDraft(item.id).body);
export function recoverAgreementDraftState(row){
 const tier=partnershipDrafts.find(item=>row?.tags?.includes('partnership-'+item.id))?.id;if(!tier)return null;
 const original=createPartnershipDraft(tier).body,keys=[],escape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 let pattern='',cursor=0;
 // Recover only an exact governed template; custom text is never rewritten.
 for(const match of original.matchAll(/\[([a-z ]+) - required\]/g)){pattern+=escape(original.slice(cursor,match.index));const previous=keys.indexOf(match[1]);if(previous<0){keys.push(match[1]);pattern+='([\\s\\S]{0,4000}?)';}else pattern+='\\'+(previous+1);cursor=match.index+match[0].length;}
 pattern+=escape(original.slice(cursor));const source=/\n\nContract details source: [0-9a-f-]{36}\nDetails digest: [0-9a-f]{64}$/.exec(row.body)?.[0]||'';
 const values=new RegExp('^'+pattern+escape(source)+'$').exec(row.body);if(!values)return null;
 const fields=Object.fromEntries(keys.map((key,index)=>[key,values[index+1]==='['+key+' - required]'?'':values[index+1]]));let rendered=original+source;
 for(const [key,value]of Object.entries(fields))if(value.trim())rendered=rendered.replaceAll('['+key+' - required]',value.trim());if(rendered!==row.body)return null;
 return {schemaVersion:1,preservePunctuation:true,templateBody:original+source,fields};
}
export function createPartnershipDraft(tier){
 const item=defaults.items.find(item=>item.id===tier);if(!item)throw Error('Choose a registered partnership');
 const values={tier:item.name,artist_share:item.artistShare,label_share:item.labelShare,commercial_version:defaults.commercialTermsVersion};
 const render=value=>value.replace(/\{\{([a-z_]+)\}\}/g,(_,key)=>Object.hasOwn(values,key)?String(values[key]):'['+key.replaceAll('_',' ')+' - required]');
 return {title:render(template.title),tags:['legal','agreement','draft','review-required','partnership-'+item.id],body:[template.notice,render(template.title),...template.sections.map(section=>section.title+'\n'+render(section.text))].join('\n\n')};
}
export function fillReviewedArtistDetails(body,details){
 const company=details.recipient_type==='company';
 const address=[details.address_line1,details.address_line2,details.city,details.postal_code,details.country_code].filter(Boolean).join(', ');
 const values={'artist legal name':company?details.company_name:details.legal_name,'artist name':details.artist_name,'artist details':address+(company?'; registration '+details.registration_number+'; authorized signer '+details.signatory_name+' ('+details.signatory_capacity+')':'; contracting personally')};
 return body.replace(/\[(artist legal name|artist name|artist details) - required\]/g,(match,key)=>values[key]||match);
}

// Prepare only this artist's structured copy; governed starting templates stay unchanged.
export function prepareFinalAgreement(record){
 const state=record?.draft_state,review=state?.fields?.['legal review']?.trim();
 if(!state?.templateBody||!state.fields)throw Error('Use the structured contract terms before preparing final text.');
 if(!review||review.length<20||/pending|no approval|not approved|proposed/i.test(review))throw Error('Record the actual legal review before preparing final text.');
 if(requiredAgreementFields(record.body).length||/PROPOSED FOR (REVIEW|CONFIRMATION)|PENDING[^\n]*NO APPROVAL/i.test(record.body))throw Error('Resolve the required and proposed terms before preparing final text.');
 const clean=value=>value.replace(template.notice,'').replace(/\bdraft\b/gi,'agreement').replace(/\bProposed (?=(Silver|Gold|Platinum) allocation:)/g,'').replace(/^\s*\n+/,'');
 const draft_state={...state,templateBody:clean(state.templateBody)};delete draft_state.text_saved_sha256;
 let body=draft_state.templateBody;
 for(const [key,value]of Object.entries(state.fields))if(value.trim())body=body.replaceAll('['+key+' - required]',state.preservePunctuation?value.trim():value.trim().replace(/\.$/,''));
 return {title:record.title.replace(/\s*[·—-]\s*draft\s*$/i,''),body,draft_state};
}
