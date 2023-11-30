<template>
  <div>
    <h4>uuid: {{ $store.state.uuid }}</h4>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    onMounted(() => {
      const promise = store.dispatch('getUUIDAction')
      promise.then((res) => {
        console.log(res)
      })
    })

    return {}
  },
}
</script>
