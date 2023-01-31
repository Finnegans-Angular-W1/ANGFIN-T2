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