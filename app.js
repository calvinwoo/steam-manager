var express = require('express');
var http = require('http');
var path = require('path');
var JSX = require('node-jsx').install();

var app = express();

// Set /public as our static content dir
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./server.jsx'));

var port = 8000;

http.createServer(app)
  .listen(port, function() {
    console.log('Server started on ' + port);
  });

