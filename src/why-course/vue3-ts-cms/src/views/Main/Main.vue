<script lang="ts" setup>
import { ref } from 'vue'
// ---
import MainMenu from './components/MainMenu.vue'
import MainHeader from './components/MainHeader.vue'

const isFold = ref(false)

function handleFoldChanged(value: boolean) {
	isFold.value = value
}
</script>

<template>
	<div class="wrapper">
		<el-container class="main">
			<el-aside class="aside" :width="isFold ? '60px' : '210px'">
				<MainMenu :is-fold="isFold" />
			</el-aside>
			<el-container>
				<el-header height="50px">
					<MainHeader @fold-changed="handleFoldChanged" />
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
			transition: width 0.3s ease;

			scrollbar-width: none; /* firefox */
			-ms-overflow-style: none; /* IE 10+ */
			&::-webkit-scrollbar {
				display: none;
			}
		}
	}

	.content {
		background-color: #f0f2f5;
	}
}
</style>
