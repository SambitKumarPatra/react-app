const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin');
const src = resolve(__dirname,'src')
const dist = resolve(__dirname,'dist')
module.exports={
  entry:`${src}/index`,
  output:{
    filename:'bundle-[hash:6].js',
    path:`${dist}`
  },
  module:{
    rules:[{
      test:/\.jsx?$/,
      use:['babel-loader'],
      exclude:/node_modules/
    },
    {
      test:/\.css$/,
      use:['style-loader',
          {
            loader:'css-loader',
            options:{
              modules:true,
              localIdentName:'[name]-[local]-[hash:base64:6]',
              camelCase:true
            }
          }],
      exclude:/node_modules/
    },
    {
      test: /\.[ot]tf$/,
      loader: 'url-loader',
      query: {
        mimetype: 'application/octet-stream',
        name:'[hash:base64:6]-[name].[ext]'
      },
      exclude:/node_modules/
    },
    {
      test: /\.jpg$/,
      loader: 'file-loader',
      query: {
        name:'img-[hash:base64:7].[ext]'
      },
      exclude:/node_modules/
    },
    {
      test: /\.png$/,
      loader: 'url-loader',
      query: {
        limit:10000,
        name:'img-[hash:base64:7].[ext]'
      },
      exclude:/node_modules/
    }]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template : `${src}/index.html`,
      inject : true
    }),
    new DashboardPlugin()
  ]
}
