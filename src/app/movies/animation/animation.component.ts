import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../movie.model';
import { MoviesService } from '../movie.service';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css']
})
export class AnimationComponent implements OnInit {
  movies: MovieModel[];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
    this.getAllAnimationMovies();
  }

  public getAllAnimationMovies() {
    this.movieService.getAllAnimationMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(data);
    })
  }

  public openModal(item) {
    alert(item);
  }
  
}
