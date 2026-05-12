const fs = require('fs');
const content = fs.readFileSync('/home/bugsfounder/Documents/rumour/server/routes/v2/traffic.js', 'utf8');
const routeRegex = /router\.(get|post|put|patch|delete)\(['"]([^'"]+)['"]/g;

let match;
while ((match = routeRegex.exec(content)) !== null) {
    console.log(`Method: ${match[1]}, Path: ${match[2]}`);
}
