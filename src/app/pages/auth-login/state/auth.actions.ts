import { User } from './../../../core/interfaces/User';
import { createAction, props } from "@ngrx/store";

export const loginFail = createAction('- [AUTH] LOGIN FAIL -');
export const authMeFail = createAction('- [AUTH] AUTH ME FAIL -');

export const loginSuccess = createAction( '- [AUTH] LOGIN SUCCESS - ',  props<{ accessToken:string }>() );
export const authMe = createAction( '- [AUTH] AUTH ME (INFO USER) -',  props<{ user:User}>() );

//Actions Login
export const loginStart = createAction('- [AUTH] LOGIN START -', props<{email:string, password:string}>() );
export const logout = createAction( '- [AUTH] LOGOUT -' );

//TODO: Crear un action para que se ejecute en: DateCreation + 24 horas
// export const checkTokenExpiration = createAction('- [AUTH] INIT INTERVAL: CHECK TOKEN EXPIRATION -');

