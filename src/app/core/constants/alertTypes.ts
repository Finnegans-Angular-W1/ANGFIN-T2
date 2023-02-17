const errorAlert:alertType = {
    bg: 'bg-red-300',
    text:'text-teal-900',
    d_line: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
}

const successAlert:alertType = {
    bg:'bg-teal-100',
    text: 'text-teal-900',
    d_line: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
}

const warningAlert:alertType = {
    bg: 'bg-yellow-200',
    text: 'text-orange-700',
    d_line: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
}

export interface alertType {
    bg: string;
    text: string;
    d_line: string;
}

export const ALERTS_TYPES = {
    error: errorAlert,
    success: successAlert,
    warning: warningAlert
}