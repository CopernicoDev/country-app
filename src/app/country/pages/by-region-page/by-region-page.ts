import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryList } from "../../components/country-list/country-list";
import { Search } from "../../components/search/search";

@Component({
  selector: 'app-by-region-page',
  imports: [CountryList, Search],
  templateUrl: './by-region-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByRegionPage { }
