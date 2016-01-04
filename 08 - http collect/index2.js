const http = require('http');
const bl = require('bl');

var path = process.argv[2];

http.get(path, function(response) {
  response.pipe(bl(function(err, data){
    var result = data.toString();
    console.log(result.length);
    console.log(result);
  }));
});