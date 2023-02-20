<script lang="ts" setup>
	import Navigation from "./Navigation/Navigation.vue";
	import BaseContainer from "./BaseContainer.vue";
	import Logo from "./Logo/Logo.vue";
</script>

<template>
	<header class="header">
		<BaseContainer class="header-content">
			<Logo />
			<Navigation />
		</BaseContainer>
	</header>
</template>

<style lang="scss" scoped>
	@import "../styles/scss/main";
	.header {
		@include center(row);
	}
	.header-content {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}
</style>
