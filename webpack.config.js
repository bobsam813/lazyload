const path = require('path');
const package = require("./package.json");
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = ROOT_PATH + '/src';
const DIST_PATH = ROOT_PATH + '/dist';
const SRC_NAME = 'LazyLoad.js';
const DIST_NAME = 'lazyload.js';

module.exports = {
    entry: SRC_PATH + '/' + SRC_NAME,
    output: {
        path: DIST_PATH,
        filename: package.name + '-' + package.version + '.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                presets: ['es2015'],
                plugins: ['transform-remove-strict-mode']
            }
        }]
    },
    plugins:[
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // })
    ]
}