import { onMounted, ref, watch } from "vue";
import { defineStore, storeToRefs } from "pinia";

import { useCountriesStore } from "./countries-store";

import { generateRandomNumber } from "@/functions/generate-random-number";
import type { CountryDTO } from "@/dtos/country-dtos";

type CountriesAlreadyShown = {
	[key: string]: string;
};

const REMAINING_ATTEMPTS = 5;

export const useQuizStore = defineStore("quiz", () => {
	const store = useCountriesStore();
	const { countries } = storeToRefs(store);

	const isCorrect = ref<boolean | null>(null);
	const remainingAttempts = ref(REMAINING_ATTEMPTS);
	const countriesAlreadyShown = ref<CountriesAlreadyShown | null>(null);
	const country = ref<CountryDTO | null>(null);

	function isRepeated(country: CountryDTO) {
		if (!countriesAlreadyShown.value) return false;
		return !!countriesAlreadyShown.value[String(country.name.common)];
	}

	function clearIsCorrect() {
		isCorrect.value = null;
	}

	function restart() {
		remainingAttempts.value = REMAINING_ATTEMPTS;
		clearIsCorrect();
	}

	function hydrateCountry() {
		if (!countries.value.data) return;
		const index = generateRandomNumber(0, countries.value.data.length);
		const countryRaffled = countries.value.data[index];

		if (isRepeated(countryRaffled)) return;
		country.value = countryRaffled;
	}

	function nextChallenge() {
		if (!country.value) return;
		countriesAlreadyShown.value = {
			...countriesAlreadyShown.value,
			[String(country.value.name.common)]: country.value.name.common,
		};
		hydrateCountry();
		restart();
	}

	function checkAnswer(answer: string) {
		if (
			!country.value ||
			remainingAttempts.value === 0 ||
			!answer ||
			isCorrect.value
		)
			return;
		const correctAnswer = country.value.translations.por.common.toLowerCase();
		isCorrect.value = answer.toLowerCase() === correctAnswer;
		remainingAttempts.value -= 1;
	}

	watch(countries.value, (_, newState) => {
		if (newState.isLoading) return;
		hydrateCountry();
	});

	onMounted(() => {
		hydrateCountry();
	});

	return {
		country,
		isCorrect,
		remainingAttempts,
		checkAnswer,
		nextChallenge,
		clearIsCorrect,
	};
});
