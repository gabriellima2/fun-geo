<script setup lang="ts">
	import { storeToRefs } from "pinia";

	import { useCountriesStore, useQuizStore } from "@/store";

	import QuizCountry from "@/components/Quiz/QuizCountry.vue";
	import QuizUtils from "@/components/Quiz/QuizUtils.vue";
	import BaseLoading from "@/components/BaseLoading.vue";
	import QuizForm from "@/components/Quiz/QuizForm.vue";
	import BaseError from "@/components/BaseError.vue";
	import PageTitle from "@/components/PageTitle.vue";

	import DefaultLayout from "@/layouts/DefaultLayout.vue";

	const quizStore = useQuizStore();
	const countriesStore = useCountriesStore();
	const { country } = storeToRefs(quizStore);
	const { countries } = storeToRefs(countriesStore);
</script>

<template>
	<DefaultLayout>
		<BaseLoading v-if="countries.isLoading" />
		<BaseError v-else-if="countries.error" :message="countries.error" />
		<div v-else-if="country">
			<PageTitle>Qual o nome desse país?</PageTitle>
			<section class="challenge">
				<div class="challenge-country">
					<QuizCountry />
				</div>
				<div class="challenge-answer">
					<header>
						<QuizUtils />
					</header>
					<QuizForm />
				</div>
			</section>
		</div>
	</DefaultLayout>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	.challenge {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 40px;
		padding-top: 48px;
	}
	.challenge-answer {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	.challenge-country {
		flex-grow: 1;
	}

	@media screen and (min-width: $md-screen) {
		.challenge {
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
		}
		.challenge-answer {
			flex-grow: 0.4;
			width: auto;
			max-width: 467px;
		}
		.challenge-country {
			flex-grow: 0.2;
		}
	}
</style>
