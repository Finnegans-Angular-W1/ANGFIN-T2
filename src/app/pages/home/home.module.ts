
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';
import { CambiarMonedaComponent } from './components/cambiar-moneda/cambiar-moneda.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { GananciaInversionComponent } from "./components/inversion/ganancia-inversion/ganancia-inversion.component";
import { HomeComponent } from "./components/home/home.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { SendMoneyComponent } from './components/home/send-money/send-money.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    TransactionListComponent,
    GananciaInversionComponent,
    TipoDeCambioComponent,
    CambiarMonedaComponent,
    DivisasComponent,
    SendMoneyComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {}
