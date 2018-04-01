const { resolve } = require('path');

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'example')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './example'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
