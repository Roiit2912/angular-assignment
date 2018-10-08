import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {FormsModule} from '@angular/forms';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchMovie:any;
  searchText:string="";

  constructor(private http:HttpClient, private test:TestService,private router:Router)
  {

  }

  searchMe(str:string)
  {
    // let obj=this.http.get('https://api.themoviedb.org/3/search/movie?api_key=9543790893dbebe8f0dda2da217f2252&language=en-US&query='+str+'&page=1&include_adult=false');
    
    // obj.subscribe((response)=>(this.searchMovie=response));
    this.test.searchMovieOfChoice(str).subscribe((response)=>(this.searchMovie=response));

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
   


  ngOnInit() {
  }



}
