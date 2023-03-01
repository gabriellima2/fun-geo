<script lang="ts" setup>
	import { storeToRefs } from "pinia";

	import { useCountriesStore } from "@/store";

	import CountriesOverview from "@/components/Countries/CountriesOverview.vue";
	import PageTitle from "@/components/PageTitle.vue";

	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	const store = useCountriesStore();
	const { countries } = storeToRefs(store);
</script>

<template>
	<DefaultLayout>
		<PageTitle>Explore os países do mundo!</PageTitle>
		<CountriesOverview
			:countries="countries.data"
			:is-loading="countries.isLoading"
			:error="countries.error"
			:with-search-bar="true"
		/>
	</DefaultLayout>
</template>
