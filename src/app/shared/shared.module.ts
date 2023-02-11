import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { TitleComponent } from './components/title/title.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    ModalComponent
    AlertComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TitleComponent,
    LoaderComponent,
    ModalComponent
    AlertComponent
  ]
})

export class SharedModule { }
