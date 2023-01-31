import { User } from './../../../core/interfaces/User';

export interface AuthState {
    user: User | null;
    accessToken: string;
}

export const initialState = {
    user: null,
    accessToken: ''
}