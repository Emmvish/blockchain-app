const path = require('path');

module.exports = {
  // Location of file to be processed by webpack.
  entry: './src/frontend/app.js',
  output: {
    // Location where the parsed file needs to be stored
    path: path.join(__dirname, 'public'),
    // Name of the parsed file which is to be embedded inside "main.html" file in public directory
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      // Making the babel loader parse only those files which end with ".js" extension.
      test: /\.js$/,
      // Excluding the ".js" extension files located inside "node_modules" folder.
      exclude: /node_modules/
    }, {
      // Processing the CSS styles specified in src/frontend/styles (styles.css) using CSS-Loader and Style-Loader
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  // Choosing the best possible source map for backward mapping of components of parsed "bundle.js" file with the react components source code specified in src/frontend directory.
  devtool: 'eval-source-map',
  devServer: {
    // Location of public directory to be used by server provided by webpack.
    contentBase: path.join(__dirname, 'public')
  }
};
