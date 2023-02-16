
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';
import { CambiarMonedaComponent } from './components/cambiar-moneda/cambiar-moneda.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { GananciaInversionComponent } from "./components/inversion/ganancia-inversion/ganancia-inversion.component";
import { HomeComponent } from "./components/home/home.component";
import { SendMoneyComponent } from './components/home/send-money/send-money.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionsFormComponent } from './components/transactions-form/transactions-form.component';
import { LayoutComponent } from './layout/layout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    TransactionListComponent,
    TransactionsFormComponent,
    GananciaInversionComponent,
    TipoDeCambioComponent,
    LayoutComponent,
    CambiarMonedaComponent,
    DivisasComponent,
    SendMoneyComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule {}
