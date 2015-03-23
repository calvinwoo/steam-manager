var express = require('express');
var http = require('http');
var path = require('path');
var exphbs = require('express-handlebars');
var JSX = require('node-jsx').install();

// handlebars setup
var hbs = exphbs.create({
  defaultLayout: 'main'
});

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Set /public as our static content dir
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', require('./routes/index'));

var port = 8000;

http.createServer(app)
  .listen(port, function() {
    console.log('Server started on ' + port);
  });

