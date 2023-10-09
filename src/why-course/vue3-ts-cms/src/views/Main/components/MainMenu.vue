<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// ---
import useLoginStore from '@/store/other/login'

defineProps({
	isFold: {
		type: Boolean,
		default: false
	}
})

const loginStore = useLoginStore()
const route = useRoute()
const router = useRouter()

const userMenus = loginStore.userMenus

function handleItemClick(item: any) {
	const url = item.url
	router.push(url)
}
</script>

<template>
	<div class="main-menu">
		<div class="logo">
			<img class="img" src="@/assets/images/logo.svg" alt="logo" />
			<h2 v-show="!isFold" class="title">后台管理系统</h2>
		</div>

		<div class="menu">
			<el-menu>
				<template v-for="item in userMenus" :key="item.id">
					<el-sub-menu :index="String(item.id)">
						<template #title>
							<el-icon>
								<component :is="item.icon.split('-icon-')[1]"></component>
							</el-icon>
							<span>{{ item.name }}</span>
						</template>

						<template v-for="subItem in item.children" :key="subItem.id">
							<el-menu-item :index="String(subItem.id)" @click="handleItemClick(subItem)">
								{{ subItem.name }}
							</el-menu-item>
						</template>
					</el-sub-menu>
				</template>
			</el-menu>
		</div>
	</div>
</template>

<style lang="less" scoped>
.main-menu {
	height: 100%;
	background-color: #001529;

	.logo {
		display: flex;
		height: 29px;
		padding: 12px 10px 8px 10px;
		flex-direction: row;
		align-items: center;
		overflow: hidden;

		.img {
			height: 100%;
			margin: 0 10px;
		}

		.title {
			font-size: 16px;
			font-weight: 700;
			color: white;
			white-space: nowrap;
		}
	}
}

.el-menu {
	border-right: none;
	user-select: none;

	.el-sub-menu {
		.el-menu-item {
			padding-left: 50px !important;
		}
	}
}
</style>
