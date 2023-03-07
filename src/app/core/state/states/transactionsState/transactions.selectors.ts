import { TransactionState } from './transactions.state';
import { AppState } from 'src/app/core/state/app.state';

import { selectAppState } from './../../app.state';
import { createSelector } from '@ngrx/store';

export const selectTransactionState = createSelector(selectAppState, (state:AppState) => state.transaction);

export const getTransactions = createSelector(selectTransactionState, (state:TransactionState) => state.transactions);
