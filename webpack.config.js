const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 5000,
    ignored: ['node_modules']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    open: true,
    watchContentBase: true
  },
  entry: './src/script.js',
  plugins: [
    new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html",
        favicon: "./src/favicon.ico",
        minify: true
    }),
]
};