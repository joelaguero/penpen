var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

var port = 3000;

// Connect to the database called Penpen.
mongoose.connect('http://localhost:27017/penpen');

// Configure the server with routes.
require('./config/routes.js')(app, express);

app.use(express.static(__dirname));
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('Listening on... ' + port);
});
