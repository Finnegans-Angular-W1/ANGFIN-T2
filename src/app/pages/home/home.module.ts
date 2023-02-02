import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [HomeComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
