import labels from '../assets/data/control-center/update-actions.json' with {type:'json'};
export function updateResult(job){
 const published=job.publishedLayers||[],complete=job.status==='succeeded';
 const title=complete?labels.results[job.method]:labels.results[job.status]||labels.results.failed;
 const steps=(job.steps||[]).map(step=>({...step,label:labels.layerNames[step.layer]||step.layer,status:job.failedLayers?.includes(step.layer)?'failed':complete||job.validationFinished?'passed':'unconfirmed'}));
 const message=job.status==='interrupted'?'The service restarted before the outcome was confirmed. Review the logs and repository state before retrying.':job.status==='running'?'The update is still running. You can continue using other workspaces.':complete&&job.method==='publish'?labels.results.hosting:published.length?'Some layers were pushed before this update stopped. Review the results below.':job.method==='publish'?'No successful GitHub publication was confirmed. Review the terminal details before retrying.':labels.results.noPublication;
 const problem=job.problem?(job.failedLayers?.length?job.failedLayers.map(layer=>labels.layerNames[layer]||layer).join(', ')+' needs attention. Open the terminal details for the exact issue.':'The update could not finish. Open the terminal details before retrying.'):'';
 return {title,scope:job.title,message,problem,published:published.map(layer=>({...layer,label:labels.layerNames[layer.id]||layer.id})),steps};
}
export function captureUpdateLine(job,line){
 const progress=line.match(/^Progress: (\d+)\/(\d+) · (.+)$/);
 if(progress){job.progress={completed:Number(progress[1]),total:Number(progress[2]),phase:progress[3]};return;}
 let match=line.match(/^Published ([\w-]+): ([a-f0-9]{40})$/);
 if(match){job.validationFinished=true;job.publishedLayers||=[];if(!job.publishedLayers.some(layer=>layer.id===match[1]))job.publishedLayers.push({id:match[1],revision:match[2]});return;}
 match=line.match(/^Validate ([\w-]+)$/);if(match){job.steps||=[];job.steps.push({layer:match[1],action:'validation'});}
 match=line.match(/^(?:FAILED:|BLOCKED:) ([\w-]+):/);if(match){job.failedLayers||=[];if(!job.failedLayers.includes(match[1]))job.failedLayers.push(match[1]);}
 if(/^(?:All selected validations passed|Validation failed;)/.test(line))job.validationFinished=true;
 if(/^(?:FAILED:|BLOCKED:)/.test(line)||!job.problem&&/^(?:Validation failed|A previous update|Another update|Error:|Shared source changes)/.test(line))job.problem=line.slice(0,800);
}
