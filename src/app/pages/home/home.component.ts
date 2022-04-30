import { Component, OnInit } from '@angular/core';
import { TV } from '../../models/tv';
import { Movie } from '../../models/movie';
import { FilmsService } from '../../services/films.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    popularMovies: Movie[] = [];
    upcomingMovies: Movie[] = [];
    topRatedMovies: Movie[] = [];
    popularTVShows: TV[] = [];

    constructor(private filmsService: FilmsService) {}

    ngOnInit(): void {
        this.filmsService.getMovies('popular').subscribe((movies) => {
            this.popularMovies = movies;
        });

        this.filmsService.getMovies('upcoming').subscribe((movies) => {
            this.upcomingMovies = movies;
        });

        this.filmsService.getMovies('top_rated').subscribe((movies) => {
            this.topRatedMovies = movies;
        });

        this.filmsService.getTVShows('popular').subscribe((shows) => {
            this.popularTVShows = shows;
            //console.log(this.popularTVShows);
        });
    }
}
