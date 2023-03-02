<script setup lang="ts">
	import type { ButtonHTMLAttributes } from "vue";

	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	interface BaseButtonProps extends ButtonHTMLAttributes {}
	const props = defineProps<BaseButtonProps>();
</script>

<template>
	<button type="button" class="base-button" v-bind="props">
		<slot name="base-button-text"></slot>
		<i class="base-button__icon">
			<slot name="base-button-icon"></slot>
		</i>
	</button>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.base-button {
		@include center(row);
		padding: 8px;
		background: none;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s ease;

		&:hover,
		&:focus {
			background-color: #f2f2f21d;
		}
	}
	.base-button__icon {
		@include center(row);
	}
</style>
