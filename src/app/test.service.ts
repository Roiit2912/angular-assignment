import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

   myurl:any = 'https://hidden-falls-24762.herokuapp.com/';

  constructor(private http: HttpClient) { }


  addMovieToWatchLater(movie)
  {
    this.http.post(this.myurl+'watchLater', movie).subscribe();

  }


  addMovieToFavourites(movie){
    this.http.post(this.myurl+'favourite', movie).subscribe();
    
  }


  addMovieToBadMovies(movie)
  {
    this.http.post(this.myurl+'badMovies', movie).subscribe();

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
    return this.http.get(this.myurl+'watchLater');
  }
  

  getFavouriteMovies()
  {
    return this.http.get(this.myurl+'favourite');
  }

  getBadMovies()
  {
    return this.http.get(this.myurl+'badMovies');
  }


  deleteWatchLater(id)
  {
    const url = `https://hidden-falls-24762.herokuapp.com/watchLater/${id}`;
    return this.http.delete(url);
    
  }

  deleteFavouriteMovies(id)
  {
    const url = `https://hidden-falls-24762.herokuapp.com/favourite/${id}`;
    
   return this.http.delete(url);

  }

  deleteBadMovies(id)
  {
    const url = `https://hidden-falls-24762.herokuapp.com/BadMovies/${id}`;

    return this.http.delete(url);


  }

}
