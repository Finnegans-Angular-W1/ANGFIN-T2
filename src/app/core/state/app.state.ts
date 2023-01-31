import { Action, ActionReducerMap, createFeatureSelector } from '@ngrx/store';

//*States and Keys
import * as Auth from '../../pages/auth-login/state/auth.state';

//*Reducers
import * as fromAuthReducer from './../../pages/auth-login/state/auth.reducer';

//Feature key === dinamic name(Variable) of State
export interface AppState { //!Store 
    [Auth.featureKey]: Auth.AuthState;
}

export const reducers: ActionReducerMap<AppState, Action> = {
    [Auth.featureKey]: fromAuthReducer.authReducer,
};

//*Selector key
export const featureKey = 'AppStore';
export const selectAppState = createFeatureSelector<AppState>(featureKey);
