let path = require('path')
let webpack = require('webpack')
let { CleanWebpackPlugin } = require('clean-webpack-plugin')
let HtmlWebpackPlugin = require("html-webpack-plugin")
let cssExtract = require('mini-css-extract-plugin')
let HappyPack = require('happypack')

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
                    'babel-loader?cacheDirectory=true',
                    'eslint-loader'
                ]
            },
            {
                test:/\.tsx?$/,
                include:path.resolve(__dirname,'src'),
                use: 'happypack/loader?id=tsx'
                // use:[
                //     {
                //         loader: 'babel-loader?cacheDirectory=true',
                        
                //         options: {
                //             customize: require.resolve(
                //                 'babel-preset-react-app/webpack-overrides'
                //               ),
                //               presets: [
                //                 [
                //                   require.resolve('babel-preset-react-app'),
                                
                //                 ],
                //               ],
                //         },
                //     },
                //     // require.resolve('ts-loader'),
                //     {
                //         loader:'eslint-loader',
                //         options:{
                //             quiet: true
                //         }
                //     }
                // ]
            },
            {
                test: /(\.css)$/,
                // use: 'happypack/loader?id=scss'
                use:[
                    cssExtract.loader,
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /(\.s(c|a)ss)$/,
                // use: 'happypack/loader?id=scss'
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
        new HappyPack({
            id: 'tsx',
            threads: 2,
            loaders:[
                {
                    loader: 'babel-loader',
                    
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
                {
                    loader:'eslint-loader',
                    options:{
                        quiet: true
                    }
                }
            ]
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
