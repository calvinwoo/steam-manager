var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./components/App.jsx');
var Account = require('./components/Account.jsx');
var About = require('./components/About.jsx');
var Library = require('./components/Library.jsx');

var routes = (
  <Route path="/" handler={App}>
    <DefaultRoute name="index" handler={Account} />
    <Route name="library" path="/:userName" handler={Library} />
    <Route name="about" path="/about" handler={About} />
  </Route>
);

module.exports = routes;
