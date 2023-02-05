import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TitleComponent,
    LoaderComponent
  ]
})

export class SharedModule { }
