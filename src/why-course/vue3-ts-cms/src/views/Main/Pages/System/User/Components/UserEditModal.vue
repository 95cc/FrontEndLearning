<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { storeToRefs } from 'pinia'
// ---
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'

const dialogVisible = ref(false)
const formData = reactive<any>({
	name: '',
	realname: '',
	password: '',
	cellphone: '',
	roleId: '',
	departmentId: ''
})
const isNewRef = ref(true)
const editData = ref()
const mainStore = useMainStore()
const systemStore = useSystemStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)

function setModalVisible(isNew: boolean = true, itemData?: any) {
	dialogVisible.value = true
	isNewRef.value = isNew
	if (!isNew && itemData) {
		// 编辑数据
		for (const key in formData) {
			formData[key] = itemData[key]
		}
		editData.value = itemData
	} else {
		// 新建数据
		for (const key in formData) {
			formData[key] = ''
		}
		editData.value = null
	}
}

function handleConfirmClick() {
	dialogVisible.value = false

	if (!isNewRef.value && editData.value) {
		// 编辑用户的数据
		systemStore.editUserDataAction(editData.value.id, formData)
	} else {
		// 创建新的用户
		systemStore.newUserDataAction(formData)
	}
}

defineExpose({ setModalVisible })
</script>

<template>
	<div class="wrapper-root">
		<el-dialog
			v-model="dialogVisible"
			:title="isNewRef ? '新建用户' : '编辑用户'"
			width="30%"
			center
		>
			<div class="form">
				<el-form :model="formData" label-width="80px" size="large">
					<el-form-item label="用户名" prop="name">
						<el-input v-model="formData.name" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item label="真实姓名" prop="realname">
						<el-input v-model="formData.realname" placeholder="请输入真实姓名" />
					</el-form-item>
					<el-form-item v-if="isNewRef" label="密码" prop="password">
						<el-input v-model="formData.password" placeholder="请输入密码" show-password />
					</el-form-item>
					<el-form-item label="手机号码" prop="cellphone">
						<el-input v-model="formData.cellphone" placeholder="请输入手机号码" />
					</el-form-item>
					<el-form-item label="选择角色" prop="roleId">
						<el-select v-model="formData.roleId" placeholder="请选择角色" style="width: 100%">
							<template v-for="item in entireRoles" :key="item.id">
								<el-option :label="item.name" :value="item.id" />
							</template>
						</el-select>
					</el-form-item>
					<el-form-item label="选择部门" prop="departmentId">
						<el-select v-model="formData.departmentId" placeholder="请选择部门" style="width: 100%">
							<template v-for="item in entireDepartments" :key="item.id">
								<el-option :label="item.name" :value="item.id" />
							</template>
						</el-select>
					</el-form-item>
				</el-form>
			</div>
			<template #footer>
				<div class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary" @click="handleConfirmClick"> 确定 </el-button>
				</div>
			</template>
		</el-dialog>
	</div>
</template>

<style lang="less" scoped>
.form {
	padding: 0 20px;
}
.dialog-footer {
	text-align: right;
}
</style>
