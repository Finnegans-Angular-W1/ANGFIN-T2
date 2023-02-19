import { HttpEvent, HttpHandler , HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { exhaustMap, Observable, take, throwError } from 'rxjs';


import { getToken } from 'src/app/pages/auth-login/state/auth.selectors';
import { AuthState } from 'src/app/pages/auth-login/state/auth.state';
import { readToken } from './../../pages/auth-login/state/auth.actions';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private store: Store<AuthState>) {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Si la url incluye login o signup, la petición sigue de largo. 
        if (req.url.includes('login') || req.url.includes('signup')){
            return next.handle(req);
        }   
        return this.store.select(getToken).
        pipe(
            take(1), exhaustMap((token: string) => {
                if (!token){
                    return next.handle(req)
                }
                this.store.dispatch(readToken());
                const requestModified = req.clone({
                    setHeaders: {
                        Authorization: `Bearer ${token}`
                    }
                });
                return next.handle(requestModified)
            })
        ) 
    }
}