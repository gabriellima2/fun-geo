<script setup lang="ts">
	import { PhCaretCircleDoubleRight } from "phosphor-vue";
	import BaseButton from "../Buttons/BaseButton.vue";

	function handleNextCountry() {
		console.log("Próximo país");
	}
</script>

<template>
	<div class="utils-quiz">
		<h1 class="utils-quiz__attempts">
			5{{ " " }}<span>Tentativas restantes</span>
		</h1>
		<BaseButton
			type="button"
			@click="handleNextCountry"
			class="utils-quiz__next-button"
			:class="{ disabled: 'utils-quiz__next-button--disabled' }"
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
	.utils-quiz__next-button--disabled {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
