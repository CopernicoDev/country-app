import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Search {
  placeholder = input<string>('');
  value = output<string>();
  onSearchBy(value: string) {
    this.value.emit(value);
  }
}
