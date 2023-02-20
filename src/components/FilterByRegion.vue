<script setup lang="ts">
	import { ref, watch } from "vue";
	import BaseSelect, { type OptionProps } from "./BaseSelect.vue";

	type FilterByRegionEmits = {
		(e: "filter", selectedValue: string): void;
	};

	const emits = defineEmits<FilterByRegionEmits>();
	const selectedValue = ref("");

	const options: OptionProps[] = [
		{ text: "Todos", value: "" },
		{ text: "África", value: "africa" },
		{ text: "América", value: "america" },
		{ text: "Asia", value: "asia" },
		{ text: "Europa", value: "europe" },
		{ text: "Oceania", value: "oceania" },
	];

	watch(selectedValue, () => emits("filter", selectedValue.value));
</script>

<template>
	<BaseSelect
		v-model="selectedValue"
		label="Filtrar por região"
		:options="options"
	/>
</template>

<style scoped></style>
