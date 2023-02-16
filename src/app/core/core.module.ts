import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './components/loader/loader.component';
import { FooterComponent } from './components/footer/footer.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    FooterComponent,
    AlertComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    AlertComponent,
    LoaderComponent
  ]
})
export class CoreModule { }
