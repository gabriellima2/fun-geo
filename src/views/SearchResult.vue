<script setup lang="ts">
	import { useRoute } from "vue-router";

	import CountriesOverview from "@/components/Countries/CountriesOverview.vue";
	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	import { countriesService } from "@/services/countries-service";
	import type { CountryDTO } from "@/dtos/country-dtos";

	const { query } = useRoute();
	const getByNameService = () =>
		countriesService.getByName<CountryDTO[]>(query.q as string);
</script>

<template>
	<DefaultLayout>
		<CountriesOverview :service="getByNameService" />
	</DefaultLayout>
</template>

<style scoped></style>
