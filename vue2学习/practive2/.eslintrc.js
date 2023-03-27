module.exports ={
    extends: ["eslint:recommended"],
    env: {
        browser: true,// 启用浏览器中的全局变量
        node:true,//启用node中的全局变量
    },
    parserOptions:{
        ecmaVersion: 6,//es6
        sourceType: "module", //es模块 module
    },
    rules: {
        "no-var": 2, //禁止用var定义变量
    },
}