const fs = require("fs");
let c = fs.readFileSync("index.html", "utf8");
const old = '<div class="reveal-overlay">\n            <span class="reveal-hint"><i class="fas fa-mouse-pointer"></i> Hover to reveal</span>\n          </div>';
const neu = '<div class="reveal-overlay"></div>';
while(c.includes('reveal-hint')) {
  c = c.replace(/<div class="reveal-overlay">[\s\S]*?<\/div>/, '<div class="reveal-overlay"></div>');
}
fs.writeFileSync("index.html", c);
console.log("done, hints remaining:", (c.match(/reveal-hint/g)||[]).length);
