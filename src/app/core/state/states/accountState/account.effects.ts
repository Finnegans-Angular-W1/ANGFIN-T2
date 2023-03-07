import { Account } from './../../../interfaces/account';
import { Store } from '@ngrx/store';
import { map, catchError, of, tap } from 'rxjs';
import { exhaustMap } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppState } from 'src/app/core/state/app.state';
import { Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";

import * as AccountActions from './account.actions';

@Injectable()
export class AccountEffects {

    constructor(
        private actions$: Actions,
        private store:Store<AppState>,
        private authService:AuthService,
    ) {}

    accountStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AccountActions.accountStartMe),
            exhaustMap((action) => { 
                return this.authService.accountMe()
                .pipe(
                    map(( respuesta:any) => {
                        // console.log('AccountMe' , respuesta);
                        // console.log('REPS:', respuesta[0]);
                        return AccountActions.accountMe({account: respuesta[0]});
                    }),
                    catchError((error) => {
                        console.log(action);
                        console.log(error);
                        return of(AccountActions.accountFailMe());
                    })
                )
            })
        )
    })

}