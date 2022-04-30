import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
    MovieCredits,
    MovieDto,
    MovieImages,
    MovieVideoDto,
} from '../models/movie';
import { TVDto } from '../models/tv';
import { of, switchMap } from 'rxjs';
import { Movie } from '../models/movie';
import { GenresDto } from '../models/genre';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class FilmsService {
    baseUrl: string = 'https://api.themoviedb.org/3';

    apiKey: string = environment.API_KEY;

    constructor(private http: HttpClient) {}

    getMovies(type: string = 'upcoming', count: number = 12) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, count));
                })
            );
    }

    getTVShows(type: string = 'latest', count: number = 12) {
        return this.http
            .get<TVDto>(`${this.baseUrl}/tv/${type}?api_key=${this.apiKey}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, count));
                })
            );
    }

    searchMovies(page: number, searchValue?: string) {
        const uri = searchValue ? '/search/movie' : '/movie/popular';
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    searchTVShows(page: number) {
        return this.http
            .get<TVDto>(
                `${this.baseUrl}/tv/popular?page=${page}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getMovie(id: string) {
        return this.http.get<Movie>(
            `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
        );
    }

    getMovieVideos(id: string) {
        return this.http
            .get<MovieVideoDto>(
                `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getMovieImages(id: string) {
        return this.http.get<MovieImages>(
            `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
        );
    }

    getMovieCredits(id: string) {
        return this.http.get<MovieCredits>(
            `${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`
        );
    }

    getMovieGenres() {
        return this.http
            .get<GenresDto>(
                `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.genres);
                })
            );
    }

    getMoviesByGenre(genreId: string, pageNumber: number) {
        return this.http
            .get<MovieDto>(
                `${this.baseUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    console.log(res);
                    return of(res.results);
                })
            );
    }
}
