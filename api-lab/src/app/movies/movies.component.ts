import { Component, OnInit } from '@angular/core';
import { MoviesRepository } from './movies-repository.service'

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['movies.component.less']
})
export class MoviesComponent implements OnInit {
    error: String = '';
    movies: Object;

    constructor(private moviesRepo: MoviesRepository) { }

    ngOnInit() {
        this.moviesRepo.getList().subscribe(
            data => {this.movies = data;}, 
            error => {console.warn(error.json())}
        );
    }
}
