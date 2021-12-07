I=$('pre').innerText.trim().split`\n`;O=[];I.map(l=>[...l].map((x, i)=>{if(+x)O[i]=(O[i]||0)+1}))
g=t=>O.reduce((a,p,i)=>a+(t^(p<I.length/2)?0:1<<i),0);
g(0)*g(1)// day 1
P=[...O.reduce((a,p)=>a+(p>=I.length/2?1:0),"")]
s=(x,a)=>{n=0;for(p in a){if(x[p]!=+a[p])return n;n++}return n}
Q=parseInt(I.sort((a,b)=>s(a,P)-s(b,P))[0],2);
R=P.map(x=>1-x);
S=parseInt(I.sort((a,b)=>s(a,R)-s(b,R))[0],2);
[Q,S]//day 2, but wrong