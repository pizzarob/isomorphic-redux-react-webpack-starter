const nodemon = require('nodemon');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const serverCompiler = webpack(config.serverConfig);
const clientCompiler = webpack(config.clientConfig);

let started = false;

serverCompiler.watch({
    aggregateTimeout: 300,
}, (err, stats) => {
    console.log(stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true
    }));
    if (!started) {
        nodemon({
            src: './build/server.js',
            watch: [
                'build/',
            ],
            ext: 'js',
        });
        started = true;
    }

});

clientCompiler.watch({
    aggregateTimeout: 300,
    errorDetails: true,
}, (err, stats) => {
    console.log(stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true
    }));
});

nodemon
    .on('start', () => {


    })
    .on('restart', (files) => {
        let fileStr = '';

        files.forEach(file => {
            fileStr += file + '\n';
        });

        console.log(`
            Nodemon restarted server.

            The following files changed:

            ${fileStr}
        `);
    });

process.once('SIGINT', function () {
    nodemon.once('exit', function () {
        process.exit();
    });
});


