import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRegistroRoutingModule } from './auth-registro-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TermsComponent } from './registro/terms/terms.component';


@NgModule({
  declarations: [
    RegistroComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    AuthRegistroRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthRegistroModule { }
