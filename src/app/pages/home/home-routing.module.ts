import { DivisasComponent } from './components/divisas/divisas.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { ProfileComponent } from './components/profile/profile.component';

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
          path: "perfil",
          component: ProfileComponent
        },
        {
          path: "modal",
          component: ModalComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
