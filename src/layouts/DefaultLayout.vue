<script lang="ts" setup>
	import BaseContainer from "../components/BaseContainer.vue";
	import TheHeader from "../components/TheHeader.vue";
</script>

<template>
	<TheHeader />
	<main class="main-content">
		<BaseContainer>
			<slot></slot>
		</BaseContainer>
	</main>
</template>

<style lang="scss" scoped>
	.main-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
