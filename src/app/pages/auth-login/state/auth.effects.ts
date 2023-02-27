import { accountStartMe } from './../../../core/state/states/accountState/account.actions';
import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/state/app.state';
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "src/app/core/services/auth.service";
import { RedirectService } from './../../../core/services/redirect.service';
//Interfaces
import { ErrorResponse } from 'src/app/core/interfaces/errorResponse';
import { User } from "src/app/core/interfaces/User";
import { LoginSuccess } from '../interfaces/loginSuccess';
//Actions
import * as AuthActions from './auth.actions';
import { hideLoader, showLoader } from './../../../core/state/states/loaderState/loader.actions';
import { showAlert } from "src/app/core/state/states/alertState/alert.actions";


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
                        console.log('loginstart:' , respuesta);
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
                        this.store.dispatch(hideLoader());
                        this.store.dispatch(showAlert({ message: 'Correo electronico o Contraseña incorrecta', alertType: 'error' }))
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
                        this.store.dispatch(hideLoader());
                        this.redirect.redirectTo('/inicio');
                        this.store.dispatch(showAlert({ message: `Bienvenido ${respuesta.first_name}`, alertType: 'success' }));
                        this.store.dispatch(accountStartMe());
                        return AuthActions.authMe({user:respuesta as User});
                    }),
                    catchError( (error) => {
                        console.log(error);
                        this.store.dispatch(hideLoader());
                        this.store.dispatch(showAlert({ message: `${error}`, alertType: 'error' }))
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
                this.redirect.redirectTo('/iniciar-sesion');
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
                    this.store.dispatch(showAlert({ message: `Su sesión ha expirado` , alertType: 'error'}));
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
                        this.store.dispatch(hideLoader());//? TAP?
                        this.redirect.redirectTo('/iniciar-sesion');
                        return AuthActions.registerSuccess();
                    }),
                    catchError((error:ErrorResponse ) => {
                        console.log(action);
                        console.log(error);
                        this.store.dispatch(hideLoader());
                        this.store.dispatch(showAlert({ message: `${error}` , alertType: 'error'}))
                        return of(AuthActions.registerFail());
                    })
                )
            })
        )
    });

    edit$= createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.editProfileStart),
            exhaustMap((action) => { 
                return this.authService.editUser(action.updateUser, action.id)
                .pipe(
                    map(( respuesta ) => {
                        return AuthActions.editProfileSuccess({updateUser: respuesta})
                    }),
                    catchError((error:ErrorResponse ) => {
                        console.log(action);
                        console.log(error);
                        this.store.dispatch(hideLoader());
                        this.store.dispatch(showAlert({ message: `La edición no ha podido realizarse`, alertType: 'error' }))
                        //TODO: Mostrar segun response el mensaje, por ej 404: no encontado, 401 forbidden: denegado, etc
                        return of(AuthActions.editProfileFail())
                    })
                )
            })
        )
    });

    editSuccess$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.editProfileSuccess), 
            map((_) => {
                this.store.dispatch(hideLoader())
            })
        )
    }, {dispatch:false});

}