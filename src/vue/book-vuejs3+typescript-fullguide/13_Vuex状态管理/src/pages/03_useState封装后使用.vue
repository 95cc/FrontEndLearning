<template>
  <div class="border">
    <h4>Home: {{ $store.state.counter }}</h4>
    <h4>Home: {{ counter }}</h4>
    <h4>Name: {{ name }}</h4>
    <h4>Age: {{ age }}</h4>
  </div>
</template>

<script>
import { useState } from '../hooks/index'

export default {
  setup() {
    return {
      ...useState(['counter']),
      ...useState({
        name: (state) => state.name,
        age: (state) => state.age,
      }),
    }
  },
}
</script>
