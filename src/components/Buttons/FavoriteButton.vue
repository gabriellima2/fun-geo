<script setup lang="ts">
	import { PhHeart } from "phosphor-vue";
	import { ButtonHTMLAttributes } from "vue";

	interface FavoriteButtonProps extends Omit<ButtonHTMLAttributes, "type"> {
		isFavorite: boolean;
	}

	const props = defineProps<FavoriteButtonProps>();
</script>

<template>
	<button
		type="button"
		title="Favoritar"
		class="favorite-button"
		v-bind="$attrs"
	>
		<i class="favorite-button__icon"
			><PhHeart
				:size="24"
				:weight="props.isFavorite ? 'duotone' : 'regular'"
				:color="props.isFavorite ? '#9740EF' : '#f2f2f2'"
		/></i>
	</button>
</template>

<style scoped lang="scss">
	@import "../../styles/scss/main";

	.favorite-button {
		padding: 8px;
		background: none;
		border: none;
		cursor: pointer;

		&:hover {
			background-color: #f2f2f21d;
			border-radius: 100%;
		}
	}
	.favorite-button__icon {
		@include center(row);
	}
</style>
