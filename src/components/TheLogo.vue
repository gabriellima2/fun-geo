<script lang="ts" setup>
	import { RouterLink } from "vue-router";
</script>

<template>
	<RouterLink :to="{ path: '/' }">
		<i class="logo__icon"
			><PhGlobeHemisphereWest color="#9740EF" :size="36"
		/></i>
	</RouterLink>
</template>

<style lang="scss" scoped>
	@import "../styles/scss/main";
	.logo__icon {
		@include center(row);
	}
</style>
