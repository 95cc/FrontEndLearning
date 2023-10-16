<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
// ---
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import useLoginStore from '@/store/login/login'

const CACHE_NAME = 'name'
const CACHE_PASSWORD = 'password'
const loginStore = useLoginStore()
const ruleFormRef = ref<FormInstance>()

// 1.定义account数据
const accountRuleForm = reactive<IAccount>({
	name: localCache.getCache(CACHE_NAME) ?? '',
	password: localCache.getCache(CACHE_PASSWORD) ?? ''
})

// 2.定义校验规则
const accountRules = reactive<FormRules<IAccount>>({
	name: [
		{ required: true, message: '必须输入帐号信息~', trigger: 'blur' },
		{
			pattern: /^[a-z0-9]{6,20}$/,
			message: '必须是6~20数字或字母组成~',
			trigger: 'blur'
		}
	],
	password: [
		{ required: true, message: '必须输入密码信息~', trigger: 'blur' },
		{
			pattern: /^[a-z0-9]{3,}$/,
			message: '必须是3位以上数字或字母组成',
			trigger: 'blur'
		}
	]
})

function doLogin(isRemPwd: boolean) {
	ruleFormRef.value?.validate((valid) => {
		if (!valid) {
			ElMessage.error('Oops, 请您输入正确的格式后再操作~~.')
			return false
		}

		const name = accountRuleForm.name
		const password = accountRuleForm.password

		loginStore
			.loginAccountAction({ name, password })
			.then(() => {
				if (isRemPwd) {
					localCache.setCache(CACHE_NAME, name)
					localCache.setCache(CACHE_PASSWORD, password)
				} else {
					localCache.rmCache(CACHE_NAME)
					localCache.rmCache(CACHE_PASSWORD)
				}
			})
			.catch(() => {
				ElMessage.error('Oops, 登录失败了.')
			})
	})
}

defineExpose({
	doLogin
})
</script>

<template>
	<div>
		<el-form ref="ruleFormRef" :model="accountRuleForm" :rules="accountRules">
			<el-form-item label="账号" prop="name">
				<el-input v-model="accountRuleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input v-model="accountRuleForm.password" show-password></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<style lang="less" scoped>
.panel-account {
}
</style>
