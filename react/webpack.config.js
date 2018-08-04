const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            // Aquí van los loaders
            {
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                },
            },
            {
                test: /\.(jpg|png|gif|woff|eot|ttf|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 100000
                    }
                }
            },
            // {
            //     test: /\.json$/,
            //     use: {
            //         loader: 'json-loader'
            //     }
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract(
                    {
                         // [ 'style-loader', 'css-loader' ]
                         // fallback: 'style-loader'
                         use: 'css-loader'
                     }
                 )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/[name].css')
    ]
}
