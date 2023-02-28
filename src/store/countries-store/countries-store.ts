import { onMounted, reactive, ref } from "vue";
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
		const formattedID = id.toLocaleLowerCase();
		return favoriteCountries.value.some((value) => value.id === formattedID);
	}

	function setFavoriteCountry(countryName: string) {
		if (isFavorite(countryName)) return;
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: [
				...favoriteCountries.value,
				{ id: countryName.toLocaleLowerCase() },
			],
		});
		hydrateFavoriteCountries();
	}

	function removeFavoriteCountry(id: string) {
		const formattedID = id.toLocaleLowerCase();
		localStorageService.set({
			key: FAVORITE_COUNTRIES_KEY,
			value: favoriteCountries.value.filter(
				(country) => country.id !== formattedID
			),
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
