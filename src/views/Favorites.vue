<script setup lang="ts">
	import { useCountriesStore } from "@/store";

	import CountriesOverview from "@/components/Countries/CountriesOverview.vue";
	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	const store = useCountriesStore();
</script>

<template>
	<DefaultLayout>
		<h1 v-if="store.favorites.length === 0">Vazio</h1>
		<CountriesOverview v-else :countries="store.favorites" />
	</DefaultLayout>
</template>
