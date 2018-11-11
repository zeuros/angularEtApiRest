import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepositoryService {

  constructor(private authHttp:AuthHttp) { }

  getList() {
  	const url = environment.apiUrl+'/api/movies';

  	return this.authHttp.post(url, '');
  }
}
