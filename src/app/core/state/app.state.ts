import { Action, ActionReducerMap, createFeatureSelector } from '@ngrx/store';

//*States and Keys
import * as Auth from '../../pages/auth-login/state/auth.state';
import * as Modal from '../../shared/states/modalState/modal.state';

//*Reducers
import {authReducer} from './../../pages/auth-login/state/auth.reducer';
import { modalReducer } from 'src/app/shared/states/modalState/modal.reducer';

//Feature key === dinamic name(Variable) of State
export interface AppState { //!Store 
    [Auth.featureKey]: Auth.AuthState;
    [Modal.featureKey]: Modal.ModalState;
}

export const reducers: ActionReducerMap<AppState, Action> = {
    [Auth.featureKey]: authReducer,
    // [Modal.featureKey]: modalReducer
};

//*Selector key
export const featureKey = 'AppStore';
export const selectAppState = createFeatureSelector<AppState>(featureKey);
