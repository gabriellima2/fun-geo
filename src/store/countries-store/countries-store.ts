import { computed, onMounted, reactive, ref } from "vue";
import { defineStore } from "pinia";

import { localStorageService } from "@/services/local-storage-service/local-storage-service";
import { countriesService } from "@/services/countries-service";

import type { IStoredFavoriteCountries } from "@/interfaces/IStoredFavoriteCountries";
import type { CountryDTO } from "@/dtos/country-dtos";

type Countries = {
	isLoading: boolean;
	error: string | null;
	data: CountryDTO[] | null;
};

type StoredFavoriteCountries = IStoredFavoriteCountries[];

const FAVORITE_COUNTRIES_KEY = "favorite-countries";

export const useCountriesStore = defineStore("countries", () => {
	const countries = reactive<Countries>({
		isLoading: true,
		error: null,
		data: null,
	});
	const storedFavoriteCountries = ref<StoredFavoriteCountries>([]);

	function hydrateCountries() {
		countriesService
			.getAll<CountryDTO[]>()
			.then((data) => (countries.data = data))
			.catch((err) => (countries.error = err))
			.finally(() => (countries.isLoading = false));
	}

	function hydrateStoredFavoriteCountries() {
		const favoriteCountriesInStorage =
			localStorageService.get<StoredFavoriteCountries>({
				key: FAVORITE_COUNTRIES_KEY,
			});
		storedFavoriteCountries.value = favoriteCountriesInStorage || [];
	}

	function isFavorite(id: string) {
		const formattedID = id.toLocaleLowerCase();
		return storedFavoriteCountries.value.some(
			(value) => value.id === formattedID
		);
	}

	function setFavoriteCountry(countryName: string) {
		if (isFavorite(countryName)) return;
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: [
				...storedFavoriteCountries.value,
				{ id: countryName.toLocaleLowerCase() },
			],
		});
		hydrateStoredFavoriteCountries();
	}

	function removeFavoriteCountry(id: string) {
		const formattedID = id.toLocaleLowerCase();
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: storedFavoriteCountries.value.filter(
				(country) => country.id !== formattedID
			),
		});
		hydrateStoredFavoriteCountries();
	}

	const favorites = computed(() => {
		if (!countries.data) return [];
		return storedFavoriteCountries.value.reduce<CountryDTO[]>(
			(acc, favorite) => {
				const favoriteCountryData = countries.data!.find(
					(country) => country.name.common.toLowerCase() === favorite.id
				);
				if (!favoriteCountryData) return acc;
				return [...acc, favoriteCountryData];
			},
			[]
		);
	});

	onMounted(() => {
		hydrateCountries();
		hydrateStoredFavoriteCountries();
	});

	return {
		countries,
		favorites,
		setFavoriteCountry,
		removeFavoriteCountry,
		isFavorite,
	};
});
