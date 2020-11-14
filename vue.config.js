// const path = require('path')
// module.exports = {
//     pluginOptions: {
//       'style-resources-loader': {
//         preProcessor: 'sass',
//         patterns: [
//           path.resolve(__dirname, './node_modules/sass-loader/*.scss')      //你的.scss文件所在目录
//         ]
//       }
//     }
//   }
module.exports = {
    // 根路径 默认使用/ vue cli 3.3+ 弃用 baseUrl
    publicPath: './' // 此处改为 './' 即可
  }