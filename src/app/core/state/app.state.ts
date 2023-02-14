import { Action, ActionReducerMap, createSelector } from '@ngrx/store';

//*States and Keys
import * as Auth   from '../../pages/auth-login/state/auth.state';
import * as Modal  from '../../shared/states/modalState/modal.state';
import * as Alert  from './states/alertState/alert.state';
import * as Loader from './states/loaderState/loader.state'

//*Reducers
import { authReducer   } from './../../pages/auth-login/state/auth.reducer';
import { modalReducer  } from 'src/app/shared/states/modalState/modal.reducer';
import { alertReducer  } from './states/alertState/alert.reducer';
import { loaderReducer } from './states/loaderState/loader.reducer';

//Feature key === dinamic name(Variable) of State
export const initialAppState: AppState = {
    [Auth.featureKey]  : Auth.initialAuthState,
    [Modal.featureKey] : Modal.initalModalState,
    [Alert.featureKey] : Alert.initialAlertState,
    [Loader.featureKey]: Loader.initialLoaderState
};

export interface AppState { //!Store 
    [Auth.featureKey]  : Auth.AuthState ;
    [Modal.featureKey] : Modal.ModalState ;
    [Alert.featureKey] : Alert.AlertState ;
    [Loader.featureKey]: Loader.LoaderState ;
}

export const reducers: ActionReducerMap<AppState, Action> = {
    [Auth.featureKey]  : authReducer,
    [Modal.featureKey] : modalReducer,
    [Alert.featureKey] : alertReducer,
    [Loader.featureKey]: loaderReducer
};

//*Selector key
export const selectAppState = createSelector( (state: any) => state, (state: AppState) => state );

