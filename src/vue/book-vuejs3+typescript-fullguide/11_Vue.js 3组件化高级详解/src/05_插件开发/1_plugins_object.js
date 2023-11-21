// 必须包含一个install函数
export default {
  install(app) {
    // 插件的作用是为App实例添加一个全局属性$name
    app.config.globalProperties.$name = 'codercc'
  },
}
