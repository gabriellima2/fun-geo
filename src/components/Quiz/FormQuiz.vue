<script setup lang="ts">
	import { ref, computed } from "vue";
	import { storeToRefs } from "pinia";

	import { useQuizStore } from "@/store";

	import BaseButton, { BaseButtonVariants } from "../Buttons/BaseButton.vue";
	import BaseInput from "../BaseInput.vue";

	const userAnswer = ref("");
	const store = useQuizStore();
	const { isCorrect, remainingAttempts, country } = storeToRefs(store);

	const button = computed<{ text: string; variants: BaseButtonVariants }>(
		() => {
			if (isCorrect.value)
				return { text: "Resposta Correta!", variants: "success" };
			if (isCorrect.value === false)
				return { text: "Resposta Incorreta!", variants: "error" };

			return { text: "Verificar", variants: "default" };
		}
	);
</script>

<template>
	<form class="form-quiz">
		<label class="form-quiz__label">
			Responder
			<BaseInput v-model="userAnswer" placeholder="Digite a resposta..." />
		</label>
		{{
			remainingAttempts === 0 && !isCorrect
				? `A resposta é ${country!.translations.por.common}`
				: null
		}}
		<BaseButton
			type="submit"
			@click.prevent="() => store.checkAnswer(userAnswer.trim())"
			class="form-quiz__answer-check-button"
			:variants="button.variants"
		>
			<template #base-button-text>{{ button.text }}</template>
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
