import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { Section2Component } from './components/section2/section2.component';
import { Section1Component } from './components/section1/section1.component';
import { Section3Component } from './components/section3/section3.component';


@NgModule({
  declarations: [
    LandingNavbarComponent,
    LandingLayoutComponent,
    Section2Component,
    Section1Component,
    Section3Component
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
