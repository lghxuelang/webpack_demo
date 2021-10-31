const path = require("path");
const webpack = require("webpack");

module.exports = {
  context:  path.join(__dirname, './src'),
  entry: {
    index:'./index.js',
    lib: './lib.js',
    vendor: ['react', 'react-dom']
  },
  mode: "development",
  output: {
    filename: "[name].js",
    path: path.join(__dirname, './dist')
  },
  module: {
    //loaders加载器
    rules: [
      {
        test: /\.(js|jsx)$/, //一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js和jsx文件（必须）
        exclude: /node_modules/, //屏蔽不需要处理的文件（文件夹）（可选）
        use: ["babel-loader"], //babel-loader的名称（必须）
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"], // compiles Less to CSS
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    port: 3000,
    hot: true,
    publicPath:'/app/'
  },
};
