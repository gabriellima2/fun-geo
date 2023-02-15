<script lang="ts" setup>
	import { computed } from "vue";

	type NavigationButtonProps = {
		isOpen: boolean;
		handleClick: () => void;
	};

	const props = defineProps<NavigationButtonProps>();
	const titleMessage = computed(() =>
		props.isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
	);
</script>

<template>
	<button
		class="navigation-button"
		@click="props.handleClick"
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
