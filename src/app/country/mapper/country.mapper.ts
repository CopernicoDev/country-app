import { CountryInterface } from "../interfaces/country.interface";
import { RESTCountry } from "../interfaces/rest-countries";

export class CountryMapper {
    static mapRestCountryToCountry(restCountry: RESTCountry): CountryInterface {
        return {
            capital: restCountry.capital?.join(', ') ?? 'No capital',
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            name: restCountry.translations["spa"].common ?? 'No spanish name',
            population: restCountry.population,
        };
    }

    static mapRestCountriesToCountries(restCountries: RESTCountry[]): CountryInterface[] {
        return restCountries.map(country => this.mapRestCountryToCountry(country));
    }
}
