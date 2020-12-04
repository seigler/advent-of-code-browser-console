let d=document.body.textContent.replaceAll`cid:`.split`

`;[d.reduce((t,l)=>/(:[\s\S]+){7}/m.test(l)?t:t+1,0),d.filter(l=>/((byr:(19[2-9]\d|200[012])|iyr:20(1\d|20)|eyr:20(2\d|30)|hgt:1([5-8]\d|9[0-3])cm|hgt:(59|6\d|7[0-6])in|hcl:#[\da-f]{6}|ecl:(amb|blu|brn|gry|grn|hzl|oth)|pid:\d{9})\b[\s\S]*){7}/gm.test(l)).length]