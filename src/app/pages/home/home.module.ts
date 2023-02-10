import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { GananciaInversionComponent } from "./components/inversion/ganancia-inversion/ganancia-inversion.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule } from "@angular/core";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TransactionsFormComponent } from "./components/transactions-form/transactions-form.component";

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    TransactionsFormComponent,
    GananciaInversionComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
