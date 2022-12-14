const base = require('./webpack.base')

const {merge} = require('webpack-merge');
const webpack = require('webpack');
const path = require('path')

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

//进行合并，将webpack.base.conf.js中的配置合并到这
module.exports = merge(base, {
    //模块参数
    mode: 'development',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'js/index[contenthash:5].js',
        chunkFilename: 'js/[id].chunk[chunkhash:3].js'
    },
    //启用source-map方便调试
     devtool: 'source-map',
     optimization:{
        runtimeChunk: 'single',
     },
     plugins:[
        //定义全局变量
        new webpack.DefinePlugin({
            //这里必须要解析成字符串进行判断，不然将会被识别为一个变量
               DEV: JSON.stringify('dev')
           })
    ],
     devServer: {
        static:{
            directory:path.resolve(__dirname,'./dist')
        },
      //端口号
        port: '8383',
        // inline: true,
        // historyApiFallback: false,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        hot: true//允许热加载
    },
 });