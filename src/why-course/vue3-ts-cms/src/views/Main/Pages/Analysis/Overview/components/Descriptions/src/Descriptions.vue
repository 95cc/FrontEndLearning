<script lang="ts" setup>
interface ITableItem {
	name: string
	description: string
}
interface IProps {
	title?: string
	column?: number
	tableDatas?: ITableItem[]
}
defineProps<IProps>()
</script>

<template>
	<div class="wrapper-root">
		<el-descriptions class="margin-top" :title="title" :column="column" border>
			<template v-for="(itemData, index) in tableDatas" :key="index">
				<el-descriptions-item>
					<template #label> {{ itemData.name }} </template>
					<el-tag size="small">{{ itemData.description }}</el-tag>
				</el-descriptions-item>
			</template>
		</el-descriptions>
	</div>
</template>

<style lang="less" scoped>
.wrapper-root {
	margin-bottom: 20px;
}
</style>
