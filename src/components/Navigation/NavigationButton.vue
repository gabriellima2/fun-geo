<script lang="ts" setup>
	import { type ButtonHTMLAttributes, computed } from "vue";

	interface NavigationButtonProps extends ButtonHTMLAttributes {
		isOpen: boolean;
	}

	const props = defineProps<NavigationButtonProps>();
	const titleMessage = computed(() =>
		props.isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
	);
</script>

<template>
	<button
		v-bind="props"
		class="navigation-button"
		type="button"
		:title="titleMessage"
	>
		<i v-if="props.isOpen" class="navigation-button__icon"
			><PhX :size="20"
		/></i>
		<i v-else class="navigation-button__icon"><PhList :size="20" /></i>
	</button>
</template>

<style lang="scss" scoped>
	@import "../../styles/scss/main";
	.navigation-button {
		padding: 8px;
		cursor: pointer;
		border: none;
		background: none;
	}
	.navigation-button__icon {
		@include center(row);
	}
</style>
