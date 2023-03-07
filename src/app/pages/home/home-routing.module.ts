import { RouterModule, Routes } from '@angular/router';

import { CargarGastosComponent } from './components/cargar-gastos/cargar-gastos.component';
import { CargarSaldosComponent } from './components/cargar-saldos/cargar-saldos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { GananciaInversionComponent } from './components/inversion/ganancia-inversion/ganancia-inversion.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { NgModule } from '@angular/core';
import { PrestamosComponent } from './components/prestamos/prestamos.component';
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
          path: "ingresos",
          component: CargarSaldosComponent
        },
        {
          path: "egresos",
          component: CargarGastosComponent
        },
        {
          path: "plazo-fijo",
          component: GananciaInversionComponent
        },
        {
          path: "prestamos",
          component: PrestamosComponent
        },
        {
          path: "contacto",
          component: ContactoComponent
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
