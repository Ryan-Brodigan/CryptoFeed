import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-selection-menu-data',
  templateUrl: './coin-selection-menu-data.component.html',
  styleUrls: ['./coin-selection-menu-data.component.css']
})
export class CoinSelectionMenuDataComponent implements OnInit {
  JPYExchangeRate = 1.0;
  USDExchangeRate = 5.0;
  EURExchangeRate = 7.0;

  constructor() { }

  ngOnInit() {
  }

}
