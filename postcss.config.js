module.exports = {
    plugins:{
        "postcss-px-to-viewport":{
            unitToConvert: 'px',
            viewportWidth: 320,
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: [],
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568
        },
        "autoprefixer": {
            "overrideBrowserslist": [
                 "ie >= 8", // 兼容IE7以上浏览器
                 "Firefox >= 3.5", // 兼容火狐版本号大于3.5浏览器
                 "chrome  >= 35", // 兼容谷歌版本号大于35浏览器,
                 "opera >= 11.5", // 兼容欧朋版本号大于11.5浏览器
            ]
        }
    }
}