<script setup lang="ts">
	import { useFetch } from "../../composables/useFetch";

	import BaseError from "../BaseError.vue";
	import BaseLoading from "../BaseLoading.vue";
	import CountryListItem from "./CountryListItem.vue";

	import type { CountryDTO } from "../../dtos/country-dtos/country-dto";

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
			<CountryListItem
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
		display: flex;
		flex-wrap: wrap;
		gap: 24px;
	}
</style>
