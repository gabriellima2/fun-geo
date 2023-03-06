<script setup lang="ts">
	import { ref, watch, computed } from "vue";
	import { storeToRefs } from "pinia";
	import { useQuizStore } from "@/store";

	import BaseButton from "../Buttons/BaseButton.vue";
	import QuizStatus from "./QuizStatus.vue";
	import BaseInput from "../BaseInput.vue";

	const userAnswer = ref("");
	const store = useQuizStore();
	const { isCorrect, remainingAttempts } = storeToRefs(store);

	watch(userAnswer, (_, newState) => {
		if (!newState || isCorrect.value === null) return;
		store.clearIsCorrect();
	});

	const itsOver = computed(() => {
		return isCorrect.value === true || remainingAttempts.value === 0;
	});
</script>

<template>
	<form class="form-quiz">
		<label class="form-quiz__label">
			Responder
			<BaseInput
				v-model="userAnswer"
				placeholder="Digite a resposta..."
				:disabled="itsOver"
			/>
		</label>
		<QuizStatus />
		<BaseButton
			type="submit"
			:disabled="itsOver"
			@click.prevent="() => store.checkAnswer(userAnswer.trim())"
			class="form-quiz__answer-check-button"
		>
			<template #base-button-text>Verificar</template>
		</BaseButton>
	</form>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.form-quiz {
		display: flex;
		flex-direction: column;
		gap: 32px;
	}
	.form-quiz__label {
		display: flex;
		flex-direction: column;
		gap: 12px;
		font-size: 0.9rem;
	}
	.form-quiz__answer-check-button {
		width: 100%;
		font-size: 1rem;
		background-color: $brand-color-500;
		transition: opacity 0.2s ease;

		&:hover,
		&:focus {
			opacity: 0.8;
			background-color: $brand-color-500;
		}
	}
</style>
