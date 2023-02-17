import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';

import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [

    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    CardComponent,
    ModalComponent,
    SafeHTMLPipe,
    ProfileComponent,
    CardComponent,
    SafeHTMLPipe,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [

    SafeHTMLPipe,
    AlertComponent,
    CardComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    TitleComponent,
    PasswordResetComponent,

    ProfileComponent,
    SafeHTMLPipe
    ]
})

export class SharedModule { }
