import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { RESTCountry } from '../interfaces/rest-countries';
import { CountryInterface } from '../interfaces/country.interface';
import { CountryMapper } from '../mapper/country.mapper';

const API = 'https://corsproxy.io/?https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<CountryInterface[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API}/capital/${query}`).pipe(
      map((restCountries) => CountryMapper.mapRestCountriesToCountries(restCountries)),
      catchError(() => of([]))
    );
  }
}
