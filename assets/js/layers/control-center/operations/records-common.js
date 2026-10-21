import {descendants} from './context.js';
export function parseTags(value){return [...new Set(String(value).split(',').map(tag=>tag.trim().toLowerCase()).filter(Boolean))].slice(0,20);}
export function writableUnits(units,workspace,staff){const brand=descendants(units,workspace.id),branch=staff.is_owner?brand:descendants(units,staff.unit_id);return units.filter(unit=>unit.active&&brand.has(unit.id)&&branch.has(unit.id));}
export function unitOptions(units,e){return units.map(unit=>`<option value="${e(unit.id)}">${e(unit.name)} · ${e(unit.kind)}</option>`).join('');}
export async function saveRecord(form,action,onSaved){form.inert=true;const status=form.querySelector('[role=status]');status.textContent='Saving…';try{const result=await action();if(result.error)throw result.error;await onSaved();}catch(error){status.textContent=error.message||'The record could not be saved. Your changes remain in the form.';}finally{form.inert=false;}}
