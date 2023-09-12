// 公共环境配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'app.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', 'vue'],
    alias: {
      // vue: 'vue/dist/vue.runtime.esm-bundler.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/i,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/i,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['vue-style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tpl/index.html',
    }),
    new VueLoaderPlugin(),
  ],
}
