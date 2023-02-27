import { useCountriesStore } from "@/store";
import type { IFavoriteCountries } from "@/interfaces/IFavoriteCountries";

type UseFavoriteCountries = {
	favoriteCountries: IFavoriteCountries[];
	handleFavorite: (id: string) => void;
};

export function useFavoriteCountries(): UseFavoriteCountries {
	const store = useCountriesStore();
	const handleFavorite = (id: string) => store.setFavoriteCountry(id);

	return {
		favoriteCountries: store.favoriteCountries,
		handleFavorite,
	};
}
