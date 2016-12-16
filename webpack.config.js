const fs = require('fs');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const serverConfig = {
    context: path.resolve(__dirname),
    entry: {
        server: './src/server.js',
    },
    output: {
        path: './build',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        root: path.resolve(__dirname, './src'),
        alias: {
            components: 'client/components',
            actions: 'client/actions',
            containers: 'client/containers',
            reducers: 'client/reducers',
            utils: 'client/utils',
            constants: 'client/constants.js',
            store: 'client/store.js',
        }
    },
    target: 'node',
    devtool: 'source-map',
    debug: true,
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.json?$/,
                loader: 'json',
            },
            {
                test: /\.scss$/,
                loaders: ["css", "sass"]
            },
        ]
    },
    plugins: [
         new webpack.BannerPlugin('require("source-map-support").install();', { raw: true, entryOnly: false })
    ],
    externals: [nodeExternals()],
}

const clientConfig = {
    entry: {
        client: './src/client/client.js',
    },
    output: {
        path: './build',
        filename: '[name].js',
    },
    devtool: 'source-map',
    debug: true,
    plugins: [
        // new CopyWebpackPlugin([
        //     { from: './src/client/sw/index.js', to: 'service-worker.js' },
        //     { from: './robot.png' },
        //     { from: './index.html' },
        //     { from: './staticmap.png' }
        // ])
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss'],
        root: path.resolve(__dirname, './src'),
        alias: {
            components: 'client/components',
            actions: 'client/actions',
            containers: 'client/containers',
            reducers: 'client/reducers',
            utils: 'client/utils',
            constants: 'client/constants.js',
            store: 'client/store.js',
        }
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.json?$/,
                loader: 'json',
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
}

module.exports = {
    clientConfig,
    serverConfig
}