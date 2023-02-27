<script setup lang="ts">
	import { type ButtonHTMLAttributes, computed } from "vue";
	import { PhHeart } from "phosphor-vue";

	import BaseButton from "./BaseButton.vue";
	import type { TIconStyle } from "@/@types/TIcon";

	interface FavoriteButtonProps extends Omit<ButtonHTMLAttributes, "type"> {
		isFavorite: boolean;
	}

	const props = defineProps<FavoriteButtonProps>();

	const icon = computed(() => {
		return {
			weight: props.isFavorite ? "duotone" : "regular",
			color: props.isFavorite ? "#9740EF" : "#f2f2f2",
		} as TIconStyle;
	});
</script>

<template>
	<BaseButton
		type="button"
		title="Favoritar"
		class="favorite-button"
		v-bind="$attrs"
	>
		<template #base-button-icon>
			<PhHeart :size="24" :weight="icon.weight" :color="icon.color" />
		</template>
	</BaseButton>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.favorite-button {
		border-radius: 100%;
	}
</style>
