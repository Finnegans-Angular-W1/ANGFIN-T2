
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';

import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { TitleComponent } from './components/title/title.component';
import { ModalComponent } from './components/modal/modal.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [

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
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    ProfileComponent,
    SafeHTMLPipe,
    CardComponent,

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
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    CardComponent,
    ProfileComponent,
    CardComponent,
    ]
})
export class SharedModule {}
