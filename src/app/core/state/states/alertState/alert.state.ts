export interface AlertState {
    show: boolean;
    message: string;
    alertType: string;
}

export const initialAlertState = {
    show: false,
    alertType: '',
    message: ''
}

export const featureKey = 'alert';