import { onMounted, reactive, ref, watch } from "vue";
import { defineStore } from "pinia";

import { localStorageService } from "@/services/local-storage-service/local-storage-service";
import { countriesService } from "@/services/countries-service";

import type { IFavoriteCountries } from "@/interfaces/IFavoriteCountries";
import type { CountryDTO } from "@/dtos/country-dtos";

type Countries = {
	isLoading: boolean;
	error: string | null;
	data: CountryDTO[] | null;
};

type FavoriteCountries = IFavoriteCountries[];

const FAVORITE_COUNTRIES_KEY = "favorite-countries";

export const useCountriesStore = defineStore("countries", () => {
	const countries = reactive<Countries>({
		isLoading: true,
		error: null,
		data: null,
	});
	const favoriteCountries = ref<FavoriteCountries>([]);

	function hydrateCountries() {
		countriesService
			.getAll<CountryDTO[]>()
			.then((data) => (countries.data = data))
			.catch((err) => (countries.error = err))
			.finally(() => (countries.isLoading = false));
	}

	function hydrateFavoriteCountries() {
		const storedFavoriteCountries = localStorageService.get<FavoriteCountries>({
			key: FAVORITE_COUNTRIES_KEY,
		});
		favoriteCountries.value = storedFavoriteCountries || [];
	}

	function isFavorite(id: string) {
		return favoriteCountries.value.some((value) => value.id === id);
	}

	function setFavoriteCountry(countryName: string) {
		if (isFavorite(countryName)) return;
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: [...favoriteCountries.value, { id: countryName }],
		});
		hydrateFavoriteCountries();
	}

	function removeFavoriteCountry(id: string) {
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: favoriteCountries.value.filter((country) => country.id !== id),
		});
		hydrateFavoriteCountries();
	}

	onMounted(() => {
		hydrateCountries();
		hydrateFavoriteCountries();
	});

	return {
		countries,
		favoriteCountries,
		setFavoriteCountry,
		removeFavoriteCountry,
		isFavorite,
	};
});
