import { onMounted, onUnmounted, reactive } from "vue";

type Sizes = {
	width: number;
	height: number;
};

export function useWindowSizes(): Sizes {
	const sizes = reactive<Sizes>({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	function updateSizes() {
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;
	}

	onMounted(() => {
		window.addEventListener("resize", updateSizes);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", updateSizes);
	});

	return sizes;
}
