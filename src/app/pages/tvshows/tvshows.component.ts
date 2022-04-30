import { Component, OnInit } from '@angular/core';
import { TV } from '../../models/tv';
import { FilmsService } from '../../services/films.service';

@Component({
    selector: 'app-tvshows',
    templateUrl: './tvshows.component.html',
    styleUrls: ['./tvshows.component.scss'],
})
export class TvshowsComponent implements OnInit {
    tvShows: TV[] = [];
    constructor(private tvShowsService: FilmsService) {}

    ngOnInit(): void {
        this.getPagedTVShows(1);
    }

    getPagedTVShows(page: number) {
        this.tvShowsService.searchTVShows(page).subscribe((tvshows) => {
            this.tvShows = tvshows;
        });
    }

    paginate(event: any) {
        this.getPagedTVShows(event.page + 1);
    }
}
