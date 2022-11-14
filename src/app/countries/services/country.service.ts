import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }

  getCountry(countryName: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${countryName}`;
    return this.http.get<Country[]>(url);
  }



  getRegion(region: string): Observable<Country[]>{

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url).pipe(
      tap(console.log)
    )
  }
  }

