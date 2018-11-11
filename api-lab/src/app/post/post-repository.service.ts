import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostRepository {

    constructor(private http: HttpClient) {}

    getList() {
        let url = 'https://localhost:8000/api/login';

        return this.http.get(url);
    }
}