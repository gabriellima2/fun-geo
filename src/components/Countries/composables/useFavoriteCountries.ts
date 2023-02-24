type UseFavoriteCountries = {
	favoriteCountries: [];
	handleFavorite: (id: string) => void;
};

export function useFavoriteCountries(): UseFavoriteCountries {
	const handleFavorite = (id: string) => console.log(id);

	return {
		favoriteCountries: [],
		handleFavorite,
	};
}
