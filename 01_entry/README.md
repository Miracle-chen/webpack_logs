# webpack核心概念（一） --- entry入口

## 未配置webpack.config.js

src中定义一个mathUtils文件，导出sum方法。在main.js中import该方法，直接调用。

在此阶段可以使用 `webpack ./src/main.js -o ./dist/bundle.js --mode=development` 命令来生成打包压缩后的文件。

## 已配置webpack.config.js

### 生成package.json文件

`npm init`

配置script的build命令，在之后的代码中，可以通过 `npm run build` 来映射到 `webpack`上。进而执行`webpack.config.js`文件，开始打包压缩。

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
},
```

### 单文件入口

```javascript
const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    mode: 'development'
}
```

将`main.js`打包成一个`bundle.js`文件。

### 多文件入口（**multi-main entry**）

```javascript
const path = require('path');

module.exports = {
    entry: ['./src/main.js', './src/app.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    mode: 'development'
}
```

将`main.js` 和 `app.js` 打包成一个`bundle.js`

### entry接受一个对象

语法： `entry: { <entryChunkName> string | [string] } | {}`

```javascript
const path = require('path');

module.exports = {
    entry: {
        app1: './src/app.js',  // 也可以定义为数组路径的格式，如['./src/app.js']
        main1: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        // [name] 获取源文件的名称（entry路径的key值）
        filename: '[name].js',
    },
    mode: 'development'
}
```

将`main.js` 和 `app.js` 打包分别成`main1.js`和`app1.js`