var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');

var port = 3000;
mongoose.connect('http://localhost:27017/penpen')

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('Listening on... ' + port);
});
