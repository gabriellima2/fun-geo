<script setup lang="ts">
	import type { SelectHTMLAttributes } from "vue";

	export type OptionProps = {
		value: string;
		text: string;
	};

	interface BaseSelectProps extends SelectHTMLAttributes {
		options: OptionProps[];
		label: string;
	}

	type BaseSelectEmits = {
		(e: "update:modelValue", value: string): void;
	};

	const props = defineProps<BaseSelectProps>();
	const emits = defineEmits<BaseSelectEmits>();
</script>

<template>
	<div>
		<select
			v-bind="$attrs"
			class="base-select"
			:title="props.label"
			@change="($event) =>
				emits('update:modelValue', ($event.target as HTMLInputElement).value)
			"
		>
			<option selected disabled value="none">{{ props.label }}</option>
			<option
				v-for="option in props.options"
				:key="option.value"
				:value="option.value"
			>
				{{ option.text }}
			</option>
		</select>
	</div>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	.base-select {
		@include field-default-styles();

		/* Remove default arrow */
		-moz-appearance: none !important;
		-webkit-appearance: none !important;
		appearance: none !important;

		border: none;
		width: fit-content;
		padding-right: 36px;

		/* Add new arrow */
		background-image: url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 10.127L12 18.127L20 10.127H4Z" fill="%23f4f4f4"/></svg>');
		background-repeat: no-repeat;
		background-position-y: center;
		background-position-x: 96%;
	}
</style>
