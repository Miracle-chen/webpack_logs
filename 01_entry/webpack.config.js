// webpack依赖于node.js
const path = require('path');

module.exports = {
    // 单文件入口
    // entry: './src/main.js',
    // 多文件入口
    // entry: ['./src/main.js', './src/app.js'],
    // 对象语法
    entry: {
        app1: ['./src/app.js'],
        main1: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // filename: 'bundle.js',
        filename: '[name].js',
    },
    mode: 'development'
}