<script setup lang="ts">
	import { computed } from "vue";
	import { storeToRefs } from "pinia";

	import { useQuizStore } from "@/store";

	const store = useQuizStore();
	const { isCorrect, remainingAttempts, country } = storeToRefs(store);

	const phrase = computed(() => {
		const countryName = country?.value?.translations.por.common;
		if (isCorrect.value === false && remainingAttempts.value === 0)
			return `O nome desse país é ${countryName}`;
		if (isCorrect.value)
			return `Resposta Correta! O nome desse país é ${countryName}`;
		if (isCorrect.value === false) return "Resposta Incorreta";
		return "";
	});
</script>

<template>
	<h2
		role="alert"
		v-if="isCorrect !== null"
		class="quiz-status"
		aria-atomic="true"
		aria-live="polite"
	>
		{{ phrase }}
	</h2>
</template>

<style scoped lang="scss">
	.quiz-status {
		font-size: 0.9rem;
		font-weight: 400;
		opacity: 0.9;
	}
</style>
