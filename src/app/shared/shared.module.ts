import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './components/alert/alert.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgModule } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
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
    ProfileComponent,
    SafeHTMLPipe,
  ]
})

export class SharedModule { }
