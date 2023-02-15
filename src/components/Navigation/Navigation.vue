<script lang="ts" setup>
	import { ref } from "vue";

	import NavigationButton from "./NavigationButton.vue";
	import NavigationLink from "./NavigationLink.vue";

	const isOpen = ref(false);

	function handleClickOnNavigationButton() {
		isOpen.value = !isOpen.value;
	}
</script>

<template>
	<div>
		<div
			class="overlay"
			v-if="isOpen"
			@click="handleClickOnNavigationButton"
		></div>
		<div>
			<NavigationButton
				:is-open="isOpen"
				:handle-click="handleClickOnNavigationButton"
				class="navigation-mobile-button"
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
		background-color: #141414f3;
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
	.navigation-mobile-button {
		position: absolute;
		right: 4px;
		top: 50%;
		transform: translateY(-50%);
		z-index: 200;
	}
	.overlay {
		position: absolute;
		width: 100vw;
		height: 100vh;
		left: 0;
		top: 0;
		background-color: #000000ab;
	}

	@media screen and (min-width: $md-screen) {
		.navigation {
			display: block;
			background: none;
			padding-top: 0px;
			padding-bottom: 0px;
		}
		.navigation--open {
			position: static;
		}
		.navigation-mobile-button {
			display: none;
		}
		.navigation-list {
			flex-direction: row;
			align-items: center;
			gap: 32px;
		}
		.overlay {
			display: none;
		}
	}
</style>
