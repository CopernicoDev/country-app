import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Search } from "../../components/search/search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  imports: [Search, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  countryServices = inject(CountryService)

  isLoading = signal(false);
  isError = signal<String | null>(null)
  countries = signal<CountryInterface[]>([])


  getCapital(query: string) {
    if (this.isLoading()) return

    this.isLoading.set(true)
    this.isError.set(null)

    this.countryServices.searchByCapital(query).subscribe({
      next: (countries) => {
        this.isLoading.set(false)
        this.countries.set(countries)
      },
      error: (message) => {
        this.isLoading.set(false)
        this.countries.set([])
        this.isError.set(`Country not found : ${query}`)

      }
    })
  }
}
