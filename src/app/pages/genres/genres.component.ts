import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';
import { Genre } from '../../models/genre';

@Component({
    selector: 'app-genres',
    templateUrl: './genres.component.html',
    styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
    genres: Genre[] = [];

    constructor(private moviesService: FilmsService) {}

    ngOnInit(): void {
        this.moviesService.getMovieGenres().subscribe((genresData) => {
            this.genres = genresData;
        });
    }
}
