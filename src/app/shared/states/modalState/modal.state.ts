
export interface ModalState {
    open: boolean;
    modalAction:string;
}

export const initalModalState = {
    open: false,
    modalAction: ''
}


//*Selector key
export const featureKey = 'modal';