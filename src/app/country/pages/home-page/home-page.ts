import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../../components/footer/footer';





@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage { }
