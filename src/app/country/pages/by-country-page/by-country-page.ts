import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Search } from "../../components/search/search";
import { CountryList } from "../../components/country-list/country-list";
import { Country } from '../../interfaces/rest-countries';

@Component({
  selector: 'app-by-country-page',
  imports: [Search, CountryList],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage {
  countries = signal<Country[]>([]);
}
