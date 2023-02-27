import { initialTransactionState, TransactionState } from './transactions.state';
import { createReducer, on } from '@ngrx/store';

import * as fromTransactionsActions from './transactions.actions';

export const transactionReducer = createReducer(
    initialTransactionState,
    on(fromTransactionsActions.setTransactions, 
        (state:TransactionState, {transactions}) => ( { ...state, transactions } )),
    on(fromTransactionsActions.removeTransactions, 
        (state:TransactionState) => ({ ...state, initialTransactionState }))
);