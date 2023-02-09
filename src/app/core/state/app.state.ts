import { Action, ActionReducerMap, createSelector } from '@ngrx/store';

//*States and Keys
import * as Auth from '../../pages/auth-login/state/auth.state';
import * as Modal from '../../shared/states/modalState/modal.state';

//*Reducers
import { authReducer  } from './../../pages/auth-login/state/auth.reducer';
import { modalReducer } from 'src/app/shared/states/modalState/modal.reducer';

//Feature key === dinamic name(Variable) of State

export const initialAppState: AppState = {
    [Auth.featureKey]: Auth.initialAuthState,
    [Modal.featureKey]: Modal.initalModalState
};

export interface AppState { //!Store 
    [Auth.featureKey]: Auth.AuthState;
    [Modal.featureKey]: Modal.ModalState;
}

export const reducers: ActionReducerMap<AppState, Action> = {
    [Auth.featureKey]: authReducer,
    [Modal.featureKey]: modalReducer
};

//*Selector key
export const selectAppState = createSelector( (state: any) => state, (state: AppState) => state );

