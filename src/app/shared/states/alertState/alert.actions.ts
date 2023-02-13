import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const showAlert = createAction( '- [Alert] Show Alert -', props<{ alertMessage: string }>());
export const hideAlert = createAction( '- [Alert] Hide Alert -');