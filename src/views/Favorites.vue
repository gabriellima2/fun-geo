<script setup lang="ts">
	import { useCountriesStore } from "@/store";

	import CountriesOverview from "@/components/Countries/CountriesOverview.vue";
	import PageTitle from "@/components/PageTitle.vue";

	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	const store = useCountriesStore();
</script>

<template>
	<DefaultLayout>
		<PageTitle>Seus países favoritos</PageTitle>
		<CountriesOverview
			:countries="store.favorites"
			:with-search-bar="false"
			:error="
				store.favorites.length === 0 ? 'Nenhum país favorito encontrado!' : ''
			"
		/>
	</DefaultLayout>
</template>
