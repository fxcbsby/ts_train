const {merge} = require('webpack-merge');
const base = require('./webpack.base');

const path = require('path');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const UglifyJsPlugin = require('webpack-parallel-uglify-plugin');
const webpack = require('webpack');
let { CleanWebpackPlugin } = require('clean-webpack-plugin')



module.exports = merge(base, {
    mode: 'production',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'js/index[contenthash:5].js',
        chunkFilename: 'js/[id].chunk[chunkhash:3].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
          },
        minimizer: [
          //压缩CSS代码
            new CssMinimizerPlugin(),
          //压缩js代码
            new UglifyJsPlugin({
              //启用文件缓存
                cache: true,
             //使用多线程并行运行提高构建速度
                parallel: true,
             //使用 SourceMaps 将错误信息的位置映射到模块
                sourceMap: true
            })
        ]
    },
    plugins:[
        //定义全局变量
        new webpack.DefinePlugin({
            //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
               DEV: JSON.stringify('prod')
           }),
        new CleanWebpackPlugin()
        
    ],

});