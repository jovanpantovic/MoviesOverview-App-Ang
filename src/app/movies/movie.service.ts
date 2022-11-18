import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GenreModel } from './genre.model';
import { MovieModel } from './movie.model';

@Injectable()
export class MoviesService {
  actionApi: string = `https://api.themoviedb.org/3/discover/movie?with_genres=${28}&api_key=d38aa8716411ef7d8e9054b34a6678ac`;
  adventureApi: string = `https://api.themoviedb.org/3/discover/movie?with_genres=${12}&api_key=d38aa8716411ef7d8e9054b34a6678ac`;
  animationApi: string = `https://api.themoviedb.org/3/discover/movie?with_genres=${16}&api_key=d38aa8716411ef7d8e9054b34a6678ac`;
  genreUrl: string = `http://localhost:3000/genres`;

  constructor(private http: HttpClient) {}

  getAllActionMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(this.actionApi);
  }

  getAllAdventureMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(this.adventureApi);
  }

  getAllAnimationMovies(): Observable<MovieModel[]> {
    return this.http.get<MovieModel[]>(this.animationApi);
  }

  getAllGenres(): Observable<GenreModel[]> {
    return this.http.get<GenreModel[]>(this.genreUrl);
  }

}
