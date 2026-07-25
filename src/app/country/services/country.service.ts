import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../interfaces/rest-countries';
import { catchError, of } from 'rxjs';

const API = 'https://corsproxy.io/?https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient)

  searchByCapital(query: string) {
    query = query.toLowerCase()
    return this.http.get<Country[]>(`${API}/capital/${query}`).pipe(
      catchError(() => of([]))
    )


  }
}
