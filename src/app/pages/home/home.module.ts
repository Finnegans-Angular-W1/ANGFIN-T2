import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from "./home-routing.module";
import { SharedModule } from 'src/app/shared/shared.module';
import { CambiarMonedaComponent } from './components/cambiar-moneda/cambiar-moneda.component';
import { GananciaInversionComponent } from "./components/inversion/ganancia-inversion/ganancia-inversion.component";

import { NgxEchartsModule } from 'ngx-echarts';

import { HomeComponent } from "./components/home/home.component";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';
import { TransactionsFormComponent } from "./components/transactions-form/transactions-form.component";
import { DivisasComponent } from './components/divisas/divisas.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { SendMoneyComponent } from './components/home/send-money/send-money.component';
import { LayoutComponent } from './layout/layout.component';
import { CoreModule } from 'src/app/core/core.module';
import { CargarSaldosComponent } from './components/cargar-saldos/cargar-saldos.component';

import { CargarGastosComponent } from "./components/cargar-gastos/cargar-gastos.component";
import { ProfileComponent } from './components/profile/profile.component';
import { NavStaticLinkComponent } from './components/sidebar/nav-static-link/nav-static-link.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { ModalGastosComponent } from './components/modal-gastos/modal-gastos.component';
import { PlazofijoChartComponent } from './components/plazofijo-chart/plazofijo-chart.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarComponent,
    TransactionListComponent,
    GananciaInversionComponent,
    TipoDeCambioComponent,
    TransactionsFormComponent,
    CambiarMonedaComponent,
    DivisasComponent,
    SendMoneyComponent,
    LayoutComponent,
    CargarSaldosComponent,
    NavStaticLinkComponent,
    CargarGastosComponent,
    ProfileComponent,
    PrestamosComponent,
    ModalGastosComponent,
    PlazofijoChartComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    CoreModule
  ]
})
export class HomeModule {}