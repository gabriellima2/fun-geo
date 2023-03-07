import { watch } from "vue";
import { useRoute, useRouter, type RouteLocationPathRaw } from "vue-router";

import { useReloadRouterView } from "@/store";

type UsePushReturn = (to: RouteLocationPathRaw) => void;

export function usePush(): UsePushReturn {
	const router = useRouter();
	const route = useRoute();
	const store = useReloadRouterView();

	const redirect = (to: RouteLocationPathRaw) => router.replace(to);

	watch(route, (to, from) => {
		if (!from.query.q && !to.query.q) return;
		store.reload();
	});

	return redirect;
}
