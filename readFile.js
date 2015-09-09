// var fs = require('fs');

// var data = fs.readFileSync(process.argv[2],'utf8');

// console.log(data.match(/\n/g).length);

//-------------
// arr = data.split("");

// counter = arr.reduce(function(prev, cur){
//   if (cur === '\\n') prev ++;
//   return prev;
// }, 0);

// console.log(counter);
//-------------

var fs = require('fs');

fs.readFile(process.argv[2],'utf8', function(err, data){
  console.log(data.match(/\n/g).length);
});

