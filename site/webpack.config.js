const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: './site/index.js',
  devtool: 'inline-source-map',
  output: { filename: 'bundle.js', publicPath: '' },
  resolve: {
    alias: { 'styled-components$': 'styled-components/lib/index.js' }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true, importLoaders: 1, localIdentName: '[name]__[local]__[hash:base64:5]' } },
          { loader: 'postcss-loader' },
        ]
      },
      {
        test: /\.js$/,
        use: [ { loader: 'babel-loader', options: { presets: ['es2015', 'react', 'stage-0'], plugins: ['transform-decorators-legacy' ] } } ],
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'starjs', template: './site/index.html' }),
    new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } })
  ],
}
