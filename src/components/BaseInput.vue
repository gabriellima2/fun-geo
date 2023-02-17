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
		@include field-default-styles();

		&::placeholder {
			color: $util-color-300;
		}
	}
</style>
