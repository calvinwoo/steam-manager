var React = require('react');

var Library = React.createClass({
  getInitialState: function() {
    return {
      games: [
        {id: 123, name: 'COD'},
        {id: 124, name: 'BF'}
      ],
      sortedGames: []
    }
  },
  componentWillMount: function() {
    this.setState({
      sortedGames: this.state.games
    });
  },
  searchGames: function(query) {
    var sortedGames;
    sortedGames = this.state.games.filter(function(game) {
      var gameName = game.name.toLowerCase();
      return gameName.search(query) > -1;
    });
    this.setState({
      sortedGames: sortedGames
    });
  },
  render: function() {
    return (
      <div>
        <Welcome />
        <SearchBox onChange={this.searchGames} />

        <SearchResults sortedGames={this.state.sortedGames} />
      </div>
    );
  }
});

var Welcome = React.createClass({
  render: function() {
    return (
      <h2>Hello</h2>
    )
  }
});

var SearchBox = React.createClass({
  changeHandler: function(event) {
    this.props.onChange(event.target.value);
  },
  render: function() {
    return (
      <input type="text" onChange={this.changeHandler} />
    )
  }
});

var SearchResults = React.createClass({
  render: function() {
    return (
      <ul>
        {
          this.props.sortedGames.map(function(game) {
            return <li key={game.id}>{game.name}</li>
          })
        }
      </ul>
    );
  }
});

module.exports = Library;
