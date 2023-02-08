

export interface ModalState {
    open: boolean;
    action: 'accept' | 'cancel' | '';
}

export const initalModalState = {
    open: false,
    action: ''
}


//*Selector key
export const featureKey = 'modal';