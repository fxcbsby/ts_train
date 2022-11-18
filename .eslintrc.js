module.exports = {
    root: true,
    parser:"@typescript-eslint/parser",
    plugins:["@typescript-eslint"],
    extends:["eslint:recommended","plugin:@typescript-eslint/recommended"],
    rules:{
        "@typescript-eslint/no-namespace":0,
        "no-debugger":0
    },
    globals:{
        globalStates: true
    }
}