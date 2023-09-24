<script setup lang="ts"></script>

<template>
	<div class="app">
		<div>hello</div>
		<RouterLink to="/login">登录</RouterLink>
		<RouterLink to="/main">主要</RouterLink>
		<RouterView></RouterView>
		<el-icon :size="20">
			<Edit />
		</el-icon>
	</div>
</template>

<style scoped>
.app {
	height: 100vh;
}
</style>
