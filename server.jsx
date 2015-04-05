var React = require('react');
var Router = require('react-router');

var routes = require('./routes.jsx');
var Html = require('./components/Html.jsx');

module.exports = function (req, res, next) {
  Router.run(routes, req.url, function (Handler, state) {

    var markup = React.renderToString(<Handler />);
    var html   = React.renderToStaticMarkup(<Html markup={markup} />);

    res.send('<!DOCTYPE html>' + html);
  });
};
