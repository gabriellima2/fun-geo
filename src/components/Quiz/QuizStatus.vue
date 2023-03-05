<script setup lang="ts">
	import { computed } from "vue";
	import { storeToRefs } from "pinia";

	import { useQuizStore } from "@/store";

	const store = useQuizStore();
	const { isCorrect, remainingAttempts, country } = storeToRefs(store);
	const phraseToTheCountryName = computed(() => {
		return `O nome desse país é ${country?.value?.translations.por.common}`;
	});
</script>

<template>
	<h2 role="alert" v-if="isCorrect">
		Resposta Correta! {{ phraseToTheCountryName }}
	</h2>
	<h2 role="alert" v-if="isCorrect === false">Resposta Incorreta!</h2>
	<h2 role="alert" v-if="isCorrect === false && remainingAttempts === 0">
		{{ phraseToTheCountryName }}
	</h2>
</template>

<style scoped></style>
