import { CountryDTO } from "./country-dto";

export interface CountryDetailsDTO extends CountryDTO {
	currencies: { [key: string]: { name: string; Symbol: string } };
	capital: string[];
	continents: string;
	languages: { [key: string]: string };
	area: number;
	population: number;
}
