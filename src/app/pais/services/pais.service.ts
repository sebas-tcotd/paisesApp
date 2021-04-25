import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private _apiURL: string = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this._apiURL}/name/${termino}`;
    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this._apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(url);
  }

  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this._apiURL}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
