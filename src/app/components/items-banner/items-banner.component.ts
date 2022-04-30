import { Component, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { TV } from '../../models/tv';

@Component({
    selector: 'items-banner',
    templateUrl: './items-banner.component.html',
    styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent {
    @Input() items: Movie[] = [];
    @Input() tvItems: TV[] = [];
    @Input() title: string = '';
}
