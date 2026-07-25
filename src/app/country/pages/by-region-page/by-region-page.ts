import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Search } from "../../components/search/search";
import { Country } from '../../interfaces/rest-countries';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList, Search],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage {
  countries = signal<Country[]>([]);
}
