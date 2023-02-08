import { selectAppState } from './../../../core/state/app.state';
import { createSelector } from '@ngrx/store';

export const selectModalState = createSelector( selectAppState, (state) => state.modal )

export const getModalOpen = createSelector( selectModalState, (state) => state.open )

export const getModalAction = createSelector( selectModalState, (state) => state.modalAction )