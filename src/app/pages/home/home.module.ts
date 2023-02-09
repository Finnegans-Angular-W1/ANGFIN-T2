import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SendMoneyComponent } from "./components/send-money/send-money.component";
import { SharedModule } from "src/app/shared/shared.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TransactionsFormComponent } from "./components/transactions-form/transactions-form.component";

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    TransactionsFormComponent,
    SendMoneyComponent,
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule, ReactiveFormsModule],
})
export class HomeModule {}
