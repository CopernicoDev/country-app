import { CountryInterface } from "../interfaces/country.interface";

export class CountryMapper {
    static mapRestCountryToCountry(restCountry: any): CountryInterface {
        return {
            capital: restCountry.capitals ? restCountry.capitals.map((c: any) => c.name).join(', ') : 'No capital',
            cca2: restCountry.codes?.alpha_2 ?? '',

            // AQUÍ ESTÁ EL CAMBIO: Extraemos ambas cosas por separado
            flag: restCountry.flag?.emoji ?? '',
            flagSvg: restCountry.flag?.url_svg ?? '',

            name: restCountry.names?.native?.spa?.common ??
                restCountry.names?.translations?.spa?.common ??
                restCountry.names?.common ?? 'Sin nombre',
            population: restCountry.population ?? 0,
        };
    }


    static mapRestCountriesToCountries(response: any): CountryInterface[] {
        // CAMBIO CLAVE: En la v5 los países están dentro de response.data.objects
        if (!response || !response.data || !Array.isArray(response.data.objects)) {
            return [];
        }
        return response.data.objects.map((country: any) => this.mapRestCountryToCountry(country));
    }
}
