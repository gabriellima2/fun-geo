<script lang="ts" setup>
	import FilterByContinent from "../../components/FilterByContinent.vue";
	import SearchBar from "../../components/SearchBar.vue";
	import CountriesList from "./CountriesList.vue";

	import { countriesService } from "../../services/countries-service";
	import type { CountryDTO } from "../../dtos/country-dtos/country-dto";

	const getCountries = () => countriesService.getAll<CountryDTO[]>();
</script>

<template>
	<div>
		<section class="filters">
			<SearchBar :handleChange="(v) => {}" />
			<FilterByContinent :handleChange="(v) => {}" />
		</section>
		<CountriesList :service="getCountries" />
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
