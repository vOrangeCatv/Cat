const path = require("path");//node.js核心模块，专门处理路径问题
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin }= require('vue-loader');
const { DefinePlugin } = require('webpack');
module.exports ={
    //entry入口
    entry: "/src/main.js",//入口文件，相对路径
    //output输出
    output: {
        //所有入口文件输出的路径,
        //__dirname : node.js的变量，代表当前文件的文件夹目录
        path: path.resolve(__dirname, "dist"),//输出目录，绝对路径，自动创建dist文件夹
        //文件名
        filename: "js/main.js",//会在输出目录下生成命名的js文件
        clean:true,//自动清空上次打包内容 

    },
    //加载器
    module:{
        rules: [
            //loader配置
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,//只检测.css文件
                use: [//执行顺序，从右到左（从下到上）
                    "style-loader",// 将js中的css通过创建style标签添加到html文件中生效
                    "css-loader"// 将css资源编译成common.js的模块到js当中
                ], 
            },
            {
                test: /\.less$/,
                use: ["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader","css-loader","less-loader","scss-loader"]
            },
            {
                //图片的转换
                test: /\.(png|gif|jpg|jpeg|svg)$/,
                type: 'asset',
               parser: {
                 dataUrlCondition: {
                    //小于10kb的图片转base64，减少请求数量但是会加大体积
                   maxSize: 10 * 1024 // 10kb
                 }
               },
               generator:{
                //输出图片名称
                filename: "img/[name].[hash:6][ext]",
               }
            },
            {
                test: /\.(ttf|woff2?)$/,
                type: 'asset/resource',
               generator:{
                //输出名称
                filename: "fonts/[hash:4][ext]",
               }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,// 排除node_modules中的js文件（这些文件不处理）
                use: {
                  loader: 'babel-loader',
                //   options: {
                //     presets: ['@babel/preset-env']
                //   }
                }
              },
        ]
    },
    //plugin插件
    plugins: [
        //context：检测哪些文件
        new ESLintPlugin({context:path.resolve(__dirname,"src")}),//绝对路径下src
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html")//以public/index.html文件创建新的html文件，好处：自动引入打包输出的资源
        }),
        new VueLoaderPlugin(),
        new DefinePlugin({
            BASE_URL: "'./'",
          }),
    ],
    //开发服务器
    devServer :{
        host: "localhost",// 启动服务器域名
        port: "8083", // 服务器端口
        open: false, // 是否自动打开浏览器
        hot: true, //热加载


    },
    //模式mode
    mode: "development",
}