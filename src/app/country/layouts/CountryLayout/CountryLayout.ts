import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from '../../components/footer/footer';


@Component({
  selector: 'app-country-layout',
  imports: [RouterOutlet, Footer],
  templateUrl: './CountryLayout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryLayout { }
