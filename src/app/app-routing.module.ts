import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';
import { SearchComponent } from './search/search.component';
import { MoreInfoComponent } from './more-info/more-info.component';

const routes: Routes = [
 {path: 'collections',component: CollectionsComponent},
 {path: 'upcoming-movies' , component : UpcomingMoviesComponent},
 {path: 'top-rated-movies', component: TopRatedMoviesComponent},
 {path:'search' , component: SearchComponent},
 {path: 'more-info' , component: MoreInfoComponent },
 {path:'', redirectTo:'/search', pathMatch: 'full'},
 {path: 'home', redirectTo: '/search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
