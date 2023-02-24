<script setup lang="ts">
	import { useFavoriteCountries } from "./composables/useFavoriteCountries";

	import FavoriteButton from "../Buttons/FavoriteButton.vue";
	import BaseCard from "../BaseCard.vue";

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
	const { handleFavorite } = useFavoriteCountries();
</script>

<template>
	<li class="overview-item">
		<RouterLink :to="{ path: `detalhes-nacao/${props.id}` }" class="country">
			<BaseCard class="overview-item">
				<template #base-card-header>
					<div class="country__image-container">
						<img
							:src="props.flag.src"
							:alt="props.flag.alt"
							class="country__image"
						/>
					</div>
				</template>
				<template #base-card-body>
					<div class="preview">
						<div class="texts">
							<h1 class="texts__title">{{ props.name }}</h1>
							<h2 class="texts__subtitle">{{ props.region }}</h2>
						</div>
						<FavoriteButton
							@click.prevent="() => handleFavorite(props.id)"
							:is-favorite="false"
						/>
					</div>
				</template>
			</BaseCard>
		</RouterLink>
	</li>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

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
	.country__image-container {
		@include center(row);
	}
	.country__image {
		width: 110px;
		height: 74px;
		border-radius: 6px;
	}
	.preview {
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex: 1;
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
