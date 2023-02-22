import { selectAppState } from './../../app.state';
import { createSelector } from '@ngrx/store';

export const selectDarkModeState = createSelector(selectAppState, (state) => state.darkmode);

export const getDarkMode = createSelector(selectDarkModeState, (state) => state.dark);