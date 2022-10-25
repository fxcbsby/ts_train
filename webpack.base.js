let path = require('path')
let webpack = require('webpack')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
let HtmlWebpackPlugin = require("html-webpack-plugin")
let cssExtract = require('mini-css-extract-plugin')

module.exports = {
    entry:{
        app:path.resolve(__dirname+'/src','index.tsx'),
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src')
        },
        extensions: [".ts", ".tsx", ".js"]
    },
    module:{
        rules:[
            {
                test:/\.jsx?$/,
                use:[
                    'babel-loader',
                    'eslint-loader'
                ]
            },
            {
                test:/\.tsx?$/,
                use:[
                    {
                        loader: 'babel-loader',
                        options: {
                          presets: [
                            '@babel/preset-env',
                            [
                              '@babel/preset-react',
                              { pragma: 'createElement' },
                            ],
                          ],
                        },
                    },
                    'ts-loader',
                    {
                        loader:'eslint-loader',
                        options:{
                            quiet: true
                        }
                    },
                ]
            },
            {
                test: /(\.css)$/,
                use:[
                    cssExtract.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /(\.s(c|a)ss)$/,
                use:[
                    cssExtract.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'public/index.html')
        }),
        new cssExtract({
            filename:'css/index[contenthash:3].css',
            chunkFilename:'css/[name].chunk[chunkhash:3].css'
        })      
    ]
}
