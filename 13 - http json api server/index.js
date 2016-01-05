const http = require('http');
const PORT = process.argv[2];


http.createServer((req, res) => {
  var url = require('url').parse(req.url);
  var params = require('querystring').parse(url.query);

  if(url.pathname == '/api/parsetime') {
    var date = new Date(params.iso);

    var result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));

  } else if(url.pathname == '/api/unixtime') {
    var date = new Date(params.iso);
    var result = {
      unixtime: date.getTime()
    };

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.statusCode = 404;
    res.end('Not Found!');
  }
}).listen(PORT);
