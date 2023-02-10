import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { TransactionsFormComponent } from './components/transactions-form/transactions-form.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    FooterComponent, 
    HomeComponent, 
    SidebarComponent, 
    TransactionsFormComponent, 
    TransactionListComponent
  ],
  imports: [
    CommonModule, 
    SharedModule,
    HomeRoutingModule, 
    ReactiveFormsModule
  ],
})
export class HomeModule {}
