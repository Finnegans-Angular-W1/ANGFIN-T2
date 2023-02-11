import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { TipoDeCambioComponent } from './components/tipo-de-cambio/tipo-de-cambio.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {
    path: "",
    component: SidebarComponent,
    children: 
      [{
        path: "home",
        component: HomeComponent
      },
      {
        path: 'divisa',
        component: TipoDeCambioComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
