import { FormsModule, ReactiveFormsModule } from '@angular/forms';
<<<<<<<<< Temporary merge branch 1
import { AlertComponent } from './components/alert/alert.component';
=========
>>>>>>>>> Temporary merge branch 2
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';

import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { CardComponent } from './components/card/card.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
<<<<<<<<< Temporary merge branch 1
    SafeHTMLPipe,
    AlertComponent,
    CardComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    TitleComponent,
    SafeHTMLPipe,
    PasswordResetComponent,
    ProfileComponent,
=========
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    CardComponent,
    ModalComponent,
    SafeHTMLPipe,
    ProfileComponent,
    SafeHTMLPipe,
>>>>>>>>> Temporary merge branch 2
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
<<<<<<<<< Temporary merge branch 1
    SafeHTMLPipe,
    AlertComponent,
    CardComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    TitleComponent,
    PasswordResetComponent,
=========
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    CardComponent,
>>>>>>>>> Temporary merge branch 2
    ProfileComponent,
    SafeHTMLPipe,
    TitleComponent,
    ]
})
export class SharedModule {}
