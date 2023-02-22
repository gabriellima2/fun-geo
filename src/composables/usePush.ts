import { type RouteLocationRaw, useRouter } from "vue-router";

type UsePushReturn = (to: RouteLocationRaw) => void;

export function usePush(): UsePushReturn {
	const router = useRouter();

	const redirect = (to: RouteLocationRaw) => {
		router.push(to);
	};

	return redirect;
}
