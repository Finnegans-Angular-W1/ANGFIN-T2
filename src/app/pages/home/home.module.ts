
import { NgModule } from '@angular/core';
import { CambiarMonedaComponent } from './components/cambiar-moneda/cambiar-moneda.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { GananciaInversionComponent } from "./components/inversion/ganancia-inversion/ganancia-inversion.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';
import { TransactionsFormComponent } from "./components/transactions-form/transactions-form.component";
import { DivisasComponent } from './components/divisas/divisas.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { SendMoneyComponent } from './components/home/send-money/send-money.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    TransactionListComponent,
    TransactionsFormComponent,
    GananciaInversionComponent,
    TipoDeCambioComponent,
    CambiarMonedaComponent,
    DivisasComponent,
    SendMoneyComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule {}
