const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              camelCase: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './index.html'
    })
  ],

  devServer: {
    historyApiFallback: true
  }
};