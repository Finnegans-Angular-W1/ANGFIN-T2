import { Account } from './../../../interfaces/account';

export interface AccountState {
    account:Account
}

export const initialAccountState = {
    account: { id: 0, creationDate: new Date(), money: 0, isBlocked: false, userId: 0, createdAt: new Date(), updatedAt: new Date()}
}

export const featureKey = 'account';