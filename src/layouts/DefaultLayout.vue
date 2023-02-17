<script lang="ts" setup>
	import TheContainer from "../components/TheContainer.vue";
	import TheHeader from "../components/TheHeader.vue";
</script>

<template>
	<TheHeader />
	<main class="main-content">
		<TheContainer>
			<slot></slot>
		</TheContainer>
	</main>
</template>

<style lang="scss" scoped>
	.main-content {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
