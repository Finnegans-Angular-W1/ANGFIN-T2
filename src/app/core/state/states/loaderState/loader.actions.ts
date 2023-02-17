import { createAction, props } from '@ngrx/store';

export const showLoader = createAction( '- [Alert] Show Loader -', props<{ message: string }>());
export const hideLoader = createAction( '- [Alert] Hide Loader -');