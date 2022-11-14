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
                include:path.resolve(__dirname,'src'),
                use:[
                    {
                        loader: require.resolve('babel-loader'),
                        
                        options: {
                            customize: require.resolve(
                                'babel-preset-react-app/webpack-overrides'
                              ),
                              presets: [
                                [
                                  require.resolve('babel-preset-react-app'),
                                
                                ],
                              ],
                        },
                    },
                    // require.resolve('ts-loader'),
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
        }),
        //定义全局变量
        new webpack.DefinePlugin({
            //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
               globalStates: {
                homeStates:{}
               }
           })     
    ]
}
