import { computed, onMounted, reactive, ref } from "vue";
import { defineStore } from "pinia";

import { localStorageService } from "@/services/local-storage-service/local-storage-service";
import { countriesService } from "@/services/countries-service";

import type { IFavoriteCountriesKey } from "@/interfaces/IFavoriteCountriesKey";
import type { CountryDTO } from "@/dtos/country-dtos";

type Countries = {
	isLoading: boolean;
	error: string | null;
	data: CountryDTO[] | null;
};

type FavoriteCountriesKeys = IFavoriteCountriesKey[];

const FAVORITE_COUNTRIES_KEY = "favorite-countries";

export const useCountriesStore = defineStore("countries", () => {
	const countries = reactive<Countries>({
		isLoading: true,
		error: null,
		data: null,
	});
	const favoriteCountriesKeys = ref<FavoriteCountriesKeys>([]);

	function hydrateCountries() {
		countriesService
			.getAll<CountryDTO[]>()
			.then((data) => (countries.data = data))
			.catch((err) => (countries.error = err))
			.finally(() => (countries.isLoading = false));
	}

	function hydrateFavoriteCountriesKeys() {
		const storedFavoriteCountries =
			localStorageService.get<FavoriteCountriesKeys>({
				key: FAVORITE_COUNTRIES_KEY,
			});
		favoriteCountriesKeys.value = storedFavoriteCountries || [];
	}

	function isFavorite(id: string) {
		const formattedID = id.toLocaleLowerCase();
		return favoriteCountriesKeys.value.some(
			(value) => value.id === formattedID
		);
	}

	function setFavoriteCountry(countryName: string) {
		if (isFavorite(countryName)) return;
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: [
				...favoriteCountriesKeys.value,
				{ id: countryName.toLocaleLowerCase() },
			],
		});
		hydrateFavoriteCountriesKeys();
	}

	function removeFavoriteCountry(id: string) {
		const formattedID = id.toLocaleLowerCase();
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: favoriteCountriesKeys.value.filter(
				(country) => country.id !== formattedID
			),
		});
		hydrateFavoriteCountriesKeys();
	}

	const favoriteCountries = computed(() => {
		if (!countries.data) return [];
		return favoriteCountriesKeys.value.reduce<CountryDTO[]>((acc, favorite) => {
			const favoriteCountryData = countries.data!.find(
				(country) => country.name.common.toLowerCase() === favorite.id
			);
			if (!favoriteCountryData) return acc;
			return [...acc, favoriteCountryData];
		}, []);
	});

	onMounted(() => {
		hydrateCountries();
		hydrateFavoriteCountriesKeys();
	});

	return {
		countries,
		favoriteCountries,
		setFavoriteCountry,
		removeFavoriteCountry,
		isFavorite,
	};
});
