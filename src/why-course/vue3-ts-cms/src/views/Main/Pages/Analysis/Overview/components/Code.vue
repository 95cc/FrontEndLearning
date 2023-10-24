<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/base16/gruvbox-dark-hard.css'

interface IProps {
	language: string
	code: string
}
const props = withDefaults(defineProps<IProps>(), {
	language: 'html',
	code: ''
})

const highlightedCode = ref<string>('')
watchEffect(() => {
	highlightedCode.value = hljs.highlight(props.code, {
		language: props.language
	}).value
})
</script>

<template>
	<div class="overview-code">
		<pre>
      <code class="hljs" v-html="highlightedCode" />
    </pre>
	</div>
</template>

<style lang="less">
.overview-code {
	.bg {
		padding: 10px;
		text-align: left;
		// background: #f0f0f0;
	}
}
</style>
