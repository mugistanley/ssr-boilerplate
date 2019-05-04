const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // inform webpack we are building a bundle for
    // nodeJS, raher than for the browser
    target:'node',

    // tell webpack the root file of our
    // server application
    // as in the entry point of our application
    entry:'./src/index.js',

    // tells webpack where to put the output file
    // that is generated
    output: {
        filename:'bundle.js',
        path:path.resolve(__dirname,'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig,config);