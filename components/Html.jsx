var React = require('react');

var Html = React.createClass({
  render: function() {
    return (
        <html>
          <head>
            <script src="bundle/bundle.js"></script>
          </head>
          <body dangerouslySetInnerHTML={{__html: this.props.markup}}></body>
        </html>
    );
  }
});

module.exports = Html;
