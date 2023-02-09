import { CambiarMonedaComponent } from './components/cambiar-moneda/cambiar-moneda.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';

import { GananciaInversionComponent } from './components/inversion/ganancia-inversion/ganancia-inversion.component';
import { TransactionsFormComponent } from './components/transactions-form/transactions-form.component';

@NgModule({
  declarations: [
    FooterComponent, 
    HomeComponent, 
    SidebarComponent, 
    TransactionsFormComponent,
    GananciaInversionComponent,
    CambiarMonedaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class HomeModule {}
