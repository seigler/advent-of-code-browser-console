let d=(document.body.textContent+`\n`).split`\n\n`,y=g=>[...new Set(g.replace(/\n/g,'').split``)];[d.reduce((a,g)=>a+y(g).length,0),d.reduce((a,g)=>a+y(g).filter(b=>g.split(b).length==g.split`\n`.length+1).length,0)]