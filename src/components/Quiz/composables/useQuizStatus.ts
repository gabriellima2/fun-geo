import { computed } from "vue";
import { storeToRefs } from "pinia";

import { useQuizStore } from "@/store";

export type Status = {
	message: string;
	variants: "incorrect" | "correct" | "failed";
};

const MESSAGES = {
	CORRECT_MESSAGE: "Resposta Correta! ",
	INCORRECT_MESSAGE: "Resposta Incorreta! ",
	ATTEMPTS_ARE_OVER_MESSAGE: "Acabou as tentativas! ",
};

export function useQuizStatus() {
	const store = useQuizStore();
	const { isCorrect, country, attemptsAreOver } = storeToRefs(store);

	function getCountryNameMessage() {
		const countryName = country?.value?.translations.por.common;
		if (!countryName) return "";
		return `O nome desse país é ${countryName}`;
	}

	const status = computed<Status>(() => {
		const COUNTRY_NAME_MESSAGE = getCountryNameMessage();
		if (isCorrect.value === false && attemptsAreOver.value) {
			return {
				message: MESSAGES.ATTEMPTS_ARE_OVER_MESSAGE + COUNTRY_NAME_MESSAGE,
				variants: "failed",
			};
		}
		return isCorrect.value
			? {
					message: MESSAGES.CORRECT_MESSAGE + COUNTRY_NAME_MESSAGE,
					variants: "correct",
					// eslint-disable-next-line no-mixed-spaces-and-tabs
			  }
			: { message: MESSAGES.INCORRECT_MESSAGE, variants: "incorrect" };
	});

	return { status };
}
