<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// ---
import useLoginStore from '@/store/other/login'
import { loadLocalRoutes } from '@/utils/MapMenus'

const route = useRoute()
const userMenus = useLoginStore()

loadLocalRoutes()
</script>

<template>
	<div class="w-header-crumb">
		<el-breadcrumb></el-breadcrumb>
	</div>
</template>

<style lang="less" scoped></style>
