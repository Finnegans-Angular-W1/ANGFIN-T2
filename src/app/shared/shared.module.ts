import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { PasswordResetComponent } from './components/profile/renew-password/renew-password.component';
import { TitleComponent } from './components/title/title.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    TitleComponent,
    ModalComponent,
    PasswordResetComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TitleComponent,
    ModalComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
  ]
})

export class SharedModule { }
