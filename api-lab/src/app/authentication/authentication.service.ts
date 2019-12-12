import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
 
@Injectable()
export class AuthenticationService {

    private urlLogin: string;
    private clientID: string;
    private clientSecret: string;

    constructor(private http: Http) {
        this.urlLogin = environment.apiUrl+'/oauth/v2/token';
        // récupérer les données du client depuis le serveur pour pouvoir séparer les clients de dev / test / users
        this.clientID = '11_2v1q6jjhfn0gco0cck0s4444gcssgc0wsokgw4ok8c4sckwoog';
        this.clientSecret = '3sweyctw0eg4kwwccwc80004ogsg08k4gcwk40cw8osgsowc0s';
    }

    authenticate(user: any) {
        let data = {
            client_id:     this.clientID,
            client_secret: this.clientSecret,
            grant_type:    'password',
            username:      user.username,
            password:      user.password,
        };

        let options = new RequestOptions({headers: new Headers({
            'Content-Type': 'application/json',
        })});

        return this.http.post(this.urlLogin, data, options);
    }

    isLoggedIn() {
        let now = Math.floor(+new Date() / 1000);
        return localStorage.getItem('token') && ( now < ( localStorage.getItem('expires_at') || 0 ) );
    }

    logout() {
        localStorage.removeItem('token');
    }
}
