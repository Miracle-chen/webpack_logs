## 单文件入口和出口
src中定义一个mathUtils文件，导出sum方法。在main.js中import该方法，直接调用。

在此阶段可以使用 `webpack ./src/main.js -o ./dist/bundle.js --mode=development` 命令来生成打包压缩后的文件。
