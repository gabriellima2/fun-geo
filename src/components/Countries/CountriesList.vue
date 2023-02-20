<script setup lang="ts">
	import CountriesListItem from "./CountriesListItem.vue";
	import type { CountryDTO } from "@/dtos/country-dtos/country-dto";

	type CountryListProps = {
		countries: CountryDTO[];
	};

	const props = defineProps<CountryListProps>();
</script>

<template>
	<article>
		<ul class="country-list">
			<CountriesListItem
				v-for="country in props.countries"
				:key="country.name.common"
				:name="country.name.common"
				:flag="{ src: country.flags.png, alt: country.flags.alt }"
				:region="country.region"
			/>
		</ul>
	</article>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.country-list {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		grid-auto-rows: minmax(96px, auto);
		gap: 24px;
	}

	@media screen and (min-width: $md-screen) {
		.country-list {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (min-width: $lg-screen) {
		.country-list {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
