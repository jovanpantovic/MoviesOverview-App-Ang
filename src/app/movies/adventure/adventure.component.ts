import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../movie.model';
import { MoviesService } from '../movie.service';

@Component({
  selector: 'app-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.css']
})
export class AdventureComponent implements OnInit {
  movies: MovieModel[];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.getAllAdventureMovies();
  }

  public getAllAdventureMovies() {
    this.movieService.getAllAdventureMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(data);
    })
  }

  public openModal(item) {
    alert(item);
  }

}
