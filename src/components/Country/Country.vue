<script setup lang="ts">
	import { useFetch } from "@/composables/useFetch";

	import BaseError from "../BaseError.vue";
	import BaseLoading from "../BaseLoading.vue";

	import type { CountryDetailsDTO } from "@/dtos/country-dtos";

	type CountryProps = {
		service: () => Promise<CountryDetailsDTO[]>;
	};

	const props = defineProps<CountryProps>();
	const { data, error, isLoading } = useFetch<CountryDetailsDTO[]>(
		props.service
	);
</script>

<template>
	<BaseLoading v-if="isLoading" />
	<BaseError v-else-if="error" :message="error" />
	<div v-else-if="data">
		<h1>{{ data[0].translations.por.common }}</h1>
	</div>
</template>

<style scoped></style>
