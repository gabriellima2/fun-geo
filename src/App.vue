<script lang="ts" setup>
	import { RouterView, useRoute } from "vue-router";
	import { useReloadRouterView } from "./store";

	const store = useReloadRouterView();
	const { fullPath } = useRoute();
</script>

<template>
	<RouterView :key="fullPath + store.routerKey" />
</template>
