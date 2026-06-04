import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Search } from "../../components/search/search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital-page',
  imports: [Search, CountryList],
  templateUrl: './by-capital-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPage {
  countryServices = inject(CountryService)

  getCapital(query: string) {
    this.countryServices.searchByCapital(query).subscribe((resp) => console.log(resp))
  }
}
