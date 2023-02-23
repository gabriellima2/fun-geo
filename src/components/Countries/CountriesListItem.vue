<script setup lang="ts">
	import FavoriteButton from "../Buttons/FavoriteButton.vue";

	type CountryListItemProps = {
		id: string;
		name: string;
		flag: {
			src: string;
			alt: string;
		};
		region: string;
	};

	const props = defineProps<CountryListItemProps>();

	function handleFavorite(id: string) {
		console.log(id);
	}
</script>

<template>
	<li class="country-list-item">
		<RouterLink :to="{ path: `detalhes-nacao/${props.id}` }" class="country">
			<div class="country__image-container">
				<img
					:src="props.flag.src"
					:alt="props.flag.alt"
					class="country__image"
				/>
			</div>
			<section class="preview">
				<div class="texts">
					<h1 class="texts__title">{{ props.name }}</h1>
					<h2 class="texts__subtitle">{{ props.region }}</h2>
				</div>
				<FavoriteButton
					@click.prevent="() => handleFavorite(props.id)"
					:is-favorite="false"
				/>
			</section>
		</RouterLink>
	</li>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	$border-default-style: 1px solid #242424;
	$border-radius: 8px;
	.country-list-item {
		width: 100%;
		height: 100%;
	}
	.country {
		width: 100%;
		display: flex;
		flex-direction: row;

		&:hover > .preview,
		&:focus > .preview {
			transition: filter 0.1s ease-in-out;
			filter: brightness(1.3);
		}

		&:hover > .country__image-container,
		&:focus > .country__image-container {
			transition: background-color 0.1s ease-in-out;
			background-color: $util-color-900;
		}
	}
	.country__image-container {
		@include center(row);
		border-top-left-radius: $border-radius;
		border-bottom-left-radius: $border-radius;
		border: $border-default-style;
		border-right: 0;
		padding: 8px;
	}
	.country__image {
		width: 110px;
		height: 74px;
		border-radius: 6px;
	}
	.preview {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		flex: 1;
		padding: 4px 4px 4px 16px;
		border-top-right-radius: $border-radius;
		border-bottom-right-radius: $border-radius;
		border: $border-default-style;
		background-color: $util-color-900;
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
		font-size: 0.8rem;
		font-weight: 500;
		opacity: 0.6;
	}
</style>
