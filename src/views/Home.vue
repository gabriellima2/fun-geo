<script lang="ts" setup>
	import CountryList from "../components/CountryList/CountryList.vue";
	import FilterByContinent from "../components/FilterByContinent.vue";
	import SearchBar from "../components/SearchBar.vue";
	import { CountryDTO } from "../dtos/country-dtos/country-dto";

	import DefaultLayout from "../layouts/DefaultLayout.vue";
	import { countryService } from "../services/country-service";

	function getCountries() {
		return countryService.getAll<CountryDTO[]>();
	}
</script>

<template>
	<DefaultLayout>
		<div class="home-page">
			<h1 class="home-page__title">Explore os países do mundo!</h1>
			<section class="filters">
				<SearchBar :handleChange="(v) => {}" />
				<FilterByContinent :handleChange="(v) => {}" />
			</section>
			<section class="countries">
				<CountryList :service="getCountries" />
			</section>
		</div>
	</DefaultLayout>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	.home-page {
		width: 100%;
	}
	.home-page__title {
		max-width: 290px;
		padding-top: 32px;
	}

	.filters {
		@include center(row);
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
		padding: 48px 0px;
	}
	.coutries {
	}
</style>
