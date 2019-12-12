import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MoviesRepository {

    constructor(private http:HttpClient) { }

    getList() {
        const url = environment.apiUrl+'/api/movies';

        return this.http.get(url);
    }
}
