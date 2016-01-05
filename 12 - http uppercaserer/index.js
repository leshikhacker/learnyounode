const http = require('http');
const map = require('through2-map');

const PORT = process.argv[2];

http.createServer((req, res) => {
  if(req.method === 'POST') {
    req
      .pipe(map(chunk => chunk.toString().toUpperCase()))
      .pipe(res);
  }
}).listen(PORT);