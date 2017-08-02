var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/client/app/');
var BUILD_DIR = path.resolve(__dirname, 'src/client/build/');

var config = {
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    }
};

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: "js/bundle.js"
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: APP_DIR + '/index.html',
                to: BUILD_DIR + '/index.html'
            }
        ])
    ]
};