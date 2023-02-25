type LocalStorageServiceParams<T> = {
	key: string;
	value: T;
};

class LocalStorageService {
	set<T>({ key, value }: LocalStorageServiceParams<T>) {
		window.localStorage.setLocalStorageServiceParams(
			key,
			JSON.stringify(value)
		);
	}
	get<T>({ key }: Pick<LocalStorageServiceParams<T>, "key">): T | null {
		const item = window.localStorage.getItem(key);
		if (!item) return null;
		return JSON.parse(item);
	}
	remove<T>({ key }: Pick<LocalStorageServiceParams<T>, "key">) {
		window.localStorage.removeItem(key);
	}
}

export const localStorageService = new LocalStorageService();
