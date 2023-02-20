import { type Ref, ref } from "vue";
import { scrollToTop } from "@/utils/scroll-to-top";

type UsePaginationParams<T> = {
	pageLimit: number;
	data: T[];
};

type UsePaginationReturn = {
	currentPage: Ref<number>;
	itemsPerPage: number;
	nextPage: () => void;
	previousPage: () => void;
};

export function usePagination<T>(
	params: UsePaginationParams<T>
): UsePaginationReturn {
	const { data, pageLimit } = params;
	const currentPage = ref(1);
	const itemsPerPage = Math.ceil(data.length / pageLimit);

	const nextPage = () => {
		if (currentPage.value === pageLimit) return;
		currentPage.value += 1;
		scrollToTop();
	};

	const previousPage = () => {
		if (currentPage.value === 1) return;
		currentPage.value -= 1;
	};

	return {
		currentPage,
		itemsPerPage,
		nextPage,
		previousPage,
	};
}
