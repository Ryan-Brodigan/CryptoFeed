import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import { CoinSelectionMenuComponent } from './coin-selection-menu/coin-selection-menu.component';
import {HttpClientModule} from '@angular/common/http';
import { CoinSelectionMenuDataComponent } from './coin-selection-menu-data/coin-selection-menu-data.component';
import {RouterModule, Routes} from '@angular/router';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { NewsMenuComponent } from './news-menu/news-menu.component';

const appRoutes: Routes = [
  { path: 'home', component: ProfileMenuComponent},
  { path: 'data', component: CoinSelectionMenuComponent },
  { path: 'news', component: NewsMenuComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoinSelectionMenuComponent,
    CoinSelectionMenuDataComponent,
    ProfileMenuComponent,
    NewsMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
