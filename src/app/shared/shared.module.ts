import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TitleComponent } from './components/title/title.component';
import { ModalComponent } from './components/modal/modal.component';
import { SafeHTMLPipe } from './pipes/safe-html.pipe';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations:[
    SafeHTMLPipe,
    CardComponent,
    ModalComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SafeHTMLPipe,
    CardComponent,
    SafeHTMLPipe,
    ModalComponent,
    TitleComponent,
    ]
})
export class SharedModule {}
