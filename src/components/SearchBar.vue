<script setup lang="ts">
	import { PhMagnifyingGlass } from "phosphor-vue";
	import BaseInput from "./BaseInput.vue";

	type SearchBarProps = {
		modelValue: string;
	};

	const props = defineProps<SearchBarProps>();
</script>

<template>
	<div class="search-bar">
		<label>
			<BaseInput
				:model-value="props.modelValue"
				placeholder="Digite o nome do país..."
			/>
		</label>
		<i class="search-bar__icon"
			><PhMagnifyingGlass size="24" color="#a4a4a4"
		/></i>
	</div>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.search-bar {
		@include center(row);
		justify-content: space-between;
		gap: 16px;
		padding-right: 12px;
		border-radius: 8px;
		background-color: $util-color-900;
	}
	.search-bar__icon {
		@include center(row);
	}
</style>
