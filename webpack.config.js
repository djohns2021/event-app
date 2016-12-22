const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: './build/bundle.js'
    },
    resolve: {
      root: [
        path.join(__dirname, '/src')
      ],
      fallback: [
        path.join(__dirname, '/node_modules')
      ],
      alias: {
        'styles': path.join(__dirname, '/styles')
      }
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' }
        ]
    }
};
