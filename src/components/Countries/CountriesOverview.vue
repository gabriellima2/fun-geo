<script lang="ts" setup>
	import { useFilterCountries } from "./composables/useFilterCountries";

	import CountriesOverviewList from "./CountriesOverviewList.vue";
	import SearchBar from "@/components/SearchBar.vue";
	import BaseLoading from "../BaseLoading.vue";
	import BaseSelect from "../BaseSelect.vue";
	import BaseError from "../BaseError.vue";

	import type { CountryDTO } from "@/dtos/country-dtos";

	type CountriesOverviewProps = {
		isLoading?: boolean;
		error?: string | null;
		countries: CountryDTO[] | null;
	};

	const props = defineProps<CountriesOverviewProps>();
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
		<BaseLoading v-if="props.isLoading" />
		<BaseError v-else-if="props.error" :message="props.error" />
		<CountriesOverviewList
			v-else-if="props.countries"
			:countries="props.countries"
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
