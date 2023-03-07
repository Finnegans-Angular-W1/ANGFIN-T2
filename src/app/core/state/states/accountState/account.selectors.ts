import { AppState } from 'src/app/core/state/app.state';
import { AccountState } from './account.state';
import { selectAppState } from './../../app.state';
import { createSelector } from '@ngrx/store';


export const selectAccountState = createSelector(selectAppState, (state:AppState) => state.account);

export const getAccount = createSelector(selectAccountState, (state:AccountState) => state.account);
