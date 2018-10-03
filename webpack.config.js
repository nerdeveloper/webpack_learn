const path = require('path');

module.exports = {
  entry: [
      './src/main.js',
      './lib/bootstrap/js/bootstrap.min.js'

  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ]
  }

};