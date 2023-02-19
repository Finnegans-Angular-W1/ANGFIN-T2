import { initialLoaderState, LoaderState } from './loader.state';
import { createReducer, on } from '@ngrx/store';


import * as fromLoaderActions from './loader.actions';

export const loaderReducer = createReducer(
    initialLoaderState,
    on(fromLoaderActions.showLoader, (state:LoaderState, { message} ) => ({...state, show:true, message})),
    on(fromLoaderActions.hideLoader, (state:LoaderState)=> ({...state, show: initialLoaderState.show, message: initialLoaderState.message}))
)