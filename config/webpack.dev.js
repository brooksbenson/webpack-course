const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },
  mode: 'development',
  output: {
    filename: 'main-bundle.js',
    path: path.join(__dirname, '..', 'dist'),
    publicPath: './'
  },
  devServer: {
    contentBase: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
};