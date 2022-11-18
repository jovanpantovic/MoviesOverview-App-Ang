export class MovieModel {
    public id: number;
    public title: string;
    public overview: string;
    public poster_path: string;
    public vote_average: number;
    
    constructor(id: number, title: string, overview: string, poster_path: string, vote_average: number) {
     this.id = id;
     this.title = title;
     this.overview = overview;
     this.poster_path = poster_path;
     this.vote_average = vote_average;
    }
 }