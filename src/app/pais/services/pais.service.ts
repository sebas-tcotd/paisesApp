import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  get httpParams(): HttpParams {
    return new HttpParams().set(
      'fields',
      'name;alpha2Code;capital;population;numericCode;translations;flag'
    );
  }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this._apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this._apiURL}/region/${region}`;
    return this.http
      .get<Country[]>(url, { params: this.httpParams })
      .pipe(tap(console.log));
  }
}
