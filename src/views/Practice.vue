<script setup lang="ts">
	import CountryQuiz from "@/components/Quiz/CountryQuiz.vue";
	import UtilsQuiz from "@/components/Quiz/UtilsQuiz.vue";
	import FormQuiz from "@/components/Quiz/FormQuiz.vue";
	import PageTitle from "@/components/PageTitle.vue";

	import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
	<DefaultLayout>
		<PageTitle>Qual o nome desse país?</PageTitle>
		<section class="challenge">
			<div class="challenge-country">
				<CountryQuiz />
			</div>
			<div class="challenge-answer">
				<header>
					<UtilsQuiz />
				</header>
				<FormQuiz />
			</div>
		</section>
	</DefaultLayout>
</template>

<style scoped lang="scss">
	@import "../styles/scss/main";

	.challenge {
		@include center(row);
		flex-wrap: wrap;
		gap: 40px;
		padding-top: 48px;
	}
	.challenge-answer {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	.challenge-country {
		flex-grow: 1;
	}

	@media screen and (min-width: $md-screen) {
		.challenge {
			justify-content: space-around;
		}
		.challenge-answer {
			flex-grow: 0.4;
		}
		.challenge-country {
			flex-grow: 0.2;
		}
	}
</style>
