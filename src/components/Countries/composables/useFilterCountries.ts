import { reactive, ref } from "vue";

import { usePush } from "@/composables/usePush";
import type { OptionProps } from "@/components/BaseSelect.vue";

type UseFilterCountriesReturn = {
	filter: {
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

export function useFilterCountries(): UseFilterCountriesReturn {
	const redirect = usePush();
	const filterByRegionValue = ref("");

	const handleSearch = (value: string) => {
		redirect({ path: "/resultados", query: { q: value } });
	};

	return {
		handleSearch,
		filter: reactive({
			value: filterByRegionValue,
			options: filterByRegionOptions,
		}),
	};
}
