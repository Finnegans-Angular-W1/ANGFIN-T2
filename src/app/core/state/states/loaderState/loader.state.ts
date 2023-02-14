export interface LoaderState {
    show:boolean;
    message:string;
}

export const initialLoaderState = {
    show: false,
    message: ''
}

export const featureKey = 'loader';