<script lang="jsx">
import HeloWordJSX from './HeloWordJSX.vue'

export default {
  data() {
    return {
      counter: 0,
    }
  },
  render() {
    // 1. 定义方法，这些方法也可以写到methods选项中
    const increment = () => this.counter++
    const decrement = () => this.counter--

    // 2. JSX语法，即允许在JavaScript中编写HTML元素
    return (
      <div class="app" style="border: 1px solid #ddd; margin: 8px">
        <h4>当前计数： {this.counter}</h4>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>

        <HeloWordJSX />
        <HeloWordJSX>
          {{
            default: () => {
              return <div>default插槽插入的内容</div>
            },
          }}
        </HeloWordJSX>
      </div>
    )
  },
}
</script>
