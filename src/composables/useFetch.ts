import { Ref, ref, UnwrapRef } from "vue";

type UseFetchReturn<TData> = {
	data: Ref<UnwrapRef<TData> | null>;
	error: Ref<string | null>;
	isLoading: Ref<boolean>;
};

export function useFetch<TData>(
	service: () => Promise<TData>
): UseFetchReturn<TData> {
	const data = ref<TData | null>(null);
	const error = ref<string | null>(null);
	const isLoading = ref(true);

	(function fetch() {
		service()
			.then(
				(serviceData) =>
					(data.value = Object.freeze(serviceData) as UnwrapRef<TData>)
			)
			.catch((err) => (error.value = (err as Error).message))
			.finally(() => (isLoading.value = false));
	})();

	return {
		data,
		error,
		isLoading,
	};
}
