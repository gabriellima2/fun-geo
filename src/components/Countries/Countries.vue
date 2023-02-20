<script lang="ts" setup>
	import { useFetch } from "@/composables/useFetch";

	import FilterByContinent from "@/components/FilterByContinent.vue";
	import SearchBar from "@/components/SearchBar.vue";
	import CountriesList from "./CountriesList.vue";
	import BaseLoading from "../BaseLoading.vue";
	import BaseError from "../BaseError.vue";

	import { countriesService } from "@/services/countries-service";
	import type { CountryDTO } from "@/dtos/country-dtos/country-dto";

	const { data, error, isLoading } = useFetch<CountryDTO[]>(
		countriesService.getAll
	);
</script>

<template>
	<div>
		<section class="filters">
			<SearchBar :handleChange="(v) => {}" />
			<FilterByContinent :handleChange="(v) => {}" />
		</section>
		<BaseLoading v-if="isLoading" />
		<BaseError v-else-if="error" :message="error" />
		<CountriesList v-else-if="data" :countries="data" />
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
