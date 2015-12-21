const fs = require('fs');

try {
  var fileContent = fs.readFileSync(process.argv[2]).toString().split('\n');
  console.log(fileContent.length - 1);
}
catch(e) {
  console.log(e);
}