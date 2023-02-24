<script setup lang="ts">
	import { HTMLAttributes } from "vue";

	interface BaseCardProps extends HTMLAttributes {}
	const props = defineProps<BaseCardProps>();
</script>

<template>
	<article class="base-card" v-bind="props">
		<header class="base-card__header">
			<slot name="base-card-header"></slot>
		</header>
		<section class="base-card__body">
			<slot name="base-card-body"></slot>
		</section>
	</article>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	$border-default-style: 1px solid #242424;
	$border-radius: 8px;

	.base-card {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	}
	.base-card__header {
		border-radius: $border-radius;
		border: $border-default-style;
		padding: 8px;
	}

	.base-card__body {
		padding: 8px;
		flex: 1;
		border-radius: $border-radius;
		border: $border-default-style;
		background-color: $util-color-900;
	}
</style>
