import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../movie.model';
import { MoviesService } from '../movie.service';

//import { MatDialog } from '@angular/material/dialog';
//import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  movies: MovieModel[];

  constructor(private movieService: MoviesService/*, private dialogRef: MatDialog*/) { }

  ngOnInit() {
    this.getAllActionMovies();
  }

  public getAllActionMovies() {
    this.movieService.getAllActionMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(data);
    })
  }

  public openModal(item) {
    alert(item);
  }

  /*openDialog() {
    this.dialogRef.open(PopUpComponent);
  }*/

}
