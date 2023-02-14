import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const showAlert = createAction( '- [Alert] Show Alert -', props<{ message: string, alertType:string }>());
export const hideAlert = createAction( '- [Alert] Hide Alert -');