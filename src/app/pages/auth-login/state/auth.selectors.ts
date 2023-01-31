import { createSelector } from '@ngrx/store';

import { selectAppState, AppState } from '../../../core/state/app.state';
import { AuthState } from './auth.state';

//Propiedades inmutables (por el metodo createSelector())
//*Exportamos en caso de necesitar todo el State de Auth., sino quitamos el export (y dejamos los get).
export const selectAuthState = createSelector(selectAppState, (state: AppState) => state.auth);



export const getUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
);

export const getToken = createSelector(
    selectAuthState,
    (state: AuthState) => state.accessToken
);
