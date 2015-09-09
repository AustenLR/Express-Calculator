var express = require('express'),
  app = express();

app.set("view engine", "ejs");

// app.get('/add/:num1/:num2', function(req, res){
//   var num1 = req.params.num1;
//   var num2 = req.params.num2;
//   var sum = parseInt(num1)+parseInt(num2);
//   res.render('index',{sum : sum});
// });

// app.get('/sub/:num1/:num2', function(req, res){
//   var num1 = req.params.num1;
//   var num2 = req.params.num2;
//   var sum = parseInt(num1)-parseInt(num2);
//   res.render('index',{sum : sum});
// });

// app.get('/mult/:num1/:num2', function(req, res){
//   var num1 = req.params.num1;
//   var num2 = req.params.num2;
//   var sum = parseInt(num1)*parseInt(num2);
//   res.render('index',{sum : sum});
// });

// app.get('/div/:num1/:num2', function(req, res){
//   var num1 = req.params.num1;
//   var num2 = req.params.num2;
//   var sum = parseInt(num1)/parseInt(num2);
//   res.render('index',{sum : sum});
// });

app.get('/:op/:num1/:num2',function(req, res){
  var op = req.params.op;
  var num1 = parseInt(req.params.num1);
  var num2 = parseInt(req.params.num2);
  if (op === 'add'){
    var sum = num1 + num2;
  } else if (op === 'sub') {
    var sum = num1 - num2;
  } else if (op === 'mult') {
    var sum = num1 * num2;
  } else if (op === 'div') {
    var sum = num1 / num2;
  }
  res.render('index',{sum : sum});
});


app.listen(3000, function (){
  console.log('Server running on port 3000');
});