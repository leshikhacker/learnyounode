const http = require('http');
const fs = require('fs');

var port = process.argv[2];
var filename = process.argv[3];

http.createServer(function(req, res) {
  var file = new fs.ReadStream(filename);
  file.pipe(res);
}).listen(port);