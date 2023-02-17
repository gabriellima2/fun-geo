<script setup lang="ts">
	import { ref, watch } from "vue";
	import BaseSelect, { OptionProps } from "./BaseSelect.vue";

	type FilterByContinentProps = {
		handleChange: (selectedContinent: string) => void;
	};

	const props = defineProps<FilterByContinentProps>();
	const selectedContinent = ref("");

	const options: OptionProps[] = [
		{ text: "Todos", value: "" },
		{ text: "África", value: "africa" },
		{ text: "América", value: "america" },
		{ text: "Asia", value: "asia" },
		{ text: "Europa", value: "europe" },
		{ text: "Oceania", value: "oceania" },
	];

	watch(selectedContinent, () => props.handleChange(selectedContinent.value));
</script>

<template>
	<BaseSelect
		v-model="selectedContinent"
		label="Filtrar por continente"
		:options="options"
	/>
</template>

<style scoped></style>
