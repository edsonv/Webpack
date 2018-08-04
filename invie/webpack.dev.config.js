const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        invie: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    devServer: {
        port: 9000
    },
    module: {
        rules: [
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    // options: {
                    //     presets: ['es2015', 'react', 'stage-2'],
                    // }
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000000,
                        fallback: 'file-loader',
                        name: 'images/[name].[hash].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        })
    ]
}
