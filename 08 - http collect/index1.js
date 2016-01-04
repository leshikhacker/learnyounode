const http = require('http');

var path = process.argv[2];

http.get(path, function(response) {
  response.setEncoding('utf8');
  var data = '';

  response.on('data', function(row) {
    data += row;
  }).on('end', function() {
    console.log(data.length);
    console.log(data);
  });
});