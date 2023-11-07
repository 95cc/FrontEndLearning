<script>
import MainBanner from './MainBanner.vue'
import MainProductList from './MainProductList.vue'

export default {
  components: {
    MainBanner,
    MainProductList,
  },
}
</script>

<template>
  <div class="main">
    <MainBanner />
    <MainProductList />
  </div>
</template>
