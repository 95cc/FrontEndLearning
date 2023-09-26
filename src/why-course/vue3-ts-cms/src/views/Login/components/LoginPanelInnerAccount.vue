<script lang="ts" setup>
// ---
import { reactive } from 'vue'
// ---
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'

// 1.定义account数据
const account = reactive<IAccount>({
	name: localCache.getCache(CACHE_NAME) ?? '',
	password: localCache.getCache(CACHE_PASSWORD) ?? ''
})
</script>

<template>
	<div class="panel-account">
		<el-form>
			<el-form-item label="账号" porp="name">
				<el-input v-model="account.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" porp="name">
				<el-input v-model="account.password" show-password></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<style lang="less" scoped>
.panel-account {
}
</style>
