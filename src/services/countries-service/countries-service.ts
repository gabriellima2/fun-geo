const BASE_URL = "https://restcountries.com/v3.1/";

export const countriesService = {
	getAll: async <T extends object | []>(fields = "name,flags,region") => {
		if (!fields) throw new Error("Please, pass valid fields parameters!");

		const response = await fetch(`${BASE_URL}/all?fields=${fields}`);
		if (!response.ok) throw new Error(response.statusText);

		const data: T = await response.json();
		return data;
	},
};
