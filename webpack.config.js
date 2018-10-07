const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
      './src/main.js',
      './lib/bootstrap/js/bootstrap.min.js'

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder  
 optimization: {
    splitChunks: {
       chunks: 'all'
     }
   },
  module: {
    
    rules: [
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ]
  },

  // plugins: [
  //   ...
  //     new webpack.ProvidePlugin({
  //       $: 'jquery',
  //       jQuery: 'jquery',
  //       'window.jQuery': 'jquery',
  //       Popper: ['popper.js', 'default']           
        
  //     }),
    
  // ],

};