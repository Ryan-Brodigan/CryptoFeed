import { Component, OnInit } from '@angular/core';
import {FeedItem} from '../models/feedItem';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-news-menu',
  templateUrl: './news-menu.component.html',
  styleUrls: ['./news-menu.component.css']
})
export class NewsMenuComponent implements OnInit {
  feedItems: FeedItem[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
      .get<JSON[]>('src/app/data/feedItems.json')
      .pipe(
        map(items => items.map(feedItem => new FeedItem(feedItem['image'], feedItem['title'], feedItem['excerpt'], feedItem['link'])))
      ).subscribe(feedItems => this.feedItems = feedItems);
  }

}
