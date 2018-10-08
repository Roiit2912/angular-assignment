import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  id:any;
  myMovie:any;

  constructor(private http:HttpClient,  private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
    });

   let obj= this.http.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=9543790893dbebe8f0dda2da217f2252&language=en-US');

   obj.subscribe((response)=>(this.myMovie=response));
  }

}
