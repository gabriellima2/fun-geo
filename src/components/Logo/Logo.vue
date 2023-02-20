<script lang="ts" setup>
	import { RouterLink } from "vue-router";
	import LogoIcon from "./LogoIcon.vue";
</script>

<template>
	<RouterLink :to="{ path: '/' }">
		<LogoIcon />
	</RouterLink>
</template>
