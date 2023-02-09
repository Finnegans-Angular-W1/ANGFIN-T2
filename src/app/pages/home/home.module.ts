import { CommonModule } from '@angular/common';
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SendMoneyComponent } from './components/home/send-money/send-money.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarComponent } from './sidebar/sidebar.component';

import { GananciaInversionComponent } from './components/inversion/ganancia-inversion/ganancia-inversion.component';
import { TransactionsFormComponent } from './components/transactions-form/transactions-form.component';

@NgModule({
  declarations: [
    FooterComponent, 
    HomeComponent, 
    SidebarComponent, 
    TransactionsFormComponent,
<<<<<<< Updated upstream
    SendMoneyComponent
=======
    GananciaInversionComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],

})
export class HomeModule {}
