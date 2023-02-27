import { computed, type ComputedRef } from "vue";

import { useCountriesStore } from "@/store";
import type { IFavoriteCountries } from "@/interfaces/IFavoriteCountries";

type UseFavoriteCountries = {
	favoriteCountries: IFavoriteCountries[];
	handleFavorite: () => void;
	isAlreadyFavorite: ComputedRef<boolean>;
};

export function useFavoriteCountries(id: string): UseFavoriteCountries {
	const store = useCountriesStore();

	const handleFavorite = () => store.setFavoriteCountry(id);

	const isAlreadyFavorite = computed(() => store.isFavorite(id));

	return {
		favoriteCountries: store.favoriteCountries,
		handleFavorite,
		isAlreadyFavorite,
	};
}
