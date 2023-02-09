import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { TitleComponent } from './components/title/title.component';
import { AlertComponent } from './components/alert/alert.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    SafeHTMLPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    SafeHTMLPipe
  ]
})

export class SharedModule { }
