var sum = 0;
var i = process.argv.length - 1;

for( ; i > 1;i--) {
  sum += Number(process.argv[i]);
}

console.log(sum);