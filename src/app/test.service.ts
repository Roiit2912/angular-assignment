import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }


  addMovieToWatchLater(movie)
  {
    this.http.post("http://localhost:3000/watchLater", movie).subscribe();

  }


  addMovieToFavourites(movie){
    this.http.post("http://localhost:3000/favourite", movie).subscribe(result => console.log("result", result));
    
  }


  addMovieToBadMovies(movie)
  {
    this.http.post("http://localhost:3000/badMovies", movie).subscribe();

  }


  searchMovieOfChoice(str:string)
  {
     let obj=this.http.get('https://api.themoviedb.org/3/search/movie?api_key=9543790893dbebe8f0dda2da217f2252&language=en-US&query='+str+'&page=1&include_adult=false');
    
    return obj;

  }

  getUpcomingMovie()
  {
   return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=9543790893dbebe8f0dda2da217f2252&language=en-US&page=1');
    
  }

  getTopRatedMovie()
  {
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=9543790893dbebe8f0dda2da217f2252&language=en-US&page=1');
  }



  getWatchLaterMovies()
  {
    return this.http.get("http://localhost:3000/watchLater");
  }
  

  getFavouriteMovies()
  {
    return this.http.get("http://localhost:3000/favourite");
  }

  getBadMovies()
  {
    return this.http.get("http://localhost:3000/badMovies");
  }


  deleteWatchLater(id)
  {
    const url = `http://localhost:3000/watchLater/${id}`;
    //console.log('url', url);
    this.http.delete(url).subscribe();
    
  }

  deleteFavouriteMovies(id)
  {
    const url = `http://localhost:3000/favourite/${id}`;
    
    this.http.delete(url).subscribe();

  }

  deleteBadMovies(id)
  {
    const url = `http://localhost:3000/BadMovies/${id}`;

    this.http.delete(url).subscribe();


  }

}
