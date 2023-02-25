<script setup lang="ts">
	import { HTMLAttributes } from "vue";

	interface PageTitleProps extends HTMLAttributes {}

	const props = defineProps<PageTitleProps>();
</script>

<template>
	<h1 v-bind="props" class="page-title"><slot></slot></h1>
</template>

<style scoped lang="scss">
	.page-title {
		max-width: 290px;
		padding-top: 32px;
	}
</style>
