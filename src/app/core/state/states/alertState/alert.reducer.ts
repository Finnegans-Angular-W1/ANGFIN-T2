import { initialAlertState, AlertState } from './alert.state';
import { createReducer, on } from '@ngrx/store';

import * as fromAlertActions from './alert.actions';

export const alertReducer = createReducer(
    initialAlertState,
    on(fromAlertActions.showAlert, (state:AlertState, { message, alertType }) => ({ ...state, show: true, message, alertType })),
    on(fromAlertActions.hideAlert, (state:AlertState) => ({ ...state, show: false, message: '', alertType:'' }))
);