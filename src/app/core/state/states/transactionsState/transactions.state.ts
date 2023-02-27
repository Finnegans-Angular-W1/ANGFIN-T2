import { Transaction } from './../../../../pages/home/interfaces/transaction';

const defaultTransaction: Transaction = {
    id: 0,
    amount: 0,
    concept: '',
    date: '',
    type: '',
    accountId: 0,
    userId: 0,
    toAccountId: 0,
};

export interface TransactionState {
    transactions: Transaction[]
}

export const initialTransactionState = {
    transactions: [defaultTransaction]
}

export const featureKey = 'transaction';