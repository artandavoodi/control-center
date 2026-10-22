// Diagram edges are derived from the actual nested-list relationships and card geometry.
export function mountChartConnectors(view){
 const chart=view.querySelector('.control-center-org-tree'),ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');
 svg.classList.add('control-center-chart-edges');svg.setAttribute('aria-hidden','true');view.prepend(svg);let pending;
 function draw(){
  pending=null;if(!view.isConnected){observer.disconnect();return;}
  svg.replaceChildren();svg.hidden=chart.dataset.layout!=='compact';if(svg.hidden)return;
  const frame=view.getBoundingClientRect(),box=chart.getBoundingClientRect();
  const x=value=>value-frame.left+view.scrollLeft,y=value=>value-frame.top+view.scrollTop;
  svg.setAttribute('width',String(Math.max(view.clientWidth,x(box.right))));svg.setAttribute('height',String(y(box.bottom)));
  const gap=parseFloat(getComputedStyle(view).getPropertyValue('--spacing-sm'))||8;
  for(const item of chart.querySelectorAll('li')){
   const parent=item.parentElement.closest('li'),target=item.querySelector(':scope > article'),source=parent?.querySelector(':scope > article');if(!source||!target||!target.getClientRects().length)continue;
   const a=source.getBoundingClientRect(),b=target.getBoundingClientRect();if(!a.width||!b.width)continue;
   const ax=x((a.left+a.right)/2),ay=y(a.bottom),bx=x((b.left+b.right)/2),by=y(b.top),path=document.createElementNS(ns,'path');
   // Root-level branches share a gutter bus, so lower rows never cross upper cards.
   if(parent.parentElement===chart){const bus=x(box.left)+gap;path.setAttribute('d',`M ${ax} ${ay} V ${ay+gap} H ${bus} V ${by-gap} H ${bx} V ${by}`);}
   else path.setAttribute('d',`M ${ax} ${ay} V ${ay+(by-ay)/2} H ${bx} V ${by}`);
   svg.append(path);
  }
 }
 function update(){if(!pending)pending=requestAnimationFrame(draw);}
 const observer=new ResizeObserver(update);observer.observe(chart);observer.observe(view);update();return update;
}
