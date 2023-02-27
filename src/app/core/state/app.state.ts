import { Action, ActionReducerMap, createSelector } from '@ngrx/store';

//*States and Keys
import * as Auth   from '../../pages/auth-login/state/auth.state';
import * as Account from './states/accountState/account.state';
import * as Modal  from '../../shared/states/modalState/modal.state';
import * as Alert  from './states/alertState/alert.state';
import * as Loader from './states/loaderState/loader.state'
import * as DarkMode from './states/darkmodeState/darkmode.state';
import * as Transaction from './states/transactionsState/transactions.state';

//*Reducers
import { authReducer   } from './../../pages/auth-login/state/auth.reducer';
import { accountReducer } from './states/accountState/account.reducer';
import { modalReducer  } from 'src/app/shared/states/modalState/modal.reducer';
import { alertReducer  } from './states/alertState/alert.reducer';
import { loaderReducer } from './states/loaderState/loader.reducer';
import { darkModeReducer } from './states/darkmodeState/darkmode.reducer';
import { transactionReducer } from './states/transactionsState/transactions.reducer';

//Feature key === dinamic name(Variable) of State
export const initialAppState: AppState = {
    [Auth.featureKey]  : Auth.initialAuthState,
    [Account.featureKey]: Account.initialAccountState, //AccountState [Account.featureKey
    [Modal.featureKey] : Modal.initalModalState,
    [Alert.featureKey] : Alert.initialAlertState,
    [Loader.featureKey]: Loader.initialLoaderState,
    [DarkMode.featureKey] : DarkMode.initialDarkModeState,
    [Transaction.featureKey] : Transaction.initialTransactionState
};

export interface AppState { //!Store 
    [Auth.featureKey]  : Auth.AuthState ;
    [Account.featureKey]: Account.AccountState; //AccountState [Account.featureKey
    [Modal.featureKey] : Modal.ModalState ;
    [Alert.featureKey] : Alert.AlertState ;
    [Loader.featureKey]: Loader.LoaderState ;
    [DarkMode.featureKey] : DarkMode.DarkModeState;
    [Transaction.featureKey] : Transaction.TransactionState;
}

export const reducers: ActionReducerMap<AppState, Action> = {
    [Auth.featureKey]  : authReducer,
    [Account.featureKey]: accountReducer,
    [Modal.featureKey] : modalReducer,
    [Alert.featureKey] : alertReducer,
    [Loader.featureKey]: loaderReducer,
    [DarkMode.featureKey] : darkModeReducer,
    [Transaction.featureKey] : transactionReducer
};

//*Selector key
export const selectAppState = createSelector( (state: any) => state, (state: AppState) => state );

