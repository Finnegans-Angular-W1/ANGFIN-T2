import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { catchError, exhaustMap, map, of, tap } from "rxjs";

//Actions
import * as AuthActions from './auth.actions';
import { AuthService } from "src/app/core/services/auth.service";
import { LoginSuccess } from '../interfaces/loginSuccess';
import { ErrorResponse } from 'src/app/core/interfaces/errorResponse';
import { showAlert } from "src/app/shared/states/alertState/alert.actions";

@Injectable()
export class AuthEffects {
    
    constructor(
        private actions$: Actions,
        private store:Store<AppState>,
        private authService:AuthService
    ) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.loginStart), //Exhaust map vs map?
            exhaustMap((action) => { 
                return this.authService.login(action.email, action.password)
                .pipe(
                    map(( respuesta ) => {
                        //TODO: dispatchear state de loading
                        // this.authService.saveToken((respuesta as LoginSuccess).accessToken);
                        //show spinner authMe?

                        return AuthActions.loginSuccess({accessToken:(respuesta as LoginSuccess).accessToken})
                    }),
                    catchError((error:ErrorResponse ) => {
                        console.log(action);
                        console.log(error);
                        //TODO: hide loading
                        // this.store.dispatch(hideSpinner());
                        this.store.dispatch(showAlert({ message: `${error}` }))
                        //TODO: Mostrar segun response el mensaje, por ej 404: no encontado, 401 forbidden: denegado, etc
                        return of(AuthActions.loginFail())
                    })
                )
            })
        )
    })


}