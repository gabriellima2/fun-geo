import { reactive, type Ref, ref } from "vue";
import { useRouter } from "vue-router";

import { OptionProps } from "@/components/BaseSelect.vue";
import { useFetch } from "@/composables/useFetch";

import type { CountryDTO } from "@/dtos/country-dtos";

type UseCountriesParams = {
	service: () => Promise<CountryDTO[]>;
};

type UseCountriesReturn = {
	countries: Ref<CountryDTO[] | null>;
	error: Ref<string | null>;
	isLoading: Ref<boolean>;
	filterByRegion: {
		value: string;
		options: OptionProps[];
	};
	handleSearch: (value: string) => void;
};

const filterByRegionOptions: OptionProps[] = [
	{ text: "Todos", value: "" },
	{ text: "África", value: "africa" },
	{ text: "América", value: "americas" },
	{ text: "Antártida", value: "antarctic" },
	{ text: "Asia", value: "asia" },
	{ text: "Europa", value: "europe" },
	{ text: "Oceania", value: "oceania" },
];

export function useCountries(params: UseCountriesParams): UseCountriesReturn {
	const { service } = params;

	const router = useRouter();
	const { data, error, isLoading } = useFetch<CountryDTO[]>(service);

	const filterByRegionValue = ref("");

	const handleSearch = (value: string) => {
		router.push({ path: "/resultados", query: { q: value } });
	};

	return {
		countries: data,
		error,
		isLoading,
		handleSearch,
		filterByRegion: reactive({
			value: filterByRegionValue,
			options: filterByRegionOptions,
		}),
	};
}
