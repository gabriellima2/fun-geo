import { CountryDTO } from "./country-dto";

import type { ICurrencies } from "@/interfaces/ICurrencies";

export interface CountryDetailsDTO extends CountryDTO {
	currencies: ICurrencies;
	capital: string[];
	continents: string;
	area: number;
	population: number;
}
