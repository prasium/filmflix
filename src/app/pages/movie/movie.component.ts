import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    Movie,
    MovieCredits,
    MovieImages,
    MovieVideo,
} from '../../models/movie';
import { FilmsService } from '../../services/films.service';
import { IMAGES_SIZE } from '../../constants/images-sizes';
import { first } from 'rxjs';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] = [];
    movieImages: MovieImages | null = null;
    movieCredits: MovieCredits | null = null;
    imagesSize = IMAGES_SIZE;

    constructor(
        private route: ActivatedRoute,
        private movieService: FilmsService
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(first()).subscribe(({ id }) => {
            this.getMovie(id);
            this.getMovieVideos(id);
            this.getMovieImages(id);
            this.getMovieCredits(id);
        });
    }

    ngOnDestroy(): void {}

    getMovie(id: string) {
        this.movieService.getMovie(id).subscribe((movieData) => {
            this.movie = movieData;
        });
    }

    getMovieVideos(id: string) {
        this.movieService.getMovieVideos(id).subscribe((movieVideosData) => {
            this.movieVideos = movieVideosData;
        });
    }

    getMovieImages(id: string) {
        this.movieService.getMovieImages(id).subscribe((movieImagesData) => {
            this.movieImages = movieImagesData;
        });
    }

    getMovieCredits(id: string) {
        this.movieService.getMovieCredits(id).subscribe((movieCreditsData) => {
            this.movieCredits = movieCreditsData;
        });
    }
}
