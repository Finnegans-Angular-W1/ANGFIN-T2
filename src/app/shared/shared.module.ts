import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TitleComponent } from './components/title/title.component';
import { ModalComponent } from './components/modal/modal.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/card/card.component';
import { PasswordResetComponent } from './components/profile/renew-password/renew-password.component';

@NgModule({
  declarations: [
    SafeHTMLPipe,
    CardComponent,
    ModalComponent,
    TitleComponent,
    PasswordResetComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [

    SafeHTMLPipe,
    CardComponent,
    ModalComponent,
    TitleComponent,
    PasswordResetComponent,
    ProfileComponent,
    ]
})
export class SharedModule {}
