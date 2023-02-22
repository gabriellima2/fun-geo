<script lang="ts" setup>
	import { ref } from "vue";
	import { useRouter } from "vue-router";

	import { useFetch } from "@/composables/useFetch";

	import BaseSelect, { type OptionProps } from "../BaseSelect.vue";
	import SearchBar from "@/components/SearchBar.vue";
	import CountriesList from "./CountriesList.vue";
	import BaseLoading from "../BaseLoading.vue";
	import BaseError from "../BaseError.vue";

	import type { CountryDTO } from "@/dtos/country-dtos/country-dto";

	type CountriesProps = {
		service: () => Promise<CountryDTO[]>;
	};

	const props = defineProps<CountriesProps>();

	const filterByRegionValue = ref("");
	const router = useRouter();
	const { data, error, isLoading } = useFetch<CountryDTO[]>(props.service);

	const filterByRegionOptions: OptionProps[] = [
		{ text: "Todos", value: "" },
		{ text: "África", value: "africa" },
		{ text: "América", value: "americas" },
		{ text: "Antártida", value: "antarctic" },
		{ text: "Asia", value: "asia" },
		{ text: "Europa", value: "europe" },
		{ text: "Oceania", value: "oceania" },
	];

	function handleSearch(value: string) {
		router.push({ path: "/resultados", query: { q: value } });
	}
</script>

<template>
	<div>
		<section class="filters">
			<SearchBar @search="handleSearch" />
			<BaseSelect
				v-model="filterByRegionValue"
				label="Filtrar por região"
				:options="filterByRegionOptions"
			/>
		</section>
		<BaseLoading v-if="isLoading" />
		<BaseError v-else-if="error" :message="error" />
		<CountriesList
			v-else-if="data"
			:countries="data"
			:filter-by-region-value="filterByRegionValue"
		/>
	</div>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.filters {
		@include center(row);
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
		padding: 48px 0px;
	}
</style>
