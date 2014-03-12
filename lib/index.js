var express = require('express');
var app = express();

app.get('/', function(req, res){
  var message = 'Hello World';
  res.send(message);
});

app.listen(3000);
