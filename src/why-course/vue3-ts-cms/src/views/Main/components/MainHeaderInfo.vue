<script lang="ts" setup>
import { useRouter } from 'vue-router'
// ---
import GlobalContants from '@/global/GlobalContants'
import { localCache } from '@/utils/cache'
import useLoginStore from '@/store/login/login'

const router = useRouter()
const loginStore = useLoginStore()

function exitClick() {
	localCache.rmCache(GlobalContants.LOGIN_TOKEN)

	router.push('/login')
}
</script>

<template>
	<div class="w-header-info">
		<div class="operation">
			<span>
				<el-icon><Message /></el-icon>
			</span>
			<span>
				<span class="dot"></span>
				<el-icon><ChatDotRound /></el-icon>
			</span>
			<span>
				<el-icon><Search /></el-icon>
			</span>
		</div>

		<div class="info">
			<el-dropdown>
				<span class="user-info">
					<el-avatar
						:size="30"
						src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
					/>
					<span class="name">{{ loginStore.userInfo.name }}</span>
				</span>

				<template #dropdown>
					<el-dropdown-menu>
						<el-dropdown-item>
							<el-icon><InfoFilled /></el-icon>
							<span>个人信息</span>
						</el-dropdown-item>
						<el-dropdown-item>
							<el-icon><Unlock /></el-icon>
							<span>修改密码</span>
						</el-dropdown-item>
						<el-dropdown-item divided @click="exitClick">
							<el-icon><CircleClose /></el-icon>
							<span>退出系统</span>
						</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<style lang="less" scoped>
.w-header-info {
	display: flex;
	align-items: center;

	.operation {
		display: inline-flex;
		margin-right: 20px;

		span {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 40px;
			height: 35px;

			&:hover {
				background-color: #f2f2f2;
			}

			.el-icon {
				font-size: 20px;
			}

			.dot {
				position: absolute;
				top: 3px;
				right: 3px;
				z-index: 10;
				width: 6px;
				height: 6px;
				background-color: red;
				border-radius: 100%;
			}
		}
	}

	.info {
		:global(.el-dropdown-menu__item) {
			line-height: 36px !important;
			padding: 6px 22px;
		}

		.user-info {
			display: flex;
			align-items: center;
			cursor: pointer;
			outline: none;

			.name {
				margin-left: 5px;
			}
		}
	}
}
</style>
