import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ModalGastosComponent } from './components/modal-gastos/modal-gastos.component';
import { PlazofijoChartComponent } from './components/plazofijo-chart/plazofijo-chart.component';
import { CambiarMonedaComponent } from './components/cambiar-moneda/cambiar-moneda.component';
import { CargarGastosComponent } from "./components/cargar-gastos/cargar-gastos.component";
import { CargarSaldosComponent } from './components/cargar-saldos/cargar-saldos.component';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CoreModule } from 'src/app/core/core.module';
import { DivisasComponent } from './components/divisas/divisas.component';
import { GananciaInversionComponent } from "./components/inversion/ganancia-inversion/ganancia-inversion.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { LayoutComponent } from './layout/layout.component';
import { NavStaticLinkComponent } from './components/sidebar/nav-static-link/nav-static-link.component';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SendMoneyComponent } from './components/home/send-money/send-money.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionsFormComponent } from "./components/transactions-form/transactions-form.component";
import { ProfileSidebarComponent } from './components/profile/profile-sidebar/profile-sidebar.component';
import { FiltrarTablaPipe } from './components/transaction-list/filtrar-tabla.pipe';

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
    PlazofijoChartComponent,
    ContactoComponent,
    ProfileSidebarComponent,
    FiltrarTablaPipe,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    CoreModule,
    FormsModule
  ]
})
export class HomeModule {}