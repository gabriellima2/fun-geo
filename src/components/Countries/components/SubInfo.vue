<script setup lang="ts">
	type SubInfoProps = {
		title: string;
		subtitle: string;
	};

	const props = defineProps<SubInfoProps>();
</script>

<template>
	<section class="sub-info">
		<i class="sub-info__icon"><slot name="sub-info-icon"></slot></i>
		<div class="sub-info__texts">
			<h2>{{ props.title }}</h2>
			<h3>{{ props.subtitle }}</h3>
		</div>
	</section>
</template>

<style scoped lang="scss">
	@import "../../../styles/scss/main";

	.sub-info {
		@include center(row);
		gap: 8px;
		flex-wrap: wrap;
	}
	.sub-info__icon {
		@include center(row);
	}
	.sub-info__texts {
		display: flex;
		flex-direction: column;
		gap: 4px;
		text-transform: capitalize;

		& > h2 {
			font-size: 0.8rem;
			font-weight: 600;
		}

		& > h3 {
			opacity: 0.6;
			font-size: 0.8rem;
			font-weight: 600;
		}
	}
</style>
