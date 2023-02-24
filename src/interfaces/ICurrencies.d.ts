interface ICurrencie {
	name: string;
	Symbol: string;
}

export interface ICurrencies {
	[key: string]: ICurrencie;
}
