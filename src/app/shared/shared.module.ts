import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoaderComponent } from './components/loader/loader.component';
import { ModalComponent } from './components/modal/modal.component';
import { TitleComponent } from './components/title/title.component';
import { AlertComponent } from './components/alert/alert.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    SafeHTMLPipe,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    LoaderComponent,
    ModalComponent,
    AlertComponent,
    SafeHTMLPipe,
    CardComponent
  ]
})

export class SharedModule { }
