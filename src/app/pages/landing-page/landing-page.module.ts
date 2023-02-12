import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { Section2Component } from './components/section2/section2.component';
import { Section1Component } from './components/section1/section1.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { TabComponent } from './components/tab/tab.component';
import { CollapseComponent } from './components/collapse/collapse.component';
import { Section5Component } from './components/section5/section5.component';
import { Section6Component } from './components/section6/section6.component';
import { SocialComponent } from './components/social/social.component';


@NgModule({
  declarations: [
    LandingNavbarComponent,
    LandingLayoutComponent,
    Section2Component,
    Section1Component,
    Section3Component,
    Section4Component,
    TabComponent,
    CollapseComponent,
    Section5Component,
    Section6Component,
    SocialComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingPageRoutingModule
  ]
})
export class LandingPageModule { }
