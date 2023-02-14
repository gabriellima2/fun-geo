<script lang="ts" setup>
	import { RouterLink } from "vue-router";
</script>

<template>
	<RouterLink :to="{ path: '/' }">
		<i><PhGlobeHemisphereWest color="#9740EF" :size="36" /></i>
	</RouterLink>
</template>
