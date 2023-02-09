import { createReducer, on } from '@ngrx/store';

import { initalModalState, ModalState } from './modal.state';
import * as fromModalActions from './modal.actions';


export const modalReducer = createReducer(
    initalModalState,
    on(fromModalActions.closeModal, (state:ModalState) => {
        return {...state, open: false}
    }),
    on(fromModalActions.openModal, (state:ModalState) => {
        return {...state, open: true }
    }),
    on(fromModalActions.acceptModal, (state:ModalState) => {
        return {...state, modalAction: 'accept'}
    }),
    on(fromModalActions.cancelModal, (state:ModalState) => {
        return {...state, modalAction: 'cancel'}
    })
);
