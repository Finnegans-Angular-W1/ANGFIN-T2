import { User } from './../../../core/interfaces/User';

export interface AuthState {
    user: User;
    accessToken: string;
}

export const initialAuthState = {
    user: {first_name: '', last_name:'', email: '', roleId: -1, points: -1},
    accessToken: ''
}

//*Selector key
export const featureKey = 'auth';