import { Component, OnInit, Input } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
//import { map } from 'rxjs/operators';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {

  up_obj :any;
  //@Input() postobj : any;
  count:number=0;

  constructor(private http: HttpClient, private test:TestService,private router:Router) { }

  ngOnInit() {

    //  let obj=this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=9543790893dbebe8f0dda2da217f2252&language=en-US&page=1');
    
    //  obj.subscribe((response)=>(this.up_obj=response));

    //console.log(this.up_obj);
   //this.test. addMovieToFavourites(movie);

   this.getUpcomingMovies();

  }

  getUpcomingMovies()
  {
    this.test.getUpcomingMovie().subscribe((response)=>(this.up_obj=response));

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


  // addMovieToFavourites(movie){
  //   this.http.post("http://localhost:3000/favourite", movie).subscribe(result => console.log("result", result));
  // }

  

}
