export interface AlertState {
    show: boolean;
    message: string;
}

export const initialAlertState = {
    show: false,
    message: ''
}

export const featureKey = 'alert';