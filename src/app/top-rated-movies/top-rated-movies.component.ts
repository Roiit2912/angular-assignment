import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {

  up_obj :any;
  

  constructor(private http: HttpClient, private test:TestService,private router:Router) { }

  ngOnInit() {

    this.getTopRatedMovies();
  }


  getTopRatedMovies()
  {
    this.test.getTopRatedMovie().subscribe((response)=>(this.up_obj=response));

  }
  
  postWatchLaterMovies(movie)
   {
     this.test.addMovieToWatchLater(movie)
   }

  postFavouriteMovies(movie)
   {
    this.test. addMovieToFavourites(movie);
   }

   postBadMovies(movie)
   {
    this.test.addMovieToBadMovies(movie);
   }

   routeToMoreInfo(movieId){
    this.router.navigate(['more-info'],{
      queryParams:{
        "id":movieId
    }})
   }





}
