const path = require('path')               // 引入node内置模块path
const HtmlWebpackPlugin = require('html-webpack-plugin') // 构建html文件
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // vue-loader编译vue文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清理构建目录下的文件
module.exports = {
  entry: '../lvue2/src/main.js',                   // 入口文件，把src下的main.js编译到出口文件
  output: {                                 // 出口文件
    path: path.resolve(__dirname, 'dist'),   // 出口路径和目录
    filename: "[name].js",                 // 编译后的名称
    clean: true,                            //自动清空上次打包内容
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      //css,less,css的转换
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
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
        generator: {
          //输出图片名称
          filename: "img/[name].[hash:6][ext]",
        }
      },
      //图标的转换
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {
          //输出名称
          filename: "fonts/[hash:4][ext]",
        }
      },
      //babel
      {
        test: /\.(ts|js)x?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {  // 此配置用在引用文件时
    extensions: ['.js', '.vue', '.json'],  // 引入路径是不用写对应的后缀名
    alias: {
      'vue$': 'vue/dist/vue.esm.js',        // 正在使用的是vue的运行时版本，而此版本中的编译器是不可用的，我们需要把它切换成运行时 + 编译的版本
      '@': path.resolve(__dirname, './src'), // 用@直接指引到src目录下
    }
  },
  plugins: [
    new HtmlWebpackPlugin({                // 自动插入到dist目录中
      title: 'webpack搭建vue2项目',
      template: './index.html',
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    host: "localhost",// 启动服务器域名
    port: "8083", // 服务器端口
    open: true, // 是否自动打开浏览器
    hot: true, //热加载
    https: false,
  },
  // 开发模式
  // 开发环境mode用development，因为追求的是打包速度，而不是体积 正式环境mode用production，因为追求的是体积小，而不是打包速度
  mode: process.env.NODE_ENV === 'prod' ? "production" : "development",  

}