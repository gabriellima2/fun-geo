<script setup lang="ts">
	import { storeToRefs } from "pinia";

	import { useQuizStatus } from "./composables/useQuizStatus";
	import { useQuizStore } from "@/store";

	const store = useQuizStore();
	const { isCorrect } = storeToRefs(store);
	const { status } = useQuizStatus();
</script>

<template>
	<h2
		role="alert"
		v-if="isCorrect !== null"
		class="quiz-status"
		:class="{
			'quiz-status--incorrect': status.variants === 'incorrect',
			'quiz-status--correct': status.variants === 'correct',
			'quiz-status--failed': status.variants === 'failed',
		}"
		aria-atomic="true"
		aria-live="polite"
	>
		{{ status.message }}
	</h2>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/variables";

	.quiz-status {
		font-size: 0.9rem;
		font-weight: 400;
		opacity: 0.9;
	}
	.quiz-status--incorrect {
		color: $error-color;
	}
	.quiz-status--correct {
		color: $success-color;
	}
	.quiz-status--failed {
		color: $attention-color;
	}
</style>
