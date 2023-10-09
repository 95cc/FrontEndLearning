<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue'
import { ref, watch } from 'vue'
import LoginPanelInnerAccount from './LoginPanelInnerAccount.vue'
import LoginPanelInnerPhone from './LoginPanelInnerPhone.vue'
import { localCache } from '@/utils/cache'

const activeName = ref('account')
// ⚠️⚠️⚠️ <InstanceType<typeof LoginPanelInnerAccount>>
const accountPanelRef = ref<InstanceType<typeof LoginPanelInnerAccount>>()
const isRemPwd = ref<boolean>(localCache.getCache('isRemPwd') ?? false)
watch(isRemPwd, (newValue) => {
	localCache.setCache('isRemPwd', newValue)
})

function loginBtnClick() {
	if (activeName.value == 'account') {
		accountPanelRef.value?.doLogin(isRemPwd.value)
	}
}
</script>

<template>
	<div class="login-panel">
		<h1 class="title">后台管理系统</h1>
		<el-tabs class="tabs" v-model="activeName" type="border-card" stretch>
			<el-tab-pane name="account">
				<template #label>
					<div class="tab">
						<el-icon><UserFilled /></el-icon>
						<span class="text">账号登录</span>
					</div>
				</template>

				<LoginPanelInnerAccount ref="accountPanelRef" />
			</el-tab-pane>
			<el-tab-pane name="name">
				<template #label>
					<div class="tab">
						<el-icon><Cellphone /></el-icon>
						<span class="text">手机登录</span>
					</div>
				</template>

				<LoginPanelInnerPhone />
			</el-tab-pane>
		</el-tabs>
		<div class="controls">
			<el-checkbox v-model="isRemPwd" label="记住密码" size="large"></el-checkbox>
			<el-link>忘记密码</el-link>
		</div>
		<el-button class="login-btn" type="primary" size="large" @click="loginBtnClick"
			>立即登录</el-button
		>
	</div>
</template>

<style lang="less" scoped>
.login-panel {
	width: 330px;
	margin-bottom: 150px;

	.title {
		text-align: center;
	}

	.tabs {
		margin-top: 10px;
		.tab {
			display: flex;
			flex: 1;
			justify-content: center;
			align-items: center;

			.text {
				margin-left: 5px;
			}
		}
	}
	.controls {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		margin-top: 12px;
	}
	.login-btn {
		margin-top: 10px;
		width: 100%;
		// --el-button-size: 50px;
	}
}
</style>
