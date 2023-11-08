<script>
import emitter from './eventbus'

export default {
  created() {
    emitter.on('why', (info) => {
      console.log('why: ', info)
    })

    emitter.on('kobe', (info) => {
      console.log('kobe', info)
    })

    emitter.on('*', (type, info) => {
      console.log('* listener: ', type, info)
    })
  },
}
</script>

<template>
  <div class="home-content">HomeContent</div>
</template>
