const fs = require('fs');
let content = fs.readFileSync('server/utils/converters.js', 'utf8');

// ?? nekobox ? switch
const oldCase = "case 'singbox':";
const newCase = "case 'singbox':\n        case 'nekobox':";

if (content.includes(newCase)) {
    console.log('NekoBox already added');
} else if (content.includes(oldCase)) {
    content = content.replace(oldCase, newCase);
    fs.writeFileSync('server/utils/converters.js', content, 'utf8');
    console.log('NekoBox case added');
} else {
    console.log('Pattern not found');
}
