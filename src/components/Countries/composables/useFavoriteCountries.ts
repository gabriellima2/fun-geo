import { computed, type ComputedRef } from "vue";

import { useCountriesStore } from "@/store";

type UseFavoriteCountries = {
	handleFavorite: () => void;
	isAlreadyFavorite: ComputedRef<boolean>;
};

export function useFavoriteCountries(id: string): UseFavoriteCountries {
	const store = useCountriesStore();

	const handleFavorite = () => {
		if (store.isFavorite(id)) return store.removeFavoriteCountry(id);
		store.setFavoriteCountry(id);
	};

	const isAlreadyFavorite = computed(() => store.isFavorite(id));

	return {
		handleFavorite,
		isAlreadyFavorite,
	};
}
