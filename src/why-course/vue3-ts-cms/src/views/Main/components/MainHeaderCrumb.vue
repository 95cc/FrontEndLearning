<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// ---
import useLoginStore from '@/store/login/login'
import { mapPathToBreadcrumbs } from '@/utils/MapMenus'

const route = useRoute()
const userMenus = useLoginStore().userMenus
const breadcrumbs = computed(() => {
	return mapPathToBreadcrumbs(route.path, userMenus)
})
</script>

<template>
	<div class="w-header-crumb">
		<el-breadcrumb separator-icon="CaretRight">
			<template v-for="item in breadcrumbs" :key="item.name">
				<el-breadcrumb-item :to="item.path">{{ item.name }} </el-breadcrumb-item>
			</template>
		</el-breadcrumb>
	</div>
</template>

<style lang="less" scoped></style>
