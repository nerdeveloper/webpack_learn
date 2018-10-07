const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
      './src/main.js',
      './lib/bootstrap/js/bootstrap.min.js'

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
    
    rules: [
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ]
  },
  
  plugins: [
    ...
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],            
        
      })
    
  ]

};