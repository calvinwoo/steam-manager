var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Account = React.createClass({
  render: function() {
    return (
      <div>
        <h1>
          Account Page.
        </h1>
        <Link to="about">About Page</Link>
      </div>
    );
  }
});

module.exports = Account;
