var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'scripts'),
    publicPath: '/public/scripts/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src'),
      query: {
        stage: 0,
          plugins: ['react-transform'],
          extra: {
          "react-transform": [{
              "target": "react-transform-hmr",
              "imports": ["react"],
              "locals": ["module"]
          }, {
              "target": "react-transform-catch-errors",
              "imports": ["react", "redbox-react"]
          }]
        }
      }
    },
    {
      test: /\.json$/,
      loaders: [ 'json' ],
      exclude: /node_modules/,
      include: __dirname
    }]
  }
};
