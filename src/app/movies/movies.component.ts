import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { GenreModel } from './genre.model';
import { MoviesService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  //@Output() isLogout = new EventEmitter<void>()
  genres: GenreModel[];

  constructor(private movieService: MoviesService, public firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    this.getAllGenres();
  }

  public getAllGenres() {
    this.movieService.getAllGenres().subscribe(data => {
      this.genres = data;
    })
  }

  logout() {
    this.firebaseService.logout()
    //this.isLogout.emit()
    this.router.navigate(['/login'])
  }

}
