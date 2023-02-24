import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
//NGRX
import * as AppState from './core/state/app.state';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './pages/auth-login/state/auth.effects';
//NGRX - PERSIST STATE
import { localStorageSync } from 'ngrx-store-localstorage';

const INITIAL_STATE = JSON.parse(localStorage.getItem('app-state') as string) || AppState.initialAppState;

export function localStorageSyncReducer(reducer: ActionReducer<any>) {
  return localStorageSync({ keys: ['auth'], rehydrate: true })(reducer);
}

const META_REDUCERS: MetaReducer<AppState.AppState>[] = [localStorageSyncReducer];

//-------------------//
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    StoreModule.forRoot(AppState.reducers, { initialState: INITIAL_STATE, metaReducers: META_REDUCERS }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    HttpClientModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
