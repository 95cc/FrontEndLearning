<script lang="ts" setup>
import { ref } from 'vue'
// ---
import MainMenu from './components/MainMenu.vue'
import MainHeader from './components/MainHeader.vue'

const isFold = ref(false)
</script>

<template>
	<div class="wrapper">
		<el-container class="main">
			<el-aside class="aside" :width="isFold ? '60px' : '210px'">
				<MainMenu :is-fold="isFold" />
			</el-aside>
			<el-container>
				<el-header height="50px">
					<MainHeader />
				</el-header>
				<el-main class="content">
					<RouterView />
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style lang="less" scoped>
.wrapper {
	height: 100%;

	.main {
		height: 100%;
		.aside {
			background-color: orange;
		}
	}

	.content {
		background-color: #f0f2f5;
	}
}
</style>
