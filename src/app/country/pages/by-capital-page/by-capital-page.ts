import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { Search } from "../../components/search/search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-countries';
import { CountryInterface } from '../../interfaces/country.interface';
import { of } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [Search, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  countryServices = inject(CountryService)
  query = signal<string>('')

  countryResource = rxResource<CountryInterface[], { query: string }>({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) return of([]);
      return this.countryServices.searchByCapital(params.query);
    }
  })
}
