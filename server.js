var express = require('express');
var app = express();
var path = require('path');

var port = 3000;

app.use(express.static(__dirname));

app.get('/', function(req, res) {
  res.sendFile('index.html');
  // res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, function() {
  console.log('Listening on... ' + port);
});
