import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationComponent } from './authentication/authentication.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guard/auth.guard';
import { MoviesComponent } from './movies/movies.component';
import { MoviesRepository } from './movies/movies-repository.service';
import { AuthenticationService } from './authentication/authentication.service';
import { BabedouService } from './authentication/testtest.service';

@NgModule({
     declarations: [
         AppComponent,
         AuthenticationComponent,
         HomepageComponent,
         MoviesComponent
     ],
     imports: [
         BrowserModule,
         ReactiveFormsModule,
         HttpModule,
         HttpClientModule,
         AppRoutingModule
     ],
     providers: [
         {
             provide: HTTP_INTERCEPTORS,
             useClass: BabedouService,
             multi: true
         },
         AuthGuard,
         AuthenticationService,
         MoviesRepository
     ],
     bootstrap: [AppComponent]
})
export class AppModule { }