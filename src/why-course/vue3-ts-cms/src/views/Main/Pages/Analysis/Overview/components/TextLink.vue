<script lang="ts" setup>
interface IItem {
	title?: string
	desp?: string
}
interface IProps {
	textAttr: IItem[]
}
defineProps<IProps>()
</script>

<template>
	<div class="wrapper-root">
		<template v-for="(item, index) in textAttr" :key="index">
			<div class="item">
				<span class="title">{{ item.title }} : </span>
				<el-link type="primary">{{ item.desp }}</el-link>
			</div>
		</template>
	</div>
</template>

<style lang="less" scoped>
.wrapper-root {
	padding: 0 15px;
	margin-bottom: 40px;
	text-align: left;

	.title {
		position: relative;
		display: inline-block;
		margin-right: 20px;
	}

	.item {
		margin: 5px;
	}

	.title::before {
		position: absolute;
		content: '';
		top: 40%;
		left: -15px;
		width: 5px;
		height: 5px;
		background: black;
		border-radius: 100%;
	}
}
</style>
