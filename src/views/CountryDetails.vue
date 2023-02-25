<script setup lang="ts">
	import { useRoute } from "vue-router";

	import CountriesInfo from "@/components/Countries/CountriesInfo.vue";
	import DefaultLayout from "@/layouts/DefaultLayout.vue";

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
	<DefaultLayout>
		<div class="country-details">
			<CountriesInfo :service="getByNameService" />
		</div>
	</DefaultLayout>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	.country-details {
		@include center(column);
		height: 100vh;
	}

	@media screen and (min-width: $md-screen) {
		.country-details {
			height: 88vh;
		}
	}
</style>
