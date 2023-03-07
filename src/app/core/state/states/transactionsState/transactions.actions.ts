import { Transaction } from './../../../../pages/home/interfaces/transaction';
import { TransactionRequest } from 'src/app/core/interfaces/transaction-request';

import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';


export const getAllTransactions = createAction( '- [Transactions] Get ALL Transactions -');

export const setTransactions = createAction( '- [Transactions] Set ALL Transactions -', props<{ transactions:Transaction[] }>());
export const removeTransactions = createAction( '- [Transactions] Remove ALL Transactions -');

export const transactionsFail = createAction( '- [Transactions] Transactions Fail -');

export const createTransaction = createAction( '- [Transactions] Create Transaction -', props<{ transactionRequest:TransactionRequest }>());

export const createTransactionSuccess = createAction( '- [Transactions] Create Transaction Success -');
export const createTransactionFail = createAction( '- [Transactions] Create Transaction Fail -');