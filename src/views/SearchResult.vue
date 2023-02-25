<script setup lang="ts">
	import { useRoute } from "vue-router";

	import { useFetch } from "@/composables/useFetch";

	import CountriesOverview from "@/components/Countries/CountriesOverview.vue";
	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	import { countriesService } from "@/services/countries-service";
	import type { CountryDTO } from "@/dtos/country-dtos";

	const { query } = useRoute();
	const { data, error, isLoading } = useFetch(() =>
		countriesService.getByName<CountryDTO[]>(query.q as string)
	);
</script>

<template>
	<DefaultLayout>
		<CountriesOverview
			:countries="data"
			:is-loading="isLoading"
			:error="error"
		/>
	</DefaultLayout>
</template>

<style scoped></style>
