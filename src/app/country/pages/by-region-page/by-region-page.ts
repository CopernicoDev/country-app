import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Search } from "../../components/search/search";
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList, Search],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage {
  countries = signal<CountryInterface[]>([]);
}
