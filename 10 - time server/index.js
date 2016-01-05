const net = require('net');

var port = process.argv[2];

const server = net.createServer(function(socket){
  var date = new Date();

  var year = date.getFullYear();

  var month = date.getMonth() + 1;
  month = month < 10 ? '0' + month : month;

  var day = date.getDate();
  day = day < 10 ? '0' + day : day;

  var hours = date.getHours();
  hours = hours < 10 ? '0' + hours : hours;

  var minutes = date.getMinutes();
  minutes = minutes < 10 ? '0' + minutes : minutes;

  var dateString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;

  console.log(dateString);
  socket.end(dateString);
});
server.listen(port);