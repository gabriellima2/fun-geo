<script setup lang="ts">
	import { ref } from "vue";

	import BaseButton from "../Buttons/BaseButton.vue";
	import BaseInput from "../BaseInput.vue";

	const userAnswer = ref("");

	function handleAnswerCheck() {
		console.log(userAnswer.value);
	}
</script>

<template>
	<form class="form-quiz">
		<label class="form-quiz__label">
			Responder
			<BaseInput v-model="userAnswer" placeholder="Digite a resposta..." />
		</label>
		<BaseButton
			type="submit"
			@click.prevent="handleAnswerCheck"
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
