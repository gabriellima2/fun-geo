const BASE_URL = "https://restcountries.com/v3.1";

const FIELDS = "name,flags,region,translations,capital,continents";

const EMPTY_PARAMETER_ERROR_MESSAGE = "Please, pass valid fields parameters!";

export const countriesService = {
	getAll: async <T extends object | []>(fields = FIELDS) => {
		if (!fields) throw new Error(EMPTY_PARAMETER_ERROR_MESSAGE);

		const response = await fetch(`${BASE_URL}/all?fields=${fields}`);
		if (!response.ok) throw new Error(response.statusText);

		const data: T = await response.json();
		return data;
	},
	getByName: async <T extends object | []>(name: string, fields = FIELDS) => {
		if (!name) throw new Error("Please, pass valid name parameter");
		if (!fields) throw new Error(EMPTY_PARAMETER_ERROR_MESSAGE);

		const response = await fetch(`${BASE_URL}/name/${name}/?fields=${fields}`);
		if (!response.ok) throw new Error(response.statusText);

		const data: T = await response.json();
		return data;
	},
};
