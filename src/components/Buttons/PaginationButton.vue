<script setup lang="ts">
	import { PhArrowLeft, PhArrowRight } from "phosphor-vue";
	import { type ButtonHTMLAttributes, computed } from "vue";

	import BaseButton from "./BaseButton.vue";

	interface NextPageButtonProps extends ButtonHTMLAttributes {
		variant: "next" | "previous";
	}

	const NEXT_VARIANT_MESSAGE = "Ir para a próxima página";
	const PREVIOUS_VARIANT_MESSAGE = "Ir para a página anterior";

	const props = defineProps<NextPageButtonProps>();
	const isNextVariant = computed(() => props.variant === "next");
	const titleMessage = computed(() => {
		if (props.disabled) return "";
		return isNextVariant.value
			? NEXT_VARIANT_MESSAGE
			: PREVIOUS_VARIANT_MESSAGE;
	});
</script>

<template>
	<BaseButton
		v-bind="$attrs"
		:aria-disabled="props.disabled"
		:title="titleMessage"
		class="pagination-button"
	>
		<template #base-button-icon>
			<PhArrowRight v-if="isNextVariant" :size="24" color="#f4f4f4" />
			<PhArrowLeft v-else :size="24" color="#f4f4f4" />
		</template>
	</BaseButton>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.pagination-button:disabled {
		pointer-events: none;
		opacity: 0.2;
	}
</style>
