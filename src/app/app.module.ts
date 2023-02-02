import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from "./pages/home/home.module";

@NgModule({

  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,    
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    AppRoutingModule,
    HttpClientModule,
    HomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
