import { DarkModeState, initialDarkModeState } from './darkmode.state';

import { createReducer, on } from '@ngrx/store';

import * as fromDarkModeActions from '../darkmodeState/darkmode.actions';

export const darkModeReducer = createReducer(
    initialDarkModeState,
    on(fromDarkModeActions.darkModeOFF, (state:DarkModeState ) => ({ ...state, dark:false })),
    on(fromDarkModeActions.darkModeON, (state:DarkModeState) => ({ ...state, dark:true }))
);