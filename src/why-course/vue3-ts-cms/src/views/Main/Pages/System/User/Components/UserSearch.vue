<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

const emit = defineEmits(['queryClick', 'resetClick'])

// 定义form的数据
const searchForm = reactive({
	name: '',
	realname: '',
	cellphone: '',
	enable: '',
	createAt: ''
})

// 重置操作
const formRef = ref<InstanceType<typeof ElForm>>()
function handleResetClick() {
	// 1.form中的数据全部重置
	formRef.value?.resetFields()

	// 2.将事件出去, content内部重新发送网络请求
	emit('resetClick')
}

function handleQueryClick() {
	emit('queryClick', searchForm)
}
</script>

<template>
	<div class="wrapper-root">
		<el-form :model="searchForm" ref="formRef" label-width="80px">
			<el-row :gutter="20">
				<el-col :span="8">
					<el-form-item label="用户名" prop="name">
						<el-input v-model="searchForm.name" placeholder="请输入查询的用户名"></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="真实姓名" prop="realname">
						<el-input v-model="searchForm.realname" placeholder="请输入查询的真实姓名"></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="手机号码" prop="cellphone">
						<el-input v-model="searchForm.cellphone" placeholder="请输入查询的手机号码"></el-input>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="状态" prop="enable">
						<el-select
							v-model="searchForm.enable"
							placeholder="请选择查询的状态"
							style="width: 100%"
						>
							<el-option label="启用"></el-option>
							<el-option label="禁用"></el-option>
						</el-select>
					</el-form-item>
				</el-col>

				<el-col :span="8">
					<el-form-item label="创建时间" prop="createAt">
						<el-date-picker
							v-model="searchForm.createAt"
							type="daterange"
							range-sperator="-"
							start-placeholder="开始时间"
							end-placeholder="结束时间"
						></el-date-picker>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>

		<div class="btns">
			<el-button icon="Refresh" @click="handleResetClick">重置</el-button>
			<el-button icon="Search" type="primary" @click="handleQueryClick">查询</el-button>
		</div>
	</div>
</template>

<style lang="less" scoped>
.wrapper-root {
	background-color: #fff;
	padding: 20px;

	.el-form-item {
		margin-bottom: 0;
		padding: 20px 30px;
	}

	.btns {
		text-align: right;

		.el-button {
			height: 36px;
		}
	}
}
</style>
