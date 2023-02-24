import { createAction } from '@ngrx/store';

export const openModal = createAction(' - [Modal] Open Modal -');
export const closeModal = createAction(' - [Modal] Close Modal -');

export const acceptModal = createAction(' - [Modal] Accept Modal -');
export const cancelModal = createAction(' - [Modal] Cancel Modal -');