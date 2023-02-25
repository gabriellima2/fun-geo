<script lang="ts" setup>
	import { storeToRefs } from "pinia";

	import { useCountriesStore } from "@/store";

	import CountriesOverview from "@/components/Countries/CountriesOverview.vue";
	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	const store = useCountriesStore();
	const { countries } = storeToRefs(store);
</script>

<template>
	<DefaultLayout>
		<div class="home-page">
			<h1 class="home-page__title">Explore os países do mundo!</h1>
			<CountriesOverview
				:countries="countries.data"
				:is-loading="countries.isLoading"
				:error="countries.error"
			/>
		</div>
	</DefaultLayout>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	.home-page {
		width: 100%;
	}
	.home-page__title {
		max-width: 290px;
		padding-top: 32px;
	}

	.filters {
		@include center(row);
		justify-content: space-between;
		gap: 12px;
		flex-wrap: wrap;
		padding: 48px 0px;
	}
</style>
