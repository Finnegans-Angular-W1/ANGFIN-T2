import { initialAlertState, AlertState } from './alert.state';
import { createReducer, on } from '@ngrx/store';

import * as fromAlertActions from './alert.actions';

export const alertReducer = createReducer(
    initialAlertState,
    on(fromAlertActions.showAlert, (state:AlertState, { message }) => ({ ...state, show: true, message })),
    on(fromAlertActions.hideAlert, (state:AlertState) => ({ ...state, show: false, message: '' }))
);