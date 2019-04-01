var webpack = require('webpack');
var providePlugin = new webpack.ProvidePlugin({$: 'jquery',jQuery: 'jquery','window.jQuery':'jquery'});
module.exports = {
    entry: './src/js/entry.js',
    output: {
      filename: 'index.js',
      path: __dirname + '/static',
      publicPath: '/static',
    },
    module: {
      rules: [
        {test:/\.css$/,use:['style-loader', 'css-loader']},
        {test:/\.less$/,use:['style-loader', 'css-loader', 'less-loader']},
        {test:/\.(jpg|png|svg|ttf|woff|eot)$/,use:['url-loader']},
        {test:/\.js$/,use:['babel-loader']}
    ]
    },
    devServer: {
      host: '0.0.0.0',
      port: 8080,
    },
    mode: 'development',
    plugins: [providePlugin]
};