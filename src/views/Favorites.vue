<script setup lang="ts">
	import { storeToRefs } from "pinia";

	import { useCountriesStore } from "@/store";

	import CountriesOverview from "@/components/Countries/CountriesOverview.vue";
	import PageTitle from "@/components/PageTitle.vue";

	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	const store = useCountriesStore();
	const { favoriteCountries } = storeToRefs(store);
</script>

<template>
	<DefaultLayout>
		<PageTitle>Seus países favoritos</PageTitle>
		<CountriesOverview
			:countries="favoriteCountries"
			:with-search-bar="false"
			:error="
				favoriteCountries.length === 0 ? 'Nenhum país favorito encontrado!' : ''
			"
		/>
	</DefaultLayout>
</template>
