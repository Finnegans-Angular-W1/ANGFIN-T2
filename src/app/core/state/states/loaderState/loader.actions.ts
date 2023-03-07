import { createAction, props } from '@ngrx/store';

export const showLoader = createAction( '- [Loader] Show Loader -', props<{ message: string }>());
export const hideLoader = createAction( '- [Loader] Hide Loader -');