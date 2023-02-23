<script setup lang="ts">
	import Country from "@/components/Country/Country.vue";
	import { CountryDetailsDTO } from "@/dtos/country-dtos";
	import { countriesService } from "@/services/countries-service";
	import { useRoute } from "vue-router";

	const fields =
		"name,flags,region,translations,currencies,capital,continents,languages,area,population";

	const { params } = useRoute();
	const getByNameService = () =>
		countriesService.getByName<CountryDetailsDTO[]>(
			params.id as string,
			fields
		);
</script>

<template>
	<Country :service="getByNameService" />
</template>

<style scoped></style>
