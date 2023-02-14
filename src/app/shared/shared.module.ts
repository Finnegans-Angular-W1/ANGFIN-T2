import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './components/alert/alert.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { PasswordResetComponent } from './components/profile/renew-password/renew-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AlertComponent,
    CardComponent,
    LoaderComponent,
    ModalComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
    TitleComponent
],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AlertComponent,
    CardComponent,
    LoaderComponent,
    ModalComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
    TitleComponent
  ]
})

export class SharedModule { }
