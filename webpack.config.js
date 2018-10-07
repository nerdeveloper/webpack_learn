const path = require('path');
const webpack = require('.');

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
    loaders: [
      { test: /\.js$/, exclude: /node-modules/, loader: 'babel-loader' },
      { test: /\.html$/, loader: 'raw-loader', exclude: /node_modules/ },
      {   test: /\.(css|scss|sass)$/,
          loader: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader', 'postcss-loader', 'sass-loader']
          }),
          exclude: /node_modules/
      }           
  ],
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