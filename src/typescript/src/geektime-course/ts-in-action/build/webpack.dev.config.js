// 开发环境配置
module.exports = {
  /*
    cheap: sourcemap会忽略文件的列信息
    module: 会定位到ts源码，而不是经过loader转义后的js源码
    eval-source-map: 会将sourcemap以dataurl的形式打包到文件中，它的重编译速度很快
  */
  // devtool: "chareap-module-eval-source-map",
  // 参考地址：https://www.webpackjs.com/configuration/devtool/#root
  devtool: "eval-cheap-module-source-map",
};
