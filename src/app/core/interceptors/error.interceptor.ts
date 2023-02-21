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
<<<<<<< HEAD
import { AlertState } from '../state/states/alertState/alert.state';
=======

import { AlertServiceService } from 'src/app/shared/services/alert-service.service';

>>>>>>> 00bf7ece8afeccae41b8d9dd3662f50944f7e7c5

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

<<<<<<< HEAD
  constructor(private store:Store<AlertState>) {}

=======

  constructor() {}
//TODO: lanzar alerta

  constructor(private alertService: AlertServiceService) {}


>>>>>>> 00bf7ece8afeccae41b8d9dd3662f50944f7e7c5
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
