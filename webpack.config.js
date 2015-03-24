module.exports = {
  entry: './public/js/main.jsx',
  output: {
    path: './public/bundle/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx' }
    ]
  }
};
