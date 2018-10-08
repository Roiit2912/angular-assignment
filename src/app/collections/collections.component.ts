import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  watchLater:any;
  favouriteMovie:any;
  badMovie:any;


  constructor(private test:TestService,private router:Router) { }

  ngOnInit() {

    this.getWatchLaterMovies();
    this.getFavouriteMovies();
    this.getBadMovies();
  }


  getWatchLaterMovies()
  {
    this.test.getWatchLaterMovies().subscribe((response)=>(this.watchLater=response));
  }


  getFavouriteMovies()
  {
    this.test.getFavouriteMovies().subscribe((response)=>(this.favouriteMovie=response));

  }


  getBadMovies()
  {
    this.test.getBadMovies().subscribe((response)=>(this.badMovie=response));
  }


  deleteWatchLater(id)
  {
    this.test.deleteWatchLater(id).subscribe(()=>this.callOnceMore());
      
    
  }

  deleteFavouriteMovies(id)
  {
    this.test.deleteFavouriteMovies(id).subscribe(()=>this.callOnceMore());
  }

  deleteBadMovies(id)
  {
    this.test.deleteBadMovies(id).subscribe(()=>this.callOnceMore());
  }

  callOnceMore()
  {
    this.getWatchLaterMovies();
    this.getFavouriteMovies();
    this.getBadMovies();

  }



   routeToMoreInfo(movieId){
    this.router.navigate(['more-info'],{
      queryParams:{
        "id":movieId
    }})
   }




}
