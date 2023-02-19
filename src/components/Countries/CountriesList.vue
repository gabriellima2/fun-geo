<script setup lang="ts">
	import { useFetch } from "@/composables/useFetch";

	import CountriesListItem from "./CountriesListItem.vue";
	import BaseLoading from "../BaseLoading.vue";
	import BaseError from "../BaseError.vue";

	import type { CountryDTO } from "@/dtos/country-dtos/country-dto";

	type CountryListProps = {
		service: () => Promise<CountryDTO[]>;
	};

	const props = defineProps<CountryListProps>();
	const { data, error, isLoading } = useFetch(props.service);
</script>

<template>
	<BaseLoading v-if="isLoading" />
	<BaseError v-else-if="error" :message="error" />
	<article v-else-if="data">
		<ul class="country-list">
			<CountriesListItem
				v-for="country in data"
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
