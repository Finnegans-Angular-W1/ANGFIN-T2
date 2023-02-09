import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRegistroRoutingModule } from './auth-registro-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRegistroRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AuthRegistroModule { }
