import { DivisasComponent } from './components/divisas/divisas.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children:
      [
        {
          path:'',
          component: HomeComponent
        },
        {
          path: "divisas",
          component: DivisasComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
