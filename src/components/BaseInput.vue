<script setup lang="ts">
	import type { InputHTMLAttributes } from "vue";

	interface BaseInputProps extends InputHTMLAttributes {
		modelValue: string;
	}

	type BaseInputEmits = {
		(e: "update:modelValue", value: string): void;
	};

	const props = defineProps<BaseInputProps>();
	const emits = defineEmits<BaseInputEmits>();
</script>

<template>
	<input
		v-bind="$attrs"
		:value="props.modelValue"
		class="base-input"
		@input="
			emits('update:modelValue', ($event.target as HTMLInputElement).value)
		"
	/>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	.base-input {
		border-radius: 8px;
		border: none;
		outline: none;
		padding: 12px;
		font-size: 0.9rem;
		background-color: $util-color-900;

		&::placeholder {
			color: $util-color-300;
		}
	}
</style>
