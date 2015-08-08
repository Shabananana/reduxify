var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('webpack-config');

module.exports = webpackConfig.fromObject({
  devtool: 'eval',
  entry: [
    './client/main'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  watch: {

  },
  /*plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],*/
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        optional: ['runtime'],
        stage: 0
      },
      exclude: /node_modules/
    }]
  }
});
