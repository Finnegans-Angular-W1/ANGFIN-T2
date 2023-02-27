import { initialAccountState, AccountState } from './account.state';
import { createReducer, on } from '@ngrx/store';

import * as fromAccountActions from './account.actions';

export const accountReducer = createReducer(
    initialAccountState,
    on(fromAccountActions.accountMe, 
        (state:AccountState, { account }) => ( { ...state, account })),
    on(fromAccountActions.accountOff, 
        (state:AccountState) => ({ ...state, initialAccountState }))
    
);