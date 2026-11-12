import defaults from '../../../../data/control-center/partnership-defaults.json' with {type:'json'};
import template from '../../../../data/control-center/agreement-template.json' with {type:'json'};
export const partnershipDrafts=defaults.items;
export const proposedTermsNotice=template.proposalDefaults.notice;
export function proposedAgreementTerms(tier){
 const item=defaults.items.find(item=>item.id===tier);if(!item)return {};
 return Object.fromEntries(Object.entries({...template.proposalDefaults.common,...template.proposalDefaults.tiers[tier]}).map(([key,value])=>[key,'PROPOSED FOR REVIEW: '+value.replaceAll('{{studio_plan}}',item.includedStudioPlan)]));
}
export const requiredAgreementFields=body=>[...new Set([...String(body).matchAll(/\[([a-z ]+) - required\]/g)].map(match=>match[1]))];
export const agreementFieldSection=key=>template.sections.find(section=>section.text.includes('{{'+key.replaceAll(' ','_')+'}}'))?.title||'Other required terms';
export const isPartnershipTemplate=row=>partnershipDrafts.some(item=>row.tags.includes('partnership-'+item.id)&&row.body===createPartnershipDraft(item.id).body);
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
