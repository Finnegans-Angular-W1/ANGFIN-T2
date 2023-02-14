import { RedirectService } from './../../../core/services/redirect.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { catchError, exhaustMap, map, of } from "rxjs";

//Actions
import * as AuthActions from './auth.actions';
import { AuthService } from "src/app/core/services/auth.service";
import { LoginSuccess } from '../interfaces/loginSuccess';
import { ErrorResponse } from 'src/app/core/interfaces/errorResponse';
import { showAlert } from "src/app/shared/states/alertState/alert.actions";
import { User } from "src/app/core/interfaces/User";

@Injectable()
export class AuthEffects {

    constructor(
        private actions$: Actions,
        private store:Store<AppState>,
        private authService:AuthService,
        private redirect:RedirectService
    ) {}

    login$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.loginStart),
            exhaustMap((action) => { 
                return this.authService.login(action.email, action.password)
                .pipe(
                    map(( respuesta ) => {
                        //TODO: dispatchear state de loading(show)
                        const userExpiration = {
                            dateLogin: new Date(), //ONLY TEMPLATE (mostrar al usuario su fecha de ingreso)
                            dateExpiration: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)) //24 horas en milisegundos
                        }
                        localStorage.setItem('userExpiration', JSON.stringify(userExpiration));//SAVE TOKEN EXPIRATION
                        return AuthActions.loginSuccess({accessToken:(respuesta as LoginSuccess).accessToken})
                    }),
                    catchError((error:ErrorResponse ) => {
                        console.log(action);
                        console.log(error);
                        //TODO: hide loading (state)
                        this.store.dispatch(showAlert({ message: `${error}` }))
                        //TODO: Mostrar segun response el mensaje, por ej 404: no encontado, 401 forbidden: denegado, etc
                        return of(AuthActions.loginFail())
                    })
                )
            })
        )
    })

    //LoginSuccess = Llama a AuthMe (para obtener info del usuario)
    loginSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.loginSuccess), //Exhaust map vs map?
            exhaustMap((_) => {
                return this.authService.authMe()
                .pipe(
                    map(( respuesta:User ) => {
                        console.log('loginSuccessWithAuthMe$');//?Borrar console.log
                        //hide loading (state)
                        this.redirect.redirectTo('/home');
                        return AuthActions.authMe({user:respuesta as User});
                    }),
                    catchError( (error) => {
                        console.log(error);
                        //hide loading state
                        this.store.dispatch(showAlert({ message: `${error}` }))
                        return of(AuthActions.authMeFail());
                    })
                )
            })
        )
    });

    //Logout
    logout$ = createEffect( ()=>{
        return this.actions$.pipe(
            ofType(AuthActions.logout),
            map((_)=>{
                localStorage.removeItem('userExpiration');
                this.redirect.redirectTo('/login');
                //TODO: Alert (Session finalizada correctamente.)
            })
        );
    },
    {dispatch:false}
    );

    tokenRead$ = createEffect( ()=>{
        return this.actions$.pipe(
            ofType(AuthActions.readToken),
            map((_)=>{
                if(this.authService.checkTokenExpiration()){
                    this.store.dispatch(showAlert({ message: `Su sesión ha expirado` }));
                    this.store.dispatch(AuthActions.logout());
                }
            })
        );
    },
    {dispatch:false}
    );

//Start timeout to check expiration
    logoutExpiration$ = createEffect( ()=>{
        return this.actions$.pipe(
            ofType(AuthActions.logoutExpiration),
            map((_)=>{
                const data = localStorage.getItem('userExpiration');
                if (data !== null) {
                    const userData = JSON.parse(data);
                    const dateExpiration = new Date(userData.dateExpiration); const dateActual = new Date();
                    const TimeoutCheck = dateExpiration.getTime() - dateActual.getTime() + 1000; //+ 1 segundo
                    setTimeout(()=>{
                        this.store.dispatch(AuthActions.readToken());
                    }, TimeoutCheck);
                    console.log('logoutExpiration$');
                    console.log('EXPIRATION TIME:' , TimeoutCheck);
                }
            }
        ));
    },
    {dispatch:false}
    );

    //Register
    register$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.registerStart), //Exhaust map vs map?
            exhaustMap((action) => { 
                return this.authService.register(action.requestBody)
                .pipe(
                    map((_) => {
                        //TODO: HIDE loading
                        this.redirect.redirectTo('/login');
                        return AuthActions.registerSuccess();
                    }),
                    catchError((error:ErrorResponse ) => {
                        console.log(action);
                        console.log(error);
                        //TODO: HIDE loading
                        this.store.dispatch(showAlert({ message: `${error}` }))
                        return of(AuthActions.registerFail());
                    })
                )
            })
        )
    });

}