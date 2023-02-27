import { Account } from './../../../interfaces/account';
import { props } from '@ngrx/store';
import { createAction } from '@ngrx/store';

export const accountStartMe = createAction( '- [Account] Account Start ME -');
export const accountFailMe = createAction( '- [Account] Account Fail ME -');

export const accountMe = createAction( '- [Account] Account ME -', props<{ account:Account }>());
export const accountOff = createAction( '- [Account] Account Off -');