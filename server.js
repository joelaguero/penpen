// Packages
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var jwt = require('jsonwebtoken');
var config = require('./config/config.js');
var routes = require('./config/routes.js');
var User = require('./app/users/userModel.js');
var Article = require('./app/articles/articleModel.js');

// Configuration
var port = process.env.PORT || 3000;
mongoose.connect(config.database);

// Use body parser to get info from POST request or URL parameters.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

// Use morgan to log requests for dev.
app.use(morgan('dev'));

// Configure the server with routes.
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});
routes(app, express);

// Start server.
app.listen(port);
console.log('Listening at http://localhost:' + port);
