var path = require('path');

module.exports = {
    context: path.join(__dirname, 'app'),
    entry: "./scripts/app.js",
    output: {
        path: path.join(__dirname, 'build'),
        filename: "bundle.js"
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "jshint-loader"
        }],
        loaders: [{
            test: /\.html$/,
            loader: "angular-templatecache-loader"
        }, {
            test: /\.(png|jpg)$/,
            loader: "url-loader"
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }]
    },
    resolve: {
        root: path.join(__dirname, 'app')
    },
    devServer: {
        port: 8080 //webpack copy plugin image minplugin

        //dev-tool source map - map
    }
};
