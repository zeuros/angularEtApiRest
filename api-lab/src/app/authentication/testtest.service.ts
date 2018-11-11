import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
 
@Injectable()
export class BabedouService implements HttpInterceptor  {

    private tokenGetter () {
        return localStorage.getItem('token');
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return Observable.fromPromise(this.handleAccess(request, next));
    }

    private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
        const token = this.tokenGetter();
        let changedRequest;
        // HttpHeader object immutable - copy values
        const headerSettings: {[name: string]: string | string[]; } = {};

        if ( token ) {
            for (const key of request.headers.keys()) {
                headerSettings[key] = request.headers.getAll(key);
            }

            headerSettings['Authorization'] = 'Bearer ' + token;
            
            changedRequest = request.clone({headers: new HttpHeaders(headerSettings)});
            
            return next.handle(changedRequest).toPromise();
        }

        return next.handle(request).toPromise();
    }
}
