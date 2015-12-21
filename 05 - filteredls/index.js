const fs = require('fs');
const path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, files) {
  if(err) {
    throw err;
    return;
  }

  for(var i in files) {
    if(path.extname(files[i]) != '.' + ext) continue;

    console.log(files[i]);
  }
});