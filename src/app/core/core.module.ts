import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';
import { DarkmodeToggleComponent } from './components/darkmode-toggle/darkmode-toggle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';

@NgModule({
  declarations: [
    FooterComponent,
    AlertComponent,
    LoaderComponent,
    DarkmodeToggleComponent,
    NavAuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[
    FooterComponent,
    AlertComponent,
    LoaderComponent,
    DarkmodeToggleComponent,
    NavAuthComponent
  ]
})
export class CoreModule { }
