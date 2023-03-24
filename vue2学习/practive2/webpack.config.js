const path =require("path");//node.js核心模块，专门处理路径问题

module.exports ={
    //entry入口
    entry: "./src/main.js",//入口文件，相对路径
    //output输出
    output: {
        //文件输出的路径
        //__dirname : node.js的变量，代表当前文件的文件夹目录
        path: path.resolve(__dirname, "dist"),//输出目录，绝对路径
        //文件名
        filename: "main.js",//会在输出目录下生成命名的js文件
    },
    //加载器
    module:{
        rules: [
            //loader配置
            {
                test: /\.css$/,//只检测.css文件
                use: [//执行顺序，从右到左（从下到上）
                    "style-loader",// 将js中的css通过创建style标签添加到html文件中生效
                    "css-loader"// 将css资源编译成common.js的模块到js当中
                ], 
            }
        ]
    },
    //plugin插件
    plugins: [

    ],
    //模式mode
    mode: "development",
}