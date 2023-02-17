import { User } from './../../../core/interfaces/User';
import { createAction, props } from "@ngrx/store";
import { RegisterRequest } from '../../auth-registro/interfaces/registerRequest';
import { BodyRequest } from '../interfaces/body-request';

export const loginFail = createAction('- [AUTH] LOGIN FAIL -');
export const authMeFail = createAction('- [AUTH] AUTH ME FAIL -');

export const loginSuccess = createAction( '- [AUTH] LOGIN SUCCESS - ',  props<{ accessToken:string }>() );
export const authMe = createAction( '- [AUTH] AUTH ME (INFO USER) -',  props<{ user:User}>() );

//Actions Login
export const loginStart = createAction('- [AUTH] LOGIN START -', props<{email:string, password:string}>() );
export const logout = createAction( '- [AUTH] LOGOUT -' );

//Actions Token 
export const logoutExpiration = createAction('- [AUTH] INIT TIMEOUT: CHECK TOKEN EXPIRATION -');
export const readToken = createAction('- [AUTH] READ TOKEN AND CHECK -');

//Actions Register
export const registerStart = createAction('- [AUTH] REGISTER START -', props<{requestBody:RegisterRequest}>() );

export const registerSuccess = createAction('- [AUTH] REGISTER SUCCESS -');
export const registerFail = createAction('- [AUTH] REGISTER FAIL -');

//Actions Edit Profile
export const editProfileStart = createAction(
    '[PROFILE EDIT] EDIT START',
    props<{ updateUser: BodyRequest, id:number}>()   
);

export const editProfileSuccess = createAction(
    '[PROFILE EDIT] EDIT SUCCESS',
    props<{ updateUser: User}>()  
);

export const editProfileFail = createAction('[PROFILE EDIT] EDIT FAIL');