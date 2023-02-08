import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { LoaderComponent } from './components/loader/loader.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    AlertComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TitleComponent,
    LoaderComponent,
    AlertComponent
  ]
})

export class SharedModule { }
