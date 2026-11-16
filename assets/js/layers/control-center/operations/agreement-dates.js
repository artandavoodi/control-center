import template from '../../../../data/control-center/agreement-template.json' with {type:'json'};

export const agreementDateLabels=template.dates;
export function calendarDate(value){
 if(!/^\d{4}-\d{2}-\d{2}$/.test(value||'')||Number(value.slice(0,4))<1)return null;
 const date=new Date(value+'T00:00:00Z');
 return Number.isFinite(date.getTime())&&date.toISOString().slice(0,10)===value?date:null;
}
function addMonths(date,months){
 const year=date.getUTCFullYear(),month=date.getUTCMonth()+months,day=date.getUTCDate();
 const result=new Date(date);result.setUTCDate(1);result.setUTCFullYear(year,month+1,0);
 const end=result.getUTCDate();result.setUTCFullYear(year,month,Math.min(day,end));return result;
}
export function agreementDuration(starts,ends){
 const start=calendarDate(starts),end=calendarDate(ends);
 if(!start||!end||end<=start)return null;
 let months=(end.getUTCFullYear()-start.getUTCFullYear())*12+end.getUTCMonth()-start.getUTCMonth();
 if(addMonths(start,months)>end)months--;
 const days=Math.round((end-addMonths(start,months))/86400000),parts=[];
 for(const [unit,count]of [['year',Math.floor(months/12)],['month',months%12],['day',days]])if(count)parts.push(count+' '+agreementDateLabels.units[unit][count===1?0:1]);
 return parts.join(', ');
}
export function agreementDateSummary(starts,ends){
 const duration=agreementDuration(starts,ends);if(!duration)return null;
 const format=new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
 return agreementDateLabels.summary.replace('{start}',format.format(calendarDate(starts))).replace('{end}',format.format(calendarDate(ends))).replace('{duration}',duration);
}
export function datedAgreementTemplate(body){
 if(!body.includes('[effective date - required]')||body.includes('[expiry date - required]'))return body;
 return body.replace(/Effective date:\s*\[effective date - required\]|\[effective date - required\]/,'Effective from [effective date - required]; expires on [expiry date - required]. Total duration: [duration - required]');
}
export function bindAgreementDates(section,restoredFields){
 const start=section.querySelector('[data-term-key="effective date"]');if(!start)return;
 const end=document.createElement('input'),duration=document.createElement('input'),label=document.createElement('label'),summary=document.createElement('p');
 duration.type='hidden';duration.dataset.termKey='duration';
 end.type='date';end.dataset.termKey='expiry date';end.value=calendarDate(restoredFields['expiry date'])?restoredFields['expiry date']:'';
 label.textContent=agreementDateLabels.ends;label.append(end);start.closest('label').after(label);summary.setAttribute('role','status');summary.dataset.contractDateSummary='';label.after(summary,duration);
 const update=()=>{
  end.min=start.value;start.max=end.value;
  const text=agreementDateSummary(start.value,end.value),invalid=Boolean(start.value&&end.value&&!text);
  duration.value=agreementDuration(start.value,end.value)||'';end.setCustomValidity(invalid?agreementDateLabels.invalid:'');summary.textContent=text||(invalid?agreementDateLabels.invalid:agreementDateLabels.choose);
 };
 start.addEventListener('input',update);end.addEventListener('input',update);update();
}
