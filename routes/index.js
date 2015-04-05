var express = require('express');
var router = express.Router();

var React = require('react');
var Library = React.createFactory(require('../components/Library.jsx'));

router.get('/', function(req, res) {
  var markup = 'blah';
  res.render('home', {
    markup: markup
  });
});

router.get('/:userName', function(req, res) {
  var userName = req.params.userName;

  var markup = React.renderToString(Library({userName: userName}));
  res.render('home', {
    markup: markup,
    userName: userName
  });
});

module.exports = router;
