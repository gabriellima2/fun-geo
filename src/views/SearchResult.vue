<script setup lang="ts">
	import { computed } from "vue";
	import { useRoute } from "vue-router";

	import { useFetch } from "@/composables/useFetch";

	import CountriesOverview from "@/components/Countries/CountriesOverview.vue";
	import PageTitle from "@/components/PageTitle.vue";

	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	import { countriesService } from "@/services/countries-service";
	import type { CountryDTO } from "@/dtos/country-dtos";

	const { query } = useRoute();
	const { data, error, isLoading } = useFetch(() =>
		countriesService.getByName<CountryDTO[]>(query.q as string)
	);
	const queryResultQuantity = computed(() => {
		const quantity = data.value?.length || 0;
		return quantity !== 1 ? `${quantity} resultados` : `${quantity} resultado`;
	});
</script>

<template>
	<DefaultLayout>
		<PageTitle v-if="!isLoading"
			>{{ queryResultQuantity }} para '{{ query.q }}'</PageTitle
		>
		<CountriesOverview
			:countries="data"
			:is-loading="isLoading"
			:error="error"
		/>
	</DefaultLayout>
</template>
