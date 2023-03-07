import { defineStore } from "pinia";
import { ref } from "vue";

export const useReloadRouterView = defineStore("reload-router-view", () => {
	const routerKey = ref(0);

	function reload() {
		routerKey.value += 1;
	}

	return {
		routerKey,
		reload,
	};
});
