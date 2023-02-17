import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { PasswordResetComponent } from './components/profile/renew-password/renew-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    CardComponent,
    TitleComponent,
    ModalComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
    TitleComponent,
    SafeHTMLPipe,
    PasswordResetComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CardComponent,
    TitleComponent,
    ModalComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
    TitleComponent
  ]
})

export class SharedModule { }
