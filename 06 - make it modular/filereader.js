const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext) {
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
};
