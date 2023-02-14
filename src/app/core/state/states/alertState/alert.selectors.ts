import { selectAppState } from '../../app.state';
import { createSelector } from '@ngrx/store';

export const selectAlertState = createSelector(selectAppState, (state) => state.alert);

export const getAlertMessage = createSelector(selectAlertState, (state) => state.message);
export const getAlertShow = createSelector(selectAlertState, (state) => state.show);
export const getAlertType = createSelector(selectAlertState, (state) => state.alertType);