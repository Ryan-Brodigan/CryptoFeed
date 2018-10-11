import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { CoinsService } from '../coins.service';
import {map} from 'rxjs/operators';
import { ExchangeRates } from '../interfaces/exchangeRates';

@Component({
  selector: 'app-coin-selection-menu-data',
  templateUrl: './coin-selection-menu-data.component.html',
  styleUrls: ['./coin-selection-menu-data.component.css']
})
export class CoinSelectionMenuDataComponent implements OnInit, OnChanges {
  @Input('selectedCoin')
  selectedCoin: string;

  exchangeRates: ExchangeRates = {USD: 0.0, EUR: 0.0, JPY: 0.0};

  constructor(private coinService: CoinsService) { }

  ngOnInit() {
    this.getExchangeRates();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedCoin = changes.selectedCoin.currentValue;
    this.getExchangeRates();
  }

  getExchangeRates() {
    this.coinService
      .getExchangeRates(this.selectedCoin)
      .pipe(map(rates => this.exchangeRates = rates))
      .subscribe();
  }
}
