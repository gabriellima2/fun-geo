<script setup lang="ts">
	import { useRoute } from "vue-router";

	import CountriesInfo from "@/components/Countries/CountriesInfo.vue";

	import { countriesService } from "@/services/countries-service";
	import type { CountryDetailsDTO } from "@/dtos/country-dtos";

	const fields =
		"name,flags,region,translations,currencies,capital,continents,area,population";

	const { params } = useRoute();
	const getByNameService = () =>
		countriesService.getByName<CountryDetailsDTO[]>(
			params.id as string,
			fields
		);
</script>

<template>
	<CountriesInfo :service="getByNameService" />
</template>

<style scoped></style>
