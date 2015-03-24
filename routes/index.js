var express = require('express');
var router = express.Router();

var React = require('react');
var Library = React.createFactory(require('../components/Library.jsx'));

router.get('/', function(req, res) {
  var markup = React.renderToString(Library());
  res.render('home', {
    markup: markup
  });
});

module.exports = router;
