import { createSelector } from '@ngrx/store';

import { selectAppState, AppState } from '../../../core/state/app.state';
import { AuthState } from './auth.state';

//Selecciono desde el State de App(Main) el State de Auth, (Buenas practicas; utilizo el core(store de states)).
export const selectAuthState = createSelector(selectAppState, (state: AppState) => state.auth);
//*Exportamos en caso de necesitar todo el State de Auth., sino quitamos el export (y dejamos los get).

//Propiedades inmutables (por el metodo createSelector())
export const getUser = createSelector(
    selectAuthState,
    (state: AuthState) => state.user
);

export const getToken = createSelector(
    selectAuthState,
    (state: AuthState) => state.accessToken
);
