import { RESTCountry } from "../interfaces/rest-countries";

export class CountryMapper {
    static mapRestCountryToCountry(restCountry: RESTCountry) {
        return {
            capital: restCountry.capital,
            cca2: restCountry.cca2,
            flag: restCountry.flag,
            flagsvg: restCountry.flags.svg,
            name: restCountry.name.common,
            population: restCountry.population,
        }
    }

    static mapRestCountriesToCountries(restCountries: RESTCountry[]) {
        return restCountries.map(country => this.mapRestCountryToCountry(country));
    }
}
