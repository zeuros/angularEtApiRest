// authentication/authentication.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {_getUtcTime} from 'node-forge/lib/http';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
})
export class AuthenticationComponent {
    loginForm: FormGroup;
    error: string = '';

    constructor(
        private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService,
        private router: Router, 
    ) {
        this.loginForm = formBuilder.group({
            'username': ['', Validators.required],
            'password': ['', Validators.required]
        });
    }

    onSubmit() {
        this.authenticationService
            .authenticate(this.loginForm.value)
            .subscribe(
                data => {
                    let now = Math.floor(+new Date() / 1000);

                    localStorage.setItem('token', data.json().access_token);
                    localStorage.setItem('expires_at', now + data.json().expires_in);

                    this.router.navigate(['movies']);
                },
                error => {
                    this.error = error.json().error_description;
                    console.log(error.json().error_description);
                }
            );
    }
}
