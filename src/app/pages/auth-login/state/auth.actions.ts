import { User } from './../../../core/interfaces/User';
import { createAction, props } from "@ngrx/store";


export const login = createAction( '- [AUTH] LOGIN - ',  props<{ accessToken:string }>() );

export const authMe = createAction( '- [AUTH] AUTH ME (INFO USER) -',  props<{ user:User}>() );

export const logout = createAction( '- [AUTH] LOGOUT -' );