import { createReducer, on } from '@ngrx/store';

import { initalModalState } from './modal.state';
import * as fromModalActions from './modal.actions';

export const modalReducer = createReducer(
    initalModalState,
    on(fromModalActions.closeModal, (state) => {
        return {...state, open: false}
    }),
    on(fromModalActions.openModal, (state) => {
        return {...state, open: true }
    }),
    on(fromModalActions.acceptModal, (state) => {
        return {...state, action: 'accept'}
    }),
    on(fromModalActions.cancelModal, (state) => {
        return {...state, action: 'cancel'}
    })
);
