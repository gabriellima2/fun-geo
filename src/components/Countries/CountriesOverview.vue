<script lang="ts" setup>
	import { useFilterCountries } from "./composables/useFilterCountries";
	import { useFetch } from "@/composables/useFetch";

	import CountriesOverviewList from "./CountriesOverviewList.vue";
	import SearchBar from "@/components/SearchBar.vue";
	import BaseLoading from "../BaseLoading.vue";
	import BaseSelect from "../BaseSelect.vue";
	import BaseError from "../BaseError.vue";

	import type { CountryDTO } from "@/dtos/country-dtos/country-dto";

	type CountriesOverviewProps = {
		service: () => Promise<CountryDTO[]>;
	};

	const props = defineProps<CountriesOverviewProps>();
	const { data, error, isLoading } = useFetch<CountryDTO[]>(props.service);
	const { filter, handleSearch } = useFilterCountries();
</script>

<template>
	<div>
		<section class="filters">
			<SearchBar @search="handleSearch" />
			<BaseSelect
				v-model="filter.value"
				label="Filtrar por região"
				:options="filter.options"
			/>
		</section>
		<BaseLoading v-if="isLoading" />
		<BaseError v-else-if="error" :message="error" />
		<CountriesOverviewList
			v-else-if="data"
			:countries="data"
			:filter-by-region-value="filter.value"
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
