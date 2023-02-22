<script lang="ts" setup>
	import { useWindowSizes } from "@/composables/useWindowSizes";
	import { useNavigation } from "./composables/useNavigation";

	import NavigationButton from "./NavigationButton.vue";
	import NavigationLink from "./NavigationLink.vue";
	import Overlay from "../Overlay.vue";

	const windowSizes = useWindowSizes();
	const {
		isOpen,
		handleKeyDown,
		handleToggleNavigation,
		handleDisableNavigation,
	} = useNavigation({
		rootElementID: "#navigation-menu",
	});

	function handleKeydownOnlyMobile(e: KeyboardEvent) {
		if (windowSizes.width < 768) return handleKeyDown(e);
	}
</script>

<template>
	<div>
		<Overlay v-if="isOpen" @click="handleDisableNavigation" />
		<div id="navigation-menu" @keydown="handleKeydownOnlyMobile">
			<NavigationButton
				:is-open="isOpen"
				@click="handleToggleNavigation"
				class="mobile-navigation-button"
			/>

			<nav :class="isOpen ? 'navigation navigation--open' : 'navigation'">
				<ul class="navigation-list">
					<NavigationLink path="/" text="Explorar" />
					<NavigationLink path="/praticar" text="Praticar" />
					<NavigationLink path="/favoritos" text="Favoritos" />
				</ul>
			</nav>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "../../styles/scss/main";
	.navigation {
		display: none;
		width: 100%;
		padding-top: 40px;
		padding-bottom: 20px;
		backdrop-filter: blur(4px);
		background-color: #141414d3;
	}
	.navigation--open {
		display: block;
		position: absolute;
		top: 0%;
		left: 0%;
	}
	.navigation-list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 28px;
		padding-left: 0px;
	}
	.mobile-navigation-button {
		position: absolute;
		right: 4px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 200;
	}

	@media screen and (min-width: $md-screen) {
		.navigation {
			display: block;
			background: none;
			padding-top: 0px;
			padding-bottom: 0px;
			position: static;
		}
		.mobile-navigation-button {
			display: none;
		}
		.navigation-list {
			flex-direction: row;
			align-items: center;
			gap: 32px;
		}
	}
</style>
