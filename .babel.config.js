module.exports = {
    "presets":["@babel/preset-env"],
    "plugins":[
        "syntax-dynamic-import","dynamic-import-webpack"
    ],
    "overrides": [{
        "test": /\.d\.ts$/,
        "parserOpts": {
        "plugins": [["typescript", { "dts": true }]]
        }
      }]
}