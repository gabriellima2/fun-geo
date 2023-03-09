<script setup lang="ts">
	import { useFetch } from "@/composables/useFetch";

	import CountriesInfoItem from "./components/CountriesInfoItem.vue";
	import BaseLoading from "../BaseLoading.vue";
	import BaseError from "../BaseError.vue";

	import type { CountryDetailsDTO } from "@/dtos/country-dtos";

	type CountriesInfoProps = {
		service: () => Promise<CountryDetailsDTO[]>;
	};

	const props = defineProps<CountriesInfoProps>();
	const { data, error, isLoading } = useFetch<CountryDetailsDTO[]>(
		props.service
	);
</script>

<template>
	<BaseLoading v-if="isLoading" />
	<BaseError v-else-if="error" :message="error" />
	<CountriesInfoItem
		v-else-if="data"
		:id="data[0].name.common"
		:name="data[0].translations.por.common"
		:capital="data[0].capital[0]"
		:currencies="data[0].currencies"
		:continent="data[0].continents[0]"
		:area="data[0].area"
		:population="data[0].population"
		:flag="{ src: data[0].flags.png, alt: data[0].flags.alt }"
		:region="data[0].region"
	/>
</template>

<style scoped></style>
