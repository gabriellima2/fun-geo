<template>
	<div class="container">
		<slot></slot>
	</div>
</template>

<style lang="scss" scoped>
	@import "../styles/scss/main";
	.container {
		@include default-spacings();
		width: 100%;
		max-width: 1300px;
	}
</style>
