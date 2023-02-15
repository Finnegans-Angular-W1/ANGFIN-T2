import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { PasswordResetComponent } from './components/profile/renew-password/renew-password.component';
import { TitleComponent } from './components/title/title.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
<<<<<<< HEAD
    AlertComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
],
=======
    AlertComponent
  ],
>>>>>>> 6c918c1 (feat error interceptor)
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
<<<<<<< HEAD
    AlertComponent,
    PasswordResetComponent,
    ProfileComponent,
    SafeHTMLPipe,
=======
    AlertComponent
>>>>>>> 6c918c1 (feat error interceptor)
  ]
})

export class SharedModule { }
