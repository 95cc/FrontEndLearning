// 定义一个Mixin混合对象，将组件公用的代码逻辑抽取到demoMixin中
export const demoMixin = {
  data() {
    return {
      message: 'mixin: hello world',
    }
  },
  methods: {
    foo() {
      console.log('mixin: demo mixin foo')
    },
  },
  created() {
    console.log('执行了 demo mixin created')
  },
}
