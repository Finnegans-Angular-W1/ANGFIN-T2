import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { GananciaInversionComponent } from "./components/inversion/ganancia-inversion/ganancia-inversion.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';
import { TransactionsFormComponent } from "./components/transactions-form/transactions-form.component";
import { DivisasComponent } from './components/divisas/divisas.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { LayoutComponent } from './layout/layout.component';
import { CambiarMonedaComponent } from "./components/cambiar-moneda/cambiar-moneda.component";

import { SendMoneyComponent } from "./components/home/send-money/send-money.component";
import { CargarGastosComponent } from "./components/cargar-gastos/cargar-gastos.component";
import { CargarSaldosComponent } from './components/cargar-saldos/cargar-saldos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavStaticLinkComponent } from './components/sidebar/nav-static-link/nav-static-link.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
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
    CargarSaldosComponent,
    NavStaticLinkComponent,
    CargarGastosComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule {}