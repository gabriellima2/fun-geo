<script lang="ts" setup>
	import Countries from "@/components/Countries/Countries.vue";
	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	import { countriesService } from "@/services/countries-service";
</script>

<template>
	<DefaultLayout>
		<div class="home-page">
			<h1 class="home-page__title">Explore os países do mundo!</h1>
			<Countries :service="countriesService.getAll" />
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
