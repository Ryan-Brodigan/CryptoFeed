import { Component, OnInit } from '@angular/core';
import {CoinData} from '../models/coinData';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {FeedItem} from '../models/feedItem';

@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.css']
})
export class ProfileMenuComponent implements OnInit {
  username = 'Joe';
  coins: CoinData[];
  feedItems: FeedItem[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<CoinData[]>('src/app/data/coins.json')
      .pipe(
        map(items => items.map(coin => new CoinData(coin['name'], coin['valueRate'], coin['sentiment'])))
      ).subscribe(coins => this.coins = coins);

    this.http
      .get<JSON[]>('src/app/data/feedItems.json')
      .pipe(
        map(items => items.map(feedItem => new FeedItem(feedItem['image'], feedItem['title'], feedItem['excerpt'], feedItem['link'])))
      ).subscribe(feedItems => this.feedItems = feedItems);
  }

}
