<script setup lang="ts">
	import { useRoute } from "vue-router";

	const { query } = useRoute();
</script>

<template>
	<div>{{ query.q }}</div>
</template>

<style scoped></style>
