import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DivisasComponent } from './components/divisas/divisas.component';
import { HomeComponent } from './components/home/home.component';
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
        path: 'divisas',
        component: DivisasComponent,
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
