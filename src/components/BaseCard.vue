<script setup lang="ts">
	import { HTMLAttributes } from "vue";

	interface BaseCardProps extends HTMLAttributes {
		variants: "with-background" | "only-border";
	}
	const props = defineProps<BaseCardProps>();
</script>

<template>
	<section
		class="base-card"
		:class="
			props.variants === 'with-background'
				? 'base-card--with-background'
				: 'base-card--only-border'
		"
		v-bind="props"
	>
		<slot></slot>
	</section>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	$border-default-style: 1px solid #242424;
	$border-radius: 8px;

	.base-card {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.base-card--only-border {
		border: $border-default-style;
	}

	.base-card--with-background {
		border: $border-default-style;
		background-color: $util-color-900;
	}
</style>
