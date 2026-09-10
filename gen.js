const fs = require("fs");
const html = fs.readFileSync("template.html","utf8");
fs.writeFileSync("index.html", html);
console.log("Written:", fs.statSync("index.html").size, "bytes");
