import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExchangeRates } from './interfaces/exchangeRates';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor(private http: HttpClient) { }

   getExchangeRates(coin: String): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>('http://localhost:3000/api/coins/' + coin);
  }
}
