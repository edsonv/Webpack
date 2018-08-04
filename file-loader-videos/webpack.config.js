const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "./src/js/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: './dist/'
    },
    module: {
        rules: [
            // Aquí van los loaders
            {
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options: {
                        presets: ['es2015']
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
            {
                test: /\.(mp4|webm)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'vid/[name].[hash].[ext]'
                    }
                }
            },
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
