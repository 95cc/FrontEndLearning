// 所有配置的入口
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.config");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");

// let config = process.NODE_ENV === "development" ? devConfig : proConfig;

module.exports = (env, argv) => {
  let config = argv.mode === "development" ? devConfig : proConfig;
  return merge(baseConfig, config);
};
