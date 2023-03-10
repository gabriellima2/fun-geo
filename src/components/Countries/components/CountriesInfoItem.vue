<script setup lang="ts">
	import { computed } from "vue";
	import {
		PhCoins,
		PhGlobeStand,
		PhHouse,
		PhPerspective,
		PhUsersThree,
	} from "phosphor-vue";

	import { useFavoriteCountries } from "../composables/useFavoriteCountries";

	import FavoriteButton from "@/components/Buttons/FavoriteButton.vue";
	import BaseCard from "@/components/BaseCard.vue";
	import SubInfo from "@/components/SubInfo.vue";

	import type { ICurrencies } from "@/interfaces/ICurrencies";
	import type { TIconStyle } from "@/@types/TIcon";

	type CountriesInfoItemProps = {
		id: string;
		name: string;
		capital: string;
		continent: string;
		region: string;
		flag: {
			src: string;
			alt: string;
		};
		currencies: ICurrencies;
		area: number;
		population: number;
	};

	const props = defineProps<CountriesInfoItemProps>();
	const { handleFavorite, isAlreadyFavorite } = useFavoriteCountries(props.id);

	const iconStyle: TIconStyle = { color: "#f2f2f2", weight: "bold", size: 24 };
	const officialCurrencyName = computed(
		() => props.currencies[Object.keys(props.currencies)[0]].name
	);
</script>

<template>
	<article class="country-info">
		<BaseCard variants="only-border" class="country-info-header">
			<img
				class="country-info-header__image"
				:src="props.flag.src"
				:alt="props.flag.alt"
			/>
		</BaseCard>
		<BaseCard variants="with-background" class="country-info-body">
			<div class="country-info-overview">
				<div>
					<h1>{{ props.name }}</h1>
					<h2 class="country-info-overview__subtitle">{{ props.region }}</h2>
				</div>
				<FavoriteButton
					@click.prevent="handleFavorite"
					:is-favorite="isAlreadyFavorite"
				/>
			</div>
			<section class="country-info-additional">
				<div class="country-info-cols">
					<SubInfo title="capital" :subtitle="props.capital">
						<template #sub-info-icon
							><PhHouse
								:color="iconStyle.color"
								:weight="iconStyle.weight"
								:size="iconStyle.size"
						/></template>
					</SubInfo>
					<SubInfo title="área de" :subtitle="`${props.area} Km²`">
						<template #sub-info-icon
							><PhPerspective
								:color="iconStyle.color"
								:weight="iconStyle.weight"
								:size="iconStyle.size"
						/></template>
					</SubInfo>
					<SubInfo title="continente" :subtitle="props.continent">
						<template #sub-info-icon
							><PhGlobeStand
								:color="iconStyle.color"
								:weight="iconStyle.weight"
								:size="iconStyle.size"
						/></template>
					</SubInfo>
				</div>
				<div class="country-info-cols">
					<SubInfo title="moeda oficial" :subtitle="officialCurrencyName">
						<template #sub-info-icon
							><PhCoins
								:color="iconStyle.color"
								:weight="iconStyle.weight"
								:size="iconStyle.size"
						/></template>
					</SubInfo>
					<SubInfo title="população de" :subtitle="`${props.population}`">
						<template #sub-info-icon
							><PhUsersThree
								:color="iconStyle.color"
								:weight="iconStyle.weight"
								:size="iconStyle.size"
						/></template>
					</SubInfo>
				</div>
			</section>
		</BaseCard>
	</article>
</template>

<style scoped lang="scss">
	@import "../../../styles/scss/main";

	.country-info {
		display: flex;
		flex-direction: column;
		max-width: 800px;
	}
	.country-info-header {
		@include center(row);
		height: 100%;
		padding: 12px;
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
	}
	.country-info-header__image {
		width: 100%;
		height: 100%;
		max-width: 350px;
		border-radius: 8px;
	}
	.country-info-body {
		padding: 16px;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
	}
	.country-info-overview {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: start;
		margin-bottom: 24px;
	}
	.country-info-overview__subtitle {
		@include subtitle(1rem);
	}
	.country-info-additional {
		width: 100%;
		display: flex;
		justify-content: space-between;
		gap: 20px;
		flex-wrap: wrap;
	}
	.country-info-cols {
		display: flex;
		flex-direction: column;
		align-items: start;
		gap: 20px;
	}

	@media screen and (min-width: $md-screen) {
		.country-info-header__image {
			max-width: none;
		}
		.country-info {
			flex-direction: row;
		}
		.country-info-header {
			border-radius: 0px;
			border-top-left-radius: 10px;
			border-bottom-left-radius: 10px;
		}
		.country-info-body {
			border-radius: 0px;
			border-top-right-radius: 10px;
			border-bottom-right-radius: 10px;
		}
	}
</style>
