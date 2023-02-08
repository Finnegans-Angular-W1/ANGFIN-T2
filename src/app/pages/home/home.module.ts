import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { GananciaInversionComponent } from './components/inversion/ganancia-inversion/ganancia-inversion.component';

@NgModule({
  declarations: [HomeComponent, FooterComponent, SidebarComponent, GananciaInversionComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
