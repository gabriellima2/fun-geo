import { onMounted, onUnmounted, ref } from "vue";
import { handleKeyboardNavigationModal } from "../../../functions/handle-keyboard-navigation-modal";

type UseNavigationParams = {
	rootElementID: string;
};

export function useNavigation({ rootElementID }: UseNavigationParams) {
	const isOpen = ref(false);

	function handleToggleNavigation() {
		isOpen.value = !isOpen.value;
	}

	function handleDisableNavigation() {
		isOpen.value = false;
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === "Tab" || e.key === "Shift")
			return handleKeyboardNavigationModal(e, {
				querySelectorRootEl: rootElementID,
				querySelectorChildrenEls: "a[href], button",
			});
		if (e.key === "Escape") return handleDisableNavigation();
	}

	onMounted(() => {
		window.addEventListener("resize", handleDisableNavigation);
		window.addEventListener("scroll", handleDisableNavigation);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", handleDisableNavigation);
		window.removeEventListener("scroll", handleDisableNavigation);
	});

	return {
		isOpen,
		handleKeyDown,
		handleToggleNavigation,
		handleDisableNavigation,
	};
}
