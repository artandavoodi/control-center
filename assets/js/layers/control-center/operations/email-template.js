import branding from '../../../../data/control-center/email-branding.json' with {type:'json'};
const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

// Email markup is generated from plain text, never from applicant-supplied HTML.
export function brandedEmail({subject,body},options={}){
 const b={...branding,logo:options.logo||branding.logo};
 const paragraphs=String(body).split(/\n\s*\n/).map(text=>`<p style="margin:0 0 24px;line-height:1.65">${escape(text).replaceAll('\n','<br>')}</p>`).join('');
 return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(subject)}</title></head><body style="margin:0;padding:24px;background:${b.background};color:${b.text};font-family:Helvetica,Arial,sans-serif"><table role="presentation" style="width:100%;max-width:640px;margin:0 auto;background:${b.surface};border-collapse:collapse"><tr><td style="padding:40px 32px 24px"><a href="${b.website}"><img src="${b.logo}" alt="${b.name}" width="240" style="display:block;width:240px;max-width:100%;height:auto;border:0"></a></td></tr><tr><td style="padding:16px 32px">${paragraphs}</td></tr><tr><td style="padding:8px 32px 40px;color:${b.muted};font-size:13px;line-height:1.8"><strong>${b.name}</strong><br>${b.signature}<br><a style="color:inherit" href="mailto:${b.sender}">${b.sender}</a><br><a style="color:inherit" href="${b.website}">artanrecords.com</a></td></tr></table></body></html>`;
}
