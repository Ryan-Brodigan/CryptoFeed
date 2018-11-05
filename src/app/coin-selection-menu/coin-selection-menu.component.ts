import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-coin-selection-menu',
  templateUrl: './coin-selection-menu.component.html',
  styleUrls: ['./coin-selection-menu.component.css']
})
export class CoinSelectionMenuComponent implements OnInit {
  coins: String[];
  selectedCoin = 'BTC';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http
      .get<String[]>('src/app/data/coins.json')
      .pipe(
        map(items => items.map(coins => coins['name']))
      ).subscribe(coins => this.coins = coins);
  }

  onCoinSelect(coin: string) {
    this.selectedCoin = coin;
  }
}
