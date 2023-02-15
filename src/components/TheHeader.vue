<script lang="ts" setup>
	import Navigation from "./Navigation/Navigation.vue";
	import TheContainer from "./TheContainer.vue";
	import TheLogo from "./TheLogo.vue";
</script>

<template>
	<header class="header">
		<TheContainer class="header-content">
			<TheLogo />
			<Navigation />
		</TheContainer>
	</header>
</template>

<style lang="scss" scoped>
	@import "../styles/scss/main";
	.header {
		@include center(row);
	}
	.header-content {
		@include default-spacings();
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		position: relative;
	}
</style>
