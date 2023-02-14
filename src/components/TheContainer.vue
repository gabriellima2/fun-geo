<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
	@import "../styles/scss/main";
	.container {
		max-width: 1300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
