import { LoaderState } from './../loaderState/loader.state';
import { selectAppState } from '../../app.state';
import { createSelector } from '@ngrx/store';



export const selectLoaderState = createSelector(selectAppState, (state)=> (state.loader));

export const getLoaderShow = createSelector(
    selectLoaderState, 
    (state:LoaderState) => state.show
);

export const getLoaderMessage = createSelector(
    selectLoaderState, 
    (state:LoaderState)=> state.message
);