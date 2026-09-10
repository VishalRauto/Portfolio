const fs=require('fs');const p=JSON.parse(fs.readFileSync('portfolio.json','utf8'));fs.writeFileSync('index.html',p.html);console.log('done',fs.statSync('index.html').size,'bytes');
