const filereader = require('./filereader');

var dir = process.argv[2];
var ext = process.argv[3];

filereader(dir, ext);