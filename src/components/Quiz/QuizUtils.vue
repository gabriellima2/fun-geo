<script setup lang="ts">
	import { storeToRefs } from "pinia";
	import { PhCaretCircleDoubleRight } from "phosphor-vue";

	import { useQuizStore } from "@/store";

	import BaseButton from "../Buttons/BaseButton.vue";

	const store = useQuizStore();
	const { remainingAttempts, isCorrect } = storeToRefs(store);
</script>

<template>
	<div class="utils-quiz">
		<h1 class="utils-quiz__attempts">
			{{ remainingAttempts + " " }}<span>Tentativas restantes</span>
		</h1>
		<BaseButton
			type="button"
			@click="() => store.nextChallenge()"
			class="utils-quiz__next-button"
			:disabled="!isCorrect && remainingAttempts !== 0"
		>
			<template #base-button-icon>
				<PhCaretCircleDoubleRight color="#f2f2f2" weight="regular" :size="28" />
			</template>
		</BaseButton>
	</div>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.utils-quiz {
		@include center(row);
		justify-content: space-between;
	}
	.utils-quiz__attempts {
		font-size: 1.5rem;
		font-weight: 600;

		& > span {
			font-weight: 400;
			font-size: 1rem;
		}
	}
	.utils-quiz__next-button {
		border-radius: 100%;
	}

	@media screen and (min-width: $lg-screen) {
		.utils-quiz {
			min-width: 467px;
		}
	}
</style>
