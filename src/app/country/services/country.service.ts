import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { RESTCountry } from '../interfaces/rest-countries';
import { CountryInterface } from '../interfaces/country.interface';
import { CountryMapper } from '../mapper/country.mapper';

// 1. Nueva URL base de la versión 5
const API = 'https://api.restcountries.com/countries/v5';
// 2. Tu token personal (el de tu captura)
const API_KEY = 'rc_live_8472ac17909547a4b7169f8ecef1f039';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<CountryInterface[]> {
    query = query.toLowerCase();

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${API_KEY}`
    });

    // CAMBIO AQUÍ: Ya no usamos /capital/, usamos ?q=
    // También usamos <any> porque el formato que llega cambió totalmente
    return this.http.get<any>(`${API}?q=${query}`, { headers }).pipe(
      map((response) => CountryMapper.mapRestCountriesToCountries(response)),
      catchError(() => of([]))
    );
  }
}
