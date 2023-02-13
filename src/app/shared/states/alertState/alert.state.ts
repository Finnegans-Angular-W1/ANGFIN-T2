export interface AlertState {
    show: boolean;
    alertMessage: string;
}

export const initialAlertState = {
    show: false,
    alertMessage: ''
}

export const featureKey = 'alert';