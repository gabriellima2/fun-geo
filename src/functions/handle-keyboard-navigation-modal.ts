import { changeFocusEl } from "./change-focus-el";

type HandleKeyboardNavigationModalConfigParams = {
	querySelectorRootEl: string;
	querySelectorChildrenEls: string;
};

export function handleKeyboardNavigationModal(
	e: KeyboardEvent,
	config: HandleKeyboardNavigationModalConfigParams
) {
	const { querySelectorRootEl, querySelectorChildrenEls } = config;
	const rootElement = document.querySelector(querySelectorRootEl);
	if (!rootElement) return;

	const focusableEls = rootElement.querySelectorAll(querySelectorChildrenEls);
	const firstFocusableEl = focusableEls[0];
	const currentFocusabelEl = document.activeElement;
	const lastFocusableEl = focusableEls[focusableEls.length - 1];

	if (e.shiftKey && currentFocusabelEl === lastFocusableEl) return;
	if (
		e.shiftKey &&
		e.key === "Tab" &&
		currentFocusabelEl === firstFocusableEl
	) {
		changeFocusEl(lastFocusableEl);
		return e.preventDefault();
	}
	if (currentFocusabelEl === lastFocusableEl) {
		changeFocusEl(firstFocusableEl);
		return e.preventDefault();
	}
}
