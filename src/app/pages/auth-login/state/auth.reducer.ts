import { createReducer, on } from '@ngrx/store';

import { AuthEditState, AuthState, initialAuthEditState, initialAuthState } from './auth.state';
import * as fromAuthActions from './auth.actions';

export const authReducer = createReducer(
    initialAuthState,
    on(fromAuthActions.loginSuccess, (state:AuthState, action) => {
        return {...state, accessToken: action.accessToken}
    }),
    on(fromAuthActions.authMe, (state:AuthState, action) => {
        return {...state, user: action.user}
    }),
    on(fromAuthActions.logout, (state:AuthState) => {
        return {...state, user: initialAuthState.user, accessToken: initialAuthState.accessToken}
    }),
    on(fromAuthActions.editProfileSuccess, (state:AuthState, action) => {
            return {...state, user: action.updateUser}
    }),

);
