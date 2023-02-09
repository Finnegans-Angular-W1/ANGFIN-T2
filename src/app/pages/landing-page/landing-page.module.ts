import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { PreviewComponent } from './components/preview/preview.component';
import { Section2Component } from './components/section2/section2.component';
import { Section1Component } from './components/section1/section1.component';


@NgModule({
  declarations: [
    LandingNavbarComponent,
    LandingLayoutComponent,
    PreviewComponent,
    Section2Component,
    Section1Component
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
