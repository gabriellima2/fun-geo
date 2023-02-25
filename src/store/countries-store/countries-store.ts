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

export const useCountriesStore = defineStore("countries", () => {
	const countries = reactive<Countries>({
		isLoading: true,
		error: null,
		data: null,
	});
	const favoriteCountries = ref<FavoriteCountries>([]);

	async function hydrateCountries() {
		countriesService
			.getAll<CountryDTO[]>()
			.then((data) => (countries.data = data))
			.catch((err) => (countries.error = err))
			.finally(() => (countries.isLoading = false));
	}

	function hydrateFavoriteCountries() {
		const storedFavoriteCountries = localStorageService.get<FavoriteCountries>({
			key: "favorite-countries",
		});
		favoriteCountries.value = storedFavoriteCountries || [];
	}

	onMounted(async () => {
		await hydrateCountries();
		hydrateFavoriteCountries();
	});

	return {
		countries,
		favoriteCountries,
	};
});
