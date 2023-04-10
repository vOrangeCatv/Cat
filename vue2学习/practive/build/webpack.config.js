const path = require('path')               
const HtmlWebpackPlugin = require('html-webpack-plugin') 
module.exports ={             
  entry:'../src/main..js',                 
  output:{                                
    path: path.resolve(__dirname,"dist"),  
    filename: "js/main.js",                 
  },
  plugins:[
    new HtmlWebpackPlugin({               
      title: 'webpack搭建vue项目',
    }),
  ],
  mode: "development",    
}