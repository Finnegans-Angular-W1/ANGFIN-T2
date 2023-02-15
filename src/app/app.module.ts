import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
<<<<<<< HEAD
=======
import { environment } from '../environments/environment';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeModule } from "./pages/home/home.module";
import { AuthLoginModule } from './pages/auth-login/auth-login.module';
>>>>>>> 6c918c1 (feat error interceptor)

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import * as AppState from './core/state/app.state';
<<<<<<< HEAD

=======
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
>>>>>>> 6c918c1 (feat error interceptor)
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,  
    BrowserAnimationsModule,
    StoreModule.forRoot(AppState.reducers, { initialState: AppState.initialAppState }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,
    HttpClientModule,
    CoreModule
  ],
<<<<<<< HEAD
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
=======
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
>>>>>>> 6c918c1 (feat error interceptor)
  bootstrap: [AppComponent]
})
export class AppModule { }