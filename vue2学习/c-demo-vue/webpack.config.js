//webpack 是一个用于现代 JavaScript应用程序的静态模块打包工具。当 webpack处理应用程序时，
//它会在内部构建一个依赖图(dependency graph)，此依赖图对应映射到项目所需的每个模块，并生成一个或多个 bundle。
// loader 用于转换某些类型的模块，而插件则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
//想要使用一个插件，你只需要 require() 它，然后把它添加到 plugins 数组中。
//多数插件可以通过选项(option)自定义。你也可以在一个配置文件中因为不同目的而多次使用同一个插件，这时需要通过使用 new 操作符来创建一个插件实例。
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const config = {
  //入口文件 入口起点(entry point)指示webpack应该使用哪个模块，来作为构建其内部 依赖图(dependency graph) 的开始。
  //进入入口起点后，webpack 会找出有哪些模块和库是入口起点（直接和间接）依赖的。
  entry: path.resolve(__dirname, 'src/main.js'),
  //输出文件 output 属性告诉 webpack 在哪里输出它所创建的 bundle，以及如何命名这些文件。
  output: {
    filename: 'bundle.js',//filename: 配置输出文件名，可添加路径配置(例子中js/)
    path: path.resolve(__dirname, 'dist')//path: 文件的输出路径，必须是绝对地址
  },
  //通过选择 development（生产模式）, production（开发模式）或 none 之中的一个，来设置 mode 参数，你可以启用 webpack 内置在相应环境下的优化。
  //其默认值为 production。		
  mode: 'development', // 设置mode,
  module: {
    rules: [
      {
        test: /\.vue$/,//test 属性，识别出哪些文件会被转换。
        use: 'vue-loader',// use 属性，定义出在进行转换时，应该使用哪个 loader。
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    //生成html页面并导入bundle.js，如果配置了filename则以项目中filename指定的html为模版
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    })
  ]
}
module.exports = config

