var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

const app = express();

var port = 3000;

// Connect to the database called Penpen.
mongoose.connect('mongodb://localhost:27017/penpen');

// Configure the server with routes.
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./config/routes.js')(app, express);

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('Listening on... ' + port);
});
