d=document.body.innerText.replaceAll(/[FL]/g,0).replaceAll(/[BR]/g,1).trim().split`\n`.map(c=>parseInt(c,2)).sort((a,b)=>b-a);[d[0],d.find((s,i,S)=>s-S[i+1]==2)-1]