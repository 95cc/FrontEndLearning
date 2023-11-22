<template>
  <div class="login">
    <button @click="loginClick">登录</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()

    const loginClick = () => {
      window.sessionStorage.setItem('token', 'coder')
      router.push('/home')
    }

    return {
      loginClick,
    }
  },
}
</script>
