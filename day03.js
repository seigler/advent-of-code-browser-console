let d=document.body.textContent.trim().split(`
`);let t=(X,Y)=>{let c=0;for(let y=0,x=0;y<d.length;){c+=d[y][x%d[0].length]=='#'?1:0;x+=X;y+=Y}return c};[t(3,1),t(1,1)*t(3,1)*t(5,1)*t(7,1)*t(1,2)];