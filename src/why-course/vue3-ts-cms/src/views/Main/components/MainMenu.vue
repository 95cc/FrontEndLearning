<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// ---

defineProps({
	isFold: {
		type: Boolean,
		default: false
	}
})
</script>

<template>
	<div class="wrapper-main-menu">
		<div class="logo">
			<img class="img" src="@/assets/images/logo.svg" alt="logo" />
			<h2 v-show="!isFold" class="title">后台管理系统</h2>
		</div>
	</div>
</template>

<style lang="less" scoped>
.wrapper-main-menu {
	height: 100%;
	background-color: #001529;

	.logo {
		display: flex;
		height: 29px;
		padding: 12px 10px 8px 10px;
		flex-direction: row;
		align-items: center;
		overflow: hidden;

		.img {
			height: 100%;
			margin: 0 10px;
		}

		.title {
			font-size: 16px;
			font-weight: 700;
			color: white;
			white-space: nowrap;
		}
	}
}
</style>
