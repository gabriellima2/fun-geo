<script setup lang="ts">
	type ErrorProps = {
		message?: string | null;
	};

	const props = defineProps<ErrorProps>();
</script>

<template>
	<h1 role="alert" class="base-error">
		☹️ {{ props.message || "Ocorreu um erro. Desculpe, tente novamente" }}
	</h1>
</template>

<style scoped lang="scss">
	.base-error {
		font-weight: 500;
		font-size: 1rem;
	}
</style>
