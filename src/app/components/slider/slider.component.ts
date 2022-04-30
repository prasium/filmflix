import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IMAGES_SIZE } from '../../constants/images-sizes';
import { Movie } from '../../models/movie';

@Component({
    selector: 'slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss'],
    animations: [
        trigger('slideease', [
            transition(':enter', [
                style({ transform: 'translateX(100%)' }),
                animate(
                    '800ms ease-in',
                    style({ transform: 'translateX(0%)' })
                ),
            ]),
            transition(':leave', [
                animate(
                    '800ms ease-in',
                    style({ transform: 'translateX(-100%)' })
                ),
            ]),
        ]),
        trigger('fadeSlideInOut', [
            transition(':enter', [
                style({ opacity: 0, transform: 'translateY(10px)' }),
                animate(
                    '500ms',
                    style({ opacity: 1, transform: 'translateY(0)' })
                ),
            ]),
            transition(':leave', [
                animate(
                    '500ms',
                    style({ opacity: 0, transform: 'translateY(10px)' })
                ),
            ]),
        ]),
    ],
})
export class SliderComponent implements OnInit {
    @Input() items: Movie[] = [];
    @Input() isBanner: boolean = false;

    readonly imageSizes = IMAGES_SIZE;

    currentSlideIndex: number = 0;
    ngOnInit(): void {
        if (!this.isBanner) {
            setInterval(() => {
                this.currentSlideIndex =
                    ++this.currentSlideIndex % this.items.length;
            }, 5000);
        }
    }
}
