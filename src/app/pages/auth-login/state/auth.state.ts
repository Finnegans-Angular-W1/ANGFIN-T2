import { BodyRequest } from '../interfaces/body-request';
import { User } from './../../../core/interfaces/User';

export interface AuthState {
    user: User;
    accessToken: string;
}

export const initialAuthState = {
    user: {id:-1, first_name: '', last_name:'', email: '', roleId: -1, points: -1, createdAt: '', updatedAt: ''},
    accessToken: ''
}

//*Selector key
export const featureKey = 'auth';


//Espero que esté bien. Si no lo está, sacar importación.
export interface AuthEditState {
    bodyRequest: BodyRequest;
}

export const initialAuthEditState = {
    bodyRequest: {userName: '', name:''}
}