import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {CoinData} from '../models/coinData';

@Component({
  selector: 'app-coin-selection-menu',
  templateUrl: './coin-selection-menu.component.html',
  styleUrls: ['./coin-selection-menu.component.css']
})
export class CoinSelectionMenuComponent implements OnInit {
  coins: CoinData[];
  selectedCoin = 'BTC';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http
      .get<CoinData[]>('src/app/data/coins.json')
      .pipe(
        map(items => items.map(coin => new CoinData(coin['name'], coin['valueRate'], coin['sentiment'])))
      ).subscribe(coins => this.coins = coins);
  }

  onCoinSelect(coin: string) {
    this.selectedCoin = coin;
  }
}
