import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader/loader.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ModalComponent } from './components/modal/modal.component';
import { TitleComponent } from './components/title/title.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    ProfileComponent,
    ModalComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TitleComponent,
    LoaderComponent,
    ProfileComponent,
    ModalComponent,
    AlertComponent
  ]
})

export class SharedModule { }
