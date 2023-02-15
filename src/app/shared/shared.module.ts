import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { PasswordResetComponent } from './components/profile/renew-password/renew-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
  ]
})

export class SharedModule { }
