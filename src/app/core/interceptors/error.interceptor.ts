import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AlertState } from '../state/states/alertState/alert.state';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private store:Store<AlertState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        this.store.dispatch({ type: '[Alert] Show Alert', message: error.message, alertType: 'error' });
        return throwError(error);
      })
    );
  }
  

}
