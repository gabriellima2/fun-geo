<script lang="ts" setup>
	import { useCountries } from "./composables/useCountries";

	import SearchBar from "@/components/SearchBar.vue";
	import CountriesList from "./CountriesList.vue";
	import BaseLoading from "../BaseLoading.vue";
	import BaseSelect from "../BaseSelect.vue";
	import BaseError from "../BaseError.vue";

	import type { CountryDTO } from "@/dtos/country-dtos/country-dto";

	type CountriesProps = {
		service: () => Promise<CountryDTO[]>;
	};

	const props = defineProps<CountriesProps>();
	const { countries, error, isLoading, filterByRegion, handleSearch } =
		useCountries({
			service: props.service,
		});
</script>

<template>
	<div>
		<section class="filters">
			<SearchBar @search="handleSearch" />
			<BaseSelect
				v-model="filterByRegion.value"
				label="Filtrar por região"
				:options="filterByRegion.options"
			/>
		</section>
		<BaseLoading v-if="isLoading" />
		<BaseError v-else-if="error" :message="error" />
		<CountriesList
			v-else-if="countries"
			:countries="countries"
			:filter-by-region-value="filterByRegion.value"
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
