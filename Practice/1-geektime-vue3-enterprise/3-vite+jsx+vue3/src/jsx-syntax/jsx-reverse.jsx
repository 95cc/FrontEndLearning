import { defineComponent, ref } from 'vue'
import Module01 from '../Module/module1.vue'
import Module02 from '../Module/module2.vue'
import Module03 from '../Module/module3.vue'
import Module04 from '../Module/module4.vue'

const JSXReverse = defineComponent({
  setup() {
    const isReverse = ref(false)
    const onClick = () => {
      isReverse.value = !isReverse.value
    }
    return {
      isReverse,
      onClick,
    }
  },

  render(ctx) {
    const { isReverse, onClick } = ctx
    const mods = [<Module01 />, <Module02 />, <Module03 />, <Module04 />]
    isReverse === true && mods.reverse()
    return (
      <div class="app">
        <h3>JSX-Reverse</h3>
        {mods.map((mod) => {
          return mod
        })}
        <button class="btn" onClick={onClick}>
          转换顺序: {`${isReverse}`}
        </button>
      </div>
    )
  },
})

export default JSXReverse
