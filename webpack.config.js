const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: [
      './main.js',
    

  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
      

   })
],
  externals: [
    
    nodeExternals()], // in order to ignore all modules in node_modules folder  
 optimization: {
    splitChunks: {
       chunks: 'all'
     }
   },
   externals: {
    'jqueryui': 'jQuery',
    'bootstrap': 'jQuery'
},
   module: {
     
    rules: [
      {
        test: /\.(jpg|gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(jpg|png|jpeg|ttf|...)$/,
        use: [
         { loader: 'url-loader', options: { limit: 8192 } } 
         // limit => file.size =< 8192 bytes ? DataURI : File
        ]
      },
      
      {
        test: /\.(css)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },



};