import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { TV } from '../../models/tv';
import { IMAGES_SIZE } from '../../constants/images-sizes';

@Component({
    selector: 'item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
    @Input() itemData: Movie | null = null;
    @Input() tvItemData: TV | null = null;

    imagesSizes = IMAGES_SIZE;

    constructor() {}

    ngOnInit(): void {}
}
