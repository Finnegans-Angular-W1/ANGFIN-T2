import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';

import { ModalComponent } from './components/modal/modal.component';
import { PasswordResetComponent } from './components/profile/renew-password/renew-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    AlertComponent,
    CardComponent,
    LoaderComponent,
    ModalComponent,
    SafeHTMLPipe,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    AlertComponent,
    CardComponent,
    LoaderComponent,
    ModalComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
    TitleComponent,
    ]
})

export class SharedModule { }
