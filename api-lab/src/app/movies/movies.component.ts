import { Component, OnInit } from '@angular/core';
import { MoviesRepositoryService } from './movies-repository.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['movies.component.less']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesRepo: MoviesRepositoryService) { }

  ngOnInit() {
  	this.moviesRepo.getList().subscribe(
  		data => {console.log(data)}, 
  		error => {console.warn(error.json())}
  	);
  }

}
