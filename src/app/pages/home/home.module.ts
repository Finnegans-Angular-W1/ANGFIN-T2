import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';

@NgModule({
  declarations: [HomeComponent, 
  FooterComponent, 
  SidebarComponent,
  TipoDeCambioComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
