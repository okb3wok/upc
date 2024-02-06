const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  devServer: {
    static: './src',
    port: 9000,
    open: true
  },plugins:
    [new HtmlWebpackPlugin({
      template: './src/index.html'
    })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]}
};
