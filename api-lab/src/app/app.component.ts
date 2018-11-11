import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './authentication/authentication.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})

export class AppComponent {
    title = 'api-lab';

    constructor(private authenticationService: AuthenticationService, private router: Router) {}

    hasAuthToken() {
        return localStorage.getItem('access_token') !== null;
    }

    logout() {
        localStorage.removeItem('access_token');
        this.router.navigate(['home']);
    }
}
