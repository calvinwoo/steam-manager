var React = require('react');
var Router = require('react-router');

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <div>
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
