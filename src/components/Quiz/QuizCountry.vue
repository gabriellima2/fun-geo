<script setup lang="ts">
	import { storeToRefs } from "pinia";
	import { PhGlobeStand, PhHouse } from "phosphor-vue";

	import { useQuizStore } from "@/store";

	import BaseCard from "../BaseCard.vue";
	import SubInfo from "../SubInfo.vue";

	import type { TIconStyle } from "@/@types/TIcon";

	const iconStyle: TIconStyle = { color: "#f2f2f2", weight: "bold", size: 24 };
	const store = useQuizStore();
	const { country } = storeToRefs(store);
</script>

<template>
	<article class="country-quiz" v-if="country">
		<BaseCard variants="only-border" class="country-flag">
			<img
				class="country-flag__image"
				:src="country.flags.png"
				:alt="'Bandeira do país que você deve adivinhar o nome'"
			/>
		</BaseCard>
		<BaseCard variants="with-background" class="country-tips">
			<SubInfo title="capital" :subtitle="country.capital[0]">
				<template #sub-info-icon
					><PhHouse
						:color="iconStyle.color"
						:weight="iconStyle.weight"
						:size="iconStyle.size"
				/></template>
			</SubInfo>

			<SubInfo title="continente" :subtitle="country.continents[0]">
				<template #sub-info-icon
					><PhGlobeStand
						:color="iconStyle.color"
						:weight="iconStyle.weight"
						:size="iconStyle.size"
				/></template>
			</SubInfo>
		</BaseCard>
	</article>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.country-quiz {
		@include center(column);
		max-width: 470px;
	}
	.country-flag {
		@include center(row);
		width: 100%;
		height: 100%;
		padding: 12px;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
	}
	.country-flag__image {
		width: 100%;
		height: 100%;
		min-height: 270px;
		border-radius: 4px;
	}
	.country-tips {
		@include center(row);
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 20px;
		width: 100%;
		padding: 20px 44px;
		border-bottom-right-radius: 8px;
		border-bottom-left-radius: 8px;
	}
</style>
