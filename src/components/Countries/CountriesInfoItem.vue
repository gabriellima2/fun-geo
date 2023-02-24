<script setup lang="ts">
	import {
		PhCoins,
		PhGlobeStand,
		PhHouse,
		PhPerspective,
		PhUsersThree,
	} from "phosphor-vue";

	import { useFavoriteCountries } from "./composables/useFavoriteCountries";

	import FavoriteButton from "../Buttons/FavoriteButton.vue";
	import SubInfo from "./components/SubInfo.vue";

	import type { ICurrencies } from "@/interfaces/ICurrencies";

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

	const iconStyle: Pick<typeof PhCoins, "color" | "weight" | "size"> = {
		color: "#f2f2f2",
		weight: "bold",
		size: 24,
	};
	const props = defineProps<CountriesInfoItemProps>();
	const { handleFavorite } = useFavoriteCountries();
</script>

<template>
	<article>
		<header>
			<img :src="props.flag.src" :alt="props.flag.alt" />
		</header>
		<section>
			<div>
				<div>
					<h1>{{ props.name }}</h1>
					<h2>{{ props.region }}</h2>
				</div>
				<FavoriteButton
					@click.prevent="() => handleFavorite(props.id)"
					:is-favorite="false"
				/>
			</div>
			<div>
				<div>
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
				<div>
					<SubInfo
						title="moeda oficial"
						:subtitle="props.currencies[Object.keys(props.currencies)[0]].name"
					>
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
			</div>
		</section>
	</article>
</template>

<style scoped></style>
