import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Search } from "../../components/search/search";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-by-capital-page',
  imports: [Search, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
}
