import { hideLoader } from './../loaderState/loader.actions';
import { showAlert } from 'src/app/core/state/states/alertState/alert.actions';
import { Store } from '@ngrx/store';
import { map, catchError, of, tap } from 'rxjs';
import { exhaustMap } from 'rxjs';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppState } from 'src/app/core/state/app.state';
import { Actions } from '@ngrx/effects';
import { Injectable } from "@angular/core";

import * as TransactionsActions from './transactions.actions';

@Injectable()
export class TransactionsEffects {

    constructor(
        private actions$: Actions,
        private store:Store<AppState>,
        private authService:AuthService,
    ) {}

    getTransactionsStart$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TransactionsActions.getAllTransactions),
            exhaustMap((action) => { 
                return this.authService.getAllTransactions()
                .pipe(
                    map(( respuesta:any) => {
                        console.log('Transactions: ', respuesta);
                        return TransactionsActions.setTransactions({ transactions: respuesta.data} );
                    }),
                    catchError((error) => {
                        console.log(action);
                        console.log(error);
                        //TODO: Show Alert
                        return of(TransactionsActions.transactionsFail());
                    })
                )
            })
        )
    })

    newTransaction$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TransactionsActions.createTransaction),
            exhaustMap((action) => { 
                return this.authService.createTransaction(action.transactionRequest)
                .pipe(
                    map(( respuesta:any) => {
                        console.log('Transactions NEW: ', respuesta);
                        this.store.dispatch(hideLoader());
                        this.store.dispatch(showAlert({ message: 'Transaccion generada con exito', alertType: 'success' }))
                        this.store.dispatch(TransactionsActions.getAllTransactions());
                        return TransactionsActions.createTransactionSuccess();
                    }),
                    catchError((error) => {
                        console.log(action);
                        console.log(error);
                        this.store.dispatch(hideLoader());
                        this.store.dispatch(showAlert({ message: 'Error al generar la transaccion', alertType: 'error' }))
                        return of(TransactionsActions.createTransactionFail());
                    })
                )
            })
        )
    })

}