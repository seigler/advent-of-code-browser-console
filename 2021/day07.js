with(Math){C=$('pre').innerText.trim().split`,`.map(x=>+x),l=C.length,S=0;C.map(c=>S+=c);a=round((S-l)/(l-1));p=q=0;C.map(c=>p+=abs(c-a));q=ceil(S/l);[p,[q-1,q].map(x=>C.reduce((a,c)=>a+(1+abs(c-x))*abs(c-x)/2,0)).sort((a,b)=>a-b)[0]]}