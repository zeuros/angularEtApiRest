import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AuthenticationComponent } from './authentication/authentication.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostComponent } from './post/post.component';
import { PostRepository } from './post/post-repository.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './_guard/auth.guard';
import { MoviesComponent } from './movies/movies.component';
import { AuthenticationService } from './authentication/authentication.service';
// import { BabedouService } from './authentication/testtest.service';

@NgModule({
     declarations: [
         AppComponent,
         AuthenticationComponent,
         HomepageComponent,
         PostComponent,
         MoviesComponent
     ],
     imports: [
         BrowserModule,
         ReactiveFormsModule,
         HttpModule,
         AppRoutingModule
     ],
     providers: [
         // {
         //     provide: HTTP_INTERCEPTORS,
         //     useClass: BabedouService,
         //     multi: true
         // },
         AuthGuard,
         // AuthenticationService,
         PostRepository
     ],
     bootstrap: [AppComponent]
})
export class AppModule { }