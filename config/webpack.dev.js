const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  mode: 'development',
  output: {
    filename: 'main-bundle.js',
    path: path.join(__dirname, '..', 'dist'),
    publicPath: 'js'
  },
  devServer: {
    contentBase: 'dist',
    overlay: true
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].html' }
          },
          { loader: 'extract-loader' },
          { loader: 'html-loader' }
        ]
      }
    ]
  }
};