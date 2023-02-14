import { DivisasComponent } from './components/divisas/divisas.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from 'src/app/shared/components/profile/profile.component';

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
        },
        {
          path: "profile",
          component: ProfileComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
