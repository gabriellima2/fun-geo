<script setup lang="ts">
	import LogoIcon from "./Logo/LogoIcon.vue";
</script>

<template>
	<span class="loading__logo">
		<LogoIcon />
	</span>
</template>

<style lang="scss" scoped>
	.loading__logo {
		animation: jump 1s linear infinite;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%);
	}

	@keyframes jump {
		0% {
			transform: translate(-50%, -50%);
		}
		50% {
			transform: translate(-50%, -150%);
		}
		55% {
			transform: translate(-50%, -150%) rotate(15deg);
		}
		60% {
			transform: translate(-50%, -150%) rotate(-15deg);
		}
		65% {
			transform: translate(-50%, -150%) rotate(15deg);
		}
		70% {
			transform: translate(-50%, -150%) rotate(-15deg);
		}
		100% {
			transform: translate(-50%, -50%);
		}
	}
</style>
