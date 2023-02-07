import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { TransactionsFormComponent } from './components/transactions-form/transactions-form.component';

@NgModule({
  declarations: [
    FooterComponent, 
    HomeComponent, 
    SidebarComponent, 
    TransactionsFormComponent
  ],
  imports: [
    CommonModule, 
    HomeRoutingModule, 
    ReactiveFormsModule
  ],
})
export class HomeModule {}
