export interface CountryDTO {
	name: { common: string };
	translations: { por: { common: string } };
	flags: { png: string; alt: string };
	region: string;
	capital: string[];
	continents: string[];
}
