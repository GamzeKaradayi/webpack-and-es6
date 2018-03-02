const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {   
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js')    
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    port: 1111
  },
  
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }]  
      }
    })
  ],
 
};