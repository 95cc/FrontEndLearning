import dayjs from 'dayjs'

export default function (app) {
  app.directive('format-time', {
    created(el, bindings) {
      // 默认时间格式
      bindings.formatString = 'YYYY-MM-DD HH:mm:ss'
      if (bindings.value) {
        bindings.formatString = bindings.value
      }
    },
    mounted(el, bindings) {
      const textContent = el.textContent
      let timestamp = parseInt(textContent)
      if (textContent.length === 10) {
        // 将秒转换为毫秒
        timestamp = timestamp * 1000
      }
      // 借用dayjs库，将timestamp时间戳转换为formatString指定的格式
      el.textContent = dayjs(timestamp).format(bindings.formatString)
    },
  })
}
