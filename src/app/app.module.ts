import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { CollectionsComponent } from './collections/collections.component';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { MoreInfoComponent } from './more-info/more-info.component';


@NgModule({
  declarations: [
    AppComponent,
    UpcomingMoviesComponent,
    TopRatedMoviesComponent,
    CollectionsComponent,
    SearchComponent,
    MoreInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
