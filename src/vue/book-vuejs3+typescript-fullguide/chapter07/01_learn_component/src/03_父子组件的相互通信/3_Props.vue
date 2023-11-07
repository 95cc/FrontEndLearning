<script>
// type支持类型: String/Number/Boolean/Array/Object/Date/Function/Symbol

export default {
  props: {
    // 1. 基础的类型检查
    propA: Number,
    // 2. 多个可能的类型
    propB: [String, Number],
    // 3. 必填的字符串
    propC: {
      type: String,
      required: true,
    },
    // 4. 带有默认值的数字
    propD: {
      type: Number,
      default: 100,
    },
    // 5. 带有默认值的对象
    propE: {
      type: Object,
      // 对象或数组default的默认值必须从一个工厂函数获取，保证每个组件实例的默认值来自不同的引用
      default() {
        return { message: 'hello' }
      },
    },
    // 6. 自定义验证函数
    propF: {
      validator(value) {
        return ['a', 'b', 'c'].includes(value)
      },
    },
    // 7. 具有默认值的函数
    propG: {
      type: Function,
      // 与对象或数组默认值不同，这不是一个工厂函数，而是一个用作默认值的函数
      default() {
        return 'Default function'
      },
    },

    // ------------------------------------------
    // 命名规范

    // 1. camelCase命名法（推荐）
    messageInfo: {
      type: String,
    },
    // 2. kebab-Case命名法（不推荐）
    'message-info1': {
      type: String,
    },
  },
}
</script>
