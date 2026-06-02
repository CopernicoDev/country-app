import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-by-country-component',
  imports: [],
  templateUrl: './by-country-component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCountryComponent {
  id = input<string>();
}
