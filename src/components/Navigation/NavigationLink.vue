<script lang="ts" setup>
	import { RouterLink } from "vue-router";

	type NavigationLinkProps = {
		text: string;
		path: string;
	};

	const props = defineProps<NavigationLinkProps>();
</script>

<template>
	<li>
		<RouterLink class="navigation-link" :to="{ path: props.path }">{{
			props.text
		}}</RouterLink>
	</li>
</template>

<style lang="scss" scoped>
	@import "../../styles/scss/main";
	$active-font-color: $brand-color-400;
	$active-background-color: $brand-color-600;
	.navigation-link {
		display: block;
		padding: 8px 16px;
		position: relative;

		&::after {
			content: "";
			display: block;
			width: 0%;
			height: 4px;
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			border-radius: 8px;
			background-color: $active-background-color;
			transition: width 0.2s ease;
		}

		&:hover::after {
			width: 55%;
		}

		&:hover {
			color: $active-font-color;
		}
	}
	.router-link-active {
		color: $active-font-color;
		pointer-events: none;
		opacity: 0.8;

		&::after {
			width: 50%;
			background-color: $active-background-color;
		}
	}
	@media screen and (min-width: $md-screen) {
		.navigation-link {
			padding: 8px;
		}
	}
</style>
