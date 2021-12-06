I=$('pre').innerText.trim().split`\n`;O=[];I.map(l=>[...l].map((x, i)=>{if(+x)O[i]=(O[i]||0)+1}))
g=t=>parseInt(O.reduce((a,p)=>a+(t^(p<I.length/2)?0:1),""),2);
[g(0)*g(1)]// just day 1 so far