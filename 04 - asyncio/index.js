const fs = require('fs');

var fileContents = '';

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  if(err) {
    throw err;
    return;
  }

  console.log(data.split('\n').length - 1);
});