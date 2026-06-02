import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Search } from "../../components/search/search";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-country-page',
  imports: [Search, CountryList],
  templateUrl: './by-country-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryPage { }
