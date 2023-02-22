<script setup lang="ts">
	import { ref } from "vue";
	import { PhMagnifyingGlass } from "phosphor-vue";

	import BaseInput from "./BaseInput.vue";
	import BaseButton from "./Buttons/BaseButton.vue";

	type SearchBarEmits = {
		(e: "search", value: string): void;
	};

	const emits = defineEmits<SearchBarEmits>();
	const searchValue = ref("");

	const emitSearchEvent = () => {
		const formattedSearchValue = searchValue.value.trim().toLowerCase();
		if (!formattedSearchValue) return;
		emits("search", searchValue.value);
	};
</script>

<template>
	<form class="search-bar">
		<label>
			<BaseInput
				v-bind="$attrs"
				v-model="searchValue"
				placeholder="Digite o nome do país..."
				@keydown.enter="emitSearchEvent"
			/>
		</label>
		<BaseButton
			type="submit"
			title="Pesquisar"
			class="search-bar__button"
			@click.prevent="emitSearchEvent"
		>
			<template #base-button-icon>
				<PhMagnifyingGlass size="24" color="#a4a4a4" />
			</template>
		</BaseButton>
	</form>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";
	.search-bar {
		@include center(row);
		@include field-default-styles();
		justify-content: space-between;
		gap: 16px;
		padding: 0px 0px 0px 0px;
	}
	.search-bar__button {
		height: 45px;
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}
</style>
