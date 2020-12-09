
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.js',
  output: {  
    filename: 'index.[contenthash].js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: '宝文-写代码',
    template: 'src/assets/index.html'
  })
],
module: {
    rules: [
    {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use:["file-loader"]
       },
    {
            test: /\.styl$/,

            use: ['style-loader','css-loader','stylus-loader'] 
         },
     {
            test: /\.less$/,

            use: ['style-loader','css-loader','less-loader'] 
         },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          
          "css-loader",
         {
             loader:"sass-loader",
             options:{
                 implementation: require('dart-sass')
             }
         }
        ],
      },
    ],
  }
};





