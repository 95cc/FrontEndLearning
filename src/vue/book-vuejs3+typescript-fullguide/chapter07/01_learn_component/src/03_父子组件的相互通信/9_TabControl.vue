<script>
export default {
  emits: ['titleClick'],
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      curIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.curIndex = index
      this.$emit('titleClick', index)
    },
  },
}
</script>

<template>
  <div class="tab-control">
    <div
      v-for="(title, index) in titles"
      class="tab-control-item"
      :class="{
        active: curIndex == index,
      }"
      :key="title"
      @click="itemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<style scoped>
.tab-control {
  display: flex;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item.active {
  color: red;
}
.tab-control-item.active span {
  border-bottom: 3px solid red;
  padding: 5px 10px;
}
</style>
