import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    TitleComponent,
    LoaderComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TitleComponent,
    LoaderComponent,
    ProfileComponent
  ]
})

export class SharedModule { }
