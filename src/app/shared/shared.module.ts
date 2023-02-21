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
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    ProfileComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    TitleComponent,
    ModalComponent,
    SafeHTMLPipe,
    ProfileComponent,
    CardComponent,
    ]
})
export class SharedModule {}
