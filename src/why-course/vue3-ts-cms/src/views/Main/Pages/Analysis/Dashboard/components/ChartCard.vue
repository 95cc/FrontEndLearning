<script setup lang="ts">
interface IProps {
	header?: string
}

withDefaults(defineProps<IProps>(), {
	// 卡片的头部标题
	header: ''
})
</script>

<template>
	<div>
		<el-card :header="header">
			<slot></slot>
		</el-card>
	</div>
</template>

<style lang="less" scoped></style>
