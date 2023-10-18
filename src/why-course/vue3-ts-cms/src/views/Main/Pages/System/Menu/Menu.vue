<script lang="ts" setup>
import PageCommonContent from '@/views/Main/components/PageCommonContent.vue'
import contentConfig from './config/content.config'
</script>

<template>
	<div class="wrapper-root">
		<PageCommonContent :content-config="contentConfig" />
	</div>
</template>

<style lang="less" scoped>
.wrapper-root {
}
</style>
