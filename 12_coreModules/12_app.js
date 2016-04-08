var fs = require('fs');
fs.writeFileSync("12_coreModules/corn.txt", "Corn is good");
console.log(fs.readFileSync("12_coreModules/corn.txt").toString());

var path = require('path');
var websiteHome = "Desktop/Cata/site//index.html";
var websiteAbout = "Desktop/Cata/site/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));
console.log(__dirname);
console.log(__filename);