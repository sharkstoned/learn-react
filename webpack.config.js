const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'src/client/app/');
const BUILD_DIR = path.resolve(__dirname, 'build/');

module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'js/bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: APP_DIR + '/index.html',
                to: BUILD_DIR + '/index.html'
            }
        ])
    ],
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    devServer: {
        compress: true,
        port: 9000
    }
};
