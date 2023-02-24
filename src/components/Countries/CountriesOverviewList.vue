<script setup lang="ts">
	import { computed, watch } from "vue";

	import { usePagination } from "@/composables/usePagination";

	import CountriesOverviewListItem from "./CountriesOverviewListItem.vue";
	import PaginationButton from "../Buttons/PaginationButton.vue";

	import { convertIntoTwoDimensionalArray } from "@/functions/convert-into-two-dimensional-array";
	import type { CountryDTO } from "@/dtos/country-dtos/country-dto";

	type CountriesOverviewListProps = {
		countries: CountryDTO[];
		filterByRegionValue?: string;
	};

	const PAGE_LIMIT = 4;
	const FIRST_PAGE = 1;

	const props = defineProps<CountriesOverviewListProps>();

	const { currentPage, itemsPerPage, nextPage, previousPage, backToFirstPage } =
		usePagination<CountryDTO>({
			data: props.countries,
			pageLimit: PAGE_LIMIT,
		});

	const filteredCountries = computed(() => {
		if (!props.filterByRegionValue) return props.countries;

		return props.countries.filter((country) => {
			return country.region.toLowerCase() === props.filterByRegionValue;
		});
	});

	const items = computed(() =>
		convertIntoTwoDimensionalArray<CountryDTO>({
			array: filteredCountries.value,
			rowsLength: itemsPerPage,
		})
	);

	watch(filteredCountries, () => currentPage.value !== 1 && backToFirstPage());
</script>

<template>
	<article>
		<ul class="country-list">
			<CountriesOverviewListItem
				v-for="country in items[currentPage - 1]"
				:key="country.name.common"
				:id="country.name.common.toLowerCase()"
				:name="country.translations.por.common"
				:flag="{ src: country.flags.png, alt: country.flags.alt }"
				:region="country.region"
			/>
		</ul>
		<div class="pagination-buttons">
			<PaginationButton
				variant="previous"
				@click="previousPage"
				:disabled="currentPage === FIRST_PAGE"
			/>
			<PaginationButton
				variant="next"
				@click="nextPage"
				:disabled="!items[currentPage] || currentPage === PAGE_LIMIT"
			/>
		</div>
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

	.pagination-buttons {
		@include center(row);
		flex-wrap: wrap;
		gap: 32px;
		margin: 44px 0px;
	}
</style>
