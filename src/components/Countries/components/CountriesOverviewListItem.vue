<script setup lang="ts">
	import { useFavoriteCountries } from "../composables/useFavoriteCountries";

	import FavoriteButton from "@/components/Buttons/FavoriteButton.vue";
	import BaseCard from "@/components/BaseCard.vue";

	type CountriesOverviewListItemProps = {
		id: string;
		name: string;
		flag: {
			src: string;
			alt: string;
		};
		region: string;
	};

	const props = defineProps<CountriesOverviewListItemProps>();
	const { handleFavorite, isAlreadyFavorite } = useFavoriteCountries(props.id);
</script>

<template>
	<li class="overview-item">
		<RouterLink :to="{ path: `detalhes-nacao/${props.id}` }" class="country">
			<BaseCard variants="only-border" class="country-header">
				<img
					:src="props.flag.src"
					:alt="props.flag.alt"
					class="country-header__image"
			/></BaseCard>
			<BaseCard variants="with-background" class="country-info">
				<div class="texts">
					<h1 class="texts__title">{{ props.name }}</h1>
					<h2 class="texts__subtitle">{{ props.region }}</h2>
				</div>
				<FavoriteButton
					@click.prevent="handleFavorite"
					:is-favorite="isAlreadyFavorite"
			/></BaseCard>
		</RouterLink>
	</li>
</template>

<style scoped lang="scss">
	@import "../../../styles/scss/main";

	$border-default-style: 1px solid #242424;
	$border-radius: 8px;
	.overview-item {
		width: 100%;
		height: 100%;
	}
	.country {
		width: 100%;
		display: flex;
		flex-direction: row;

		&:hover,
		&:focus {
			transition: filter 0.1s ease-in-out;
			filter: brightness(1.3);
		}

		&:hover > .country__image,
		&:focus > .country__image {
			transition: background-color 0.1s ease-in-out;
			background-color: $util-color-900;
		}
	}
	.country-header {
		@include center(row);
		padding: 8px;
	}
	.country-header__image {
		width: 110px;
		height: 74px;
		border-radius: 6px;
	}
	.country-info {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex: 1;
		padding: 8px;
	}
	.texts {
		@include center(column);
		align-items: flex-start;
		flex: 1;
		height: 100%;
		gap: 4px;
	}
	.texts__title {
		font-size: 1rem;
		max-height: 100%;
	}
	.texts__subtitle {
		@include subtitle(0.8rem);
	}
</style>
