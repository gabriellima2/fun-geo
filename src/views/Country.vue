<script setup lang="ts">
	import { useRoute } from "vue-router";

	const { params } = useRoute();
</script>

<template>
	<div>{{ params.id }}</div>
</template>

<style scoped></style>
