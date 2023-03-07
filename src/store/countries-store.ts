import { computed, onMounted, reactive, ref } from "vue";
import { defineStore } from "pinia";

import { localStorageService } from "@/services/local-storage-service/local-storage-service";
import { countriesService } from "@/services/countries-service";

import type { IFavoriteCountriesKeys } from "@/interfaces/IFavoriteCountriesKeys";
import type { CountryDTO } from "@/dtos/country-dtos";

type Countries = {
	isLoading: boolean;
	error: string | null;
	data: CountryDTO[] | null;
};

const FAVORITE_COUNTRIES_KEY = "favorite-countries";

export const useCountriesStore = defineStore("countries", () => {
	const countries = reactive<Countries>({
		isLoading: true,
		error: null,
		data: null,
	});
	const favoriteCountriesKeys = ref<IFavoriteCountriesKeys | null>(null);

	function hydrateCountries() {
		countriesService
			.getAll<CountryDTO[]>()
			.then((data) => (countries.data = data))
			.catch((err) => (countries.error = err))
			.finally(() => (countries.isLoading = false));
	}

	function hydrateFavoriteCountriesKeys() {
		const storedFavoriteCountries =
			localStorageService.get<IFavoriteCountriesKeys>({
				key: FAVORITE_COUNTRIES_KEY,
			});
		favoriteCountriesKeys.value = storedFavoriteCountries || null;
	}

	function isFavorite(id: string) {
		if (!favoriteCountriesKeys.value) return false;
		return !!favoriteCountriesKeys.value[id.toLowerCase()];
	}

	function setFavoriteCountry(countryName: string) {
		if (isFavorite(countryName)) return;

		const countryNameFormatted = countryName.toLocaleLowerCase().trim();
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: {
				...favoriteCountriesKeys.value,
				[String(countryNameFormatted)]: countryNameFormatted,
			},
		});
		hydrateFavoriteCountriesKeys();
	}

	function removeFavoriteCountry(id: string) {
		if (!favoriteCountriesKeys.value) return;
		delete favoriteCountriesKeys.value[id.toLowerCase()];

		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: favoriteCountriesKeys.value,
		});
		hydrateFavoriteCountriesKeys();
	}

	const favoriteCountries = computed(() => {
		if (!countries.data || !favoriteCountriesKeys.value) return [];
		const keys = Object.keys(favoriteCountriesKeys.value);

		return keys.reduce<CountryDTO[]>((acc, key) => {
			const data = countries.data!.find(
				(country) => country.name.common.toLowerCase() === key
			);
			if (!data) return acc;
			return [...acc, data];
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
