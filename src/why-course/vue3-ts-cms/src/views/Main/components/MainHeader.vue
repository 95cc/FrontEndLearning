<script lang="ts" setup>
import { ref } from 'vue'
// ---
import MainHeaderInfo from './MainHeaderInfo.vue'
import MainHeaderCrumb from './MainHeaderCrumb.vue'

const isFold = ref(false)
const emit = defineEmits(['foldChanged'])

function foldIconClick() {
	isFold.value = !isFold.value

	emit('foldChanged', isFold.value)
}
</script>

<template>
	<div class="header">
		<el-icon size="24px" color="rgba(0,0,0,0.85)" @click="foldIconClick">
			<component :is="isFold ? 'Expand' : 'Fold'"></component>
		</el-icon>

		<div class="w-right-content">
			<MainHeaderCrumb />
			<MainHeaderInfo />
		</div>
	</div>
</template>

<style lang="less" scoped>
.header {
	display: flex;
	align-items: center;
	flex: 1;
	height: 100%;

	.w-right-content {
		display: flex;
		flex: 1;
		justify-content: space-between;
		align-items: center;
		padding: 0 18px;
	}
}
</style>
